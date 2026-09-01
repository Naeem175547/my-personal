import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { client, S3_BUCKET } from "../config/aws-config.js";
import {
  PutObjectCommand,
  ListObjectsV2Command,
  CopyObjectCommand,
} from "@aws-sdk/client-s3";

export async function gitInit() {
  const repoPath = path.join(process.cwd(), ".myGit");
  const commitPath = path.join(repoPath, "commits");

  try {
    await fs.mkdir(repoPath, {
      recursive: true,
    });

    await fs.mkdir(commitPath, {
      recursive: true,
    });

    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({
        bucket: process.env.BUCKET,
      }),
    );

    console.log("Git initialized successfully");
  } catch (err) {
    console.error(err);
  }
}

//handler for git add

export async function gitAdd(filePath) {
  const repoPath = path.join(process.cwd(), ".myGit");
  const stagingPath = path.join(repoPath, "staging");

  try {
    await fs.mkdir(stagingPath, { recursive: true });
    await fs.copyFile(
      filePath,
      path.join(stagingPath, path.basename(filePath)),
    );

    console.log(`${filePath} added to staging area.`);
  } catch (err) {
    console.error(err);
  }
}

//handler for git commit

export async function gitCommit(message) {
  const repoPath = path.join(process.cwd(), ".myGit");
  const commitsPath = path.join(repoPath, "commits");
  const stagingPath = path.join(repoPath, "staging");

  try {
    const files = await fs.readdir(stagingPath);

    if (files.length === 0) {
      console.log("Nothing to commit.");
      return;
    }

    const commitId = uuidv4();
    const commitPath = path.join(commitsPath, commitId);

    await fs.mkdir(commitPath, { recursive: true });

    for (const file of files) {
      await fs.copyFile(
        path.join(stagingPath, file),
        path.join(commitPath, file),
      );
      console.log(`${file} committed.`);
    }

    const commitData = {
      id: commitId,
      message,
      timestamp: new Date().toISOString(),
      files,
    };

    await fs.writeFile(
      path.join(commitPath, "commit.json"),
      JSON.stringify(commitData, null, 2),
    );

    //clearing stage file

    for (const file of files) {
      await fs.unlink(path.join(stagingPath, file));
    }

    console.log(
      `Commit ${commitId} created successfully with message ${message}.`,
    );
  } catch (err) {
    console.error("Error committing files:", err);
  }
}

//git push

export async function gitPush() {
  const repoPath = path.join(process.cwd(), ".myGit");
  const commitsPath = path.join(repoPath, "commits");
  try {
    const commitsDirs = await fs.readdir(commitsPath);
    for (let commitDir of commitsDirs) {
      const commitDirPath = path.join(commitsPath, commitDir);
      const files = await fs.readdir(commitDirPath);
      for (let file of files) {
        const filePath = path.join(commitDirPath, file);
        const fileContent = await fs.readFile(filePath);
        const params = {
          Bucket: S3_BUCKET,
          Key: `commits/${commitDir}/${file}`,
          Body: fileContent,
        };

        await client.send(new PutObjectCommand(params));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

import { GetObjectCommand } from "@aws-sdk/client-s3";

export async function gitPull() {
  const repoPath = path.join(process.cwd(), ".myGit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const data = await client.send(
      new ListObjectsV2Command({
        Bucket: S3_BUCKET,
        Prefix: "commits/",
      }),
    );

    const keys = data.Contents.map((obj) => obj.Key);

    for (const key of keys) {
      const response = await client.send(
        new GetObjectCommand({
          Bucket: S3_BUCKET,
          Key: key,
        }),
      );

      // Convert stream to Buffer
      const fileContent = Buffer.from(
        await response.Body.transformToByteArray(),
      );
      // console.log(fileContent);

      // Create local path
      const localPath = path.join(repoPath, key);

      // Create folders if needed
      await fs.mkdir(path.dirname(localPath), { recursive: true });

      // Save file
      await fs.writeFile(localPath, fileContent);
    }

    console.log("Pull completed successfully.");
  } catch (err) {
    console.error(err);
  }
}

export async function gitStatus() {
  const repoPath = path.join(process.cwd(), ".myGit");
  const stagingPath = path.join(repoPath, "staging");

  try {
    const files = await fs.readdir(stagingPath);

    if (files.length === 0) {
      console.log("Nothing to commit, working tree clean.");
      return;
    }

    console.log("Changes to be committed:");

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.log("Repository not initialized or staging area not found.");
  }
}

export async function gitRevert(commitId) {
  const repoPath = path.join(process.cwd(), ".myGit");
  const commitsPath = path.join(repoPath, "commits");
  const commitDirPath = path.join(commitsPath, commitId);

  try {
    // Check if commit exists
    await fs.access(commitDirPath);

    const files = await fs.readdir(commitDirPath);

    for (const file of files) {
      if (file === "commit.json") continue;

      const sourcePath = path.join(commitDirPath, file);
      const destinationPath = path.join(process.cwd(), file);

      await fs.copyFile(sourcePath, destinationPath);

      console.log(`${file} restored.`);
    }

    console.log(`Successfully reverted to commit ${commitId}.`);
  } catch (err) {
    console.log("Commit not found.");
    console.error(err);
  }
}
export default {
  gitInit,
  gitAdd,
  gitCommit,
  gitPush,
  gitRevert,
  gitPull,
  gitStatus,
};

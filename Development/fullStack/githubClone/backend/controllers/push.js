import fs from "fs/promises";
import path from "path";
import { s3, S3_BUCKET } from "../config/aws-config.js";

export async function pushRepo() {
  const repoPath = path.resolve(process.cwd(), ".apnaGit");
  const commitPath = path.join(repoPath, "commits");

  try {
    const commitDirs = await fs.readdir(commitPath);
    for (const commitDir of commitDirs) {
      const commitDirPath = path.join(commitPath, commitDir);
      const files = await fs.readdir(commitDirPath);

      for (const file of files) {
        const filePath = path.join(commitDirPath, file);
        const fileContent = await fs.readFile(filePath);

        const params = {
          Bucket: S3_BUCKET,
          Key: `commits/${commitDir}/${file}`,
          Body: fileContent,
        };

        await s3.upload(params).promise();

        // Without.promise():
        // s3.upload(params, (err, data) => {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     console.log(data);
        //   }
        // });
      }
    }
    console.log("All commits pushed to s3.");
  } catch (err) {
    console.log(err);
  }
}

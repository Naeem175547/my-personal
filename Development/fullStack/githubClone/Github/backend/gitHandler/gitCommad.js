import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import gitHandler from "./gitHandler.js";
import dotenv from "dotenv";
dotenv.config();

export default function registerCommand(yargsObject) {
  return yargsObject
    .command(
      "init",
      "Initialize the repo",
      (yargs) => {},
      (argv) => {
        gitHandler.gitInit();
      },
    )
    .command(
      "add <file>",
      "Add file to staging area",
      (yargs) => {
        return yargs.positional("file", {
          type: "string",
          describe: "File name to add",
        });
      },
      (argv) => {
        gitHandler.gitAdd(argv.file);
      },
    )
    .command(
      "commit <message>",
      "commit the changes",
      (yargs) => {
        return yargs.positional("message", {
          type: "string",
          description: "set message",
        });
      },
      (argv) => {
        gitHandler.gitCommit(argv.message);
      },
    )
    .command("push", "push to cloud", {}, () => {
      gitHandler.gitPush();
    })
    .command(
      "revert <commitId>",
      "revert the file",
      (yargs) => {
        return yargs.positional("commitId", {
          type: "string",
          description: "set commitId",
        });
      },
      (argv) => {
        gitHandler.gitRevert(argv.commitId);
      },
    )
    .command("pull", "fetch data from remoote", {}, () => {
      gitHandler.gitPull();
    })
    .command("status", "show status", {}, gitHandler.gitStatus);
}

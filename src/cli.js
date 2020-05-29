import minimist from "minimist";
import { version } from "./cli/version";
import { help } from "./cli/help";
import { configure } from "./cli/configure";
import { search } from "./cli/search";
import { detail } from "./cli/detail";
export async function cli(argsArray) {
  const args = minimist(argsArray.slice(2));
  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "version":
      version(args);
      break;

    case "help":
      help(args);
      break;
    // case "config":
    //   configure(args);
    //   break;

    case "search":
      search(args);
      break;
    case "detail":
      detail(args);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
}

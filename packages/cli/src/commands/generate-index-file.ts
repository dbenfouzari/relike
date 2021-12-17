import { pascalCase } from "change-case";
import * as fs from "fs";
import * as inquirer from "inquirer";
import * as path from "path";

import { generateWarning } from "../generators/index-file";

// eslint-disable-next-line @typescript-eslint/no-var-requires
inquirer.registerPrompt("fuzzypath", require("inquirer-fuzzy-path"));

/** Defines CLI flags */
interface Flags {
  /** Target path */
  path: string;
  /** Excluded component files and folders, comma-separated */
  exclude: string;
}

/** Defines CLI arguments */
type Arguments = [path: string, excluded: string, flags: Flags];

/**
 * Generates an index file.
 *
 * @param {Arguments} args The arguments
 * @example
 * generateIndexFile(...args)
 */
const generateIndexFile = async (...args: Arguments) => {
  const [pathArg, excludedArg, flags] = args;

  let folderPath;
  let excludedFilesAndFolders;

  if (pathArg) folderPath = pathArg;
  if (flags.path) folderPath = flags.path;

  if (excludedArg) excludedFilesAndFolders = excludedArg;
  if (flags.exclude) excludedFilesAndFolders = flags.exclude;

  if (!folderPath) {
    const { pathResponse } = await inquirer.prompt([
      {
        type: "fuzzypath",
        /**
         * Generates exclude path from results.
         *
         * @param {string} nodePath The current path
         * @example
         * excludePath("index.ts")
         * @returns {boolean} should it be excluded
         */
        excludePath: (nodePath: string) => nodePath.startsWith("node_modules"),
        itemType: "directory",
        name: "pathResponse",
        message: "Select a directory to be scanned",
        rootPath: "src",
        default: "src/components",
      },
    ]);

    folderPath = pathResponse;
  }

  if (!excludedFilesAndFolders) {
    const { excludedFolders } = await inquirer.prompt([
      {
        type: "input",
        name: "excludedFolders",
        message: 'Write folders that should be excluded from export list (comma separated eg: "hooks,utils")',
      },
    ]);

    excludedFilesAndFolders = excludedFolders;
  }

  const fullDestination = `./${folderPath}/index.ts`;
  const excluded = excludedFilesAndFolders.split(",");

  const filesAndFoldersInPath = fs.readdirSync(folderPath).filter((fileOrFolder) => !excluded.includes(fileOrFolder));

  let result = generateWarning(folderPath, excludedFilesAndFolders);

  filesAndFoldersInPath.forEach((fileOrFolder) => {
    const fileName = path.parse(fileOrFolder).name;
    result += `export { default as ${pascalCase(fileName)} } from "./${fileName}";\n`;
  });

  fs.writeFileSync(fullDestination, result);
};

export default generateIndexFile;

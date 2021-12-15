import { camelCase, paramCase } from "change-case";
import * as fs from "fs";
import * as inquirer from "inquirer";

import {
  generateComponentFile,
  generateIndexFile,
  generateStoryFile,
  generateStyleFile,
  generateTestFile,
} from "../generators/react";

// eslint-disable-next-line @typescript-eslint/no-var-requires
inquirer.registerPrompt("fuzzypath", require("inquirer-fuzzy-path"));

interface Options {
  component: string;
  path: string;
  style: boolean;
  story: boolean;
  test: boolean;
}

type Arguments = [component: string, path: string, options: Options];

const generateComponent = async (...args: Arguments) => {
  const [componentArg, pathArg, flags] = args;

  let name;
  let path;

  if (componentArg) name = componentArg;
  else if (flags.component) name = flags.component;

  if (pathArg) path = pathArg;
  else if (flags.path) path = flags.path;

  if (!name) {
    const responses = await inquirer.prompt<{ name: string }>([
      { type: "input", name: "name", message: "What' your component name?" },
    ]);

    name = responses.name;
  }

  if (!path) {
    const pathResponses = await inquirer.prompt([
      {
        type: "fuzzypath",
        excludePath: (nodePath: string) => nodePath.startsWith("node_modules"),
        itemType: "directory",
        name: "destination",
        message: "Select a target directory",
        rootPath: "src",
        default: "src/components/",
      },
    ]);

    path = pathResponses.destination;
  }

  //////////////////////////////
  /// Handles files creation ///
  //////////////////////////////

  const finalComponentName = camelCase(paramCase(name));
  const folderName = paramCase(finalComponentName);
  const fullDestination = `./${path}/${folderName}`;

  // Create file directory
  if (!fs.existsSync(fullDestination)) {
    fs.mkdirSync(fullDestination);
  }

  const indexFile = generateIndexFile("name", name);
  const componentFile = generateComponentFile("name", name, flags.style);

  fs.writeFileSync(`${fullDestination}/${indexFile.path}`, indexFile.content);
  fs.writeFileSync(`${fullDestination}/${componentFile.path}`, componentFile.content);

  if (flags.test) {
    const testFile = generateTestFile("name", name);
    fs.writeFileSync(`${fullDestination}/${testFile.path}`, testFile.content);
  }
  if (flags.style) {
    const styleFile = generateStyleFile("name", name);
    fs.writeFileSync(`${fullDestination}/${styleFile.path}`, styleFile.content);
  }
  if (flags.story) {
    const storyFile = generateStoryFile("name", name);
    fs.writeFileSync(`${fullDestination}/${storyFile.path}`, storyFile.content);
  }

  console.log(`Component name is ${name} and will be stored in ${path}`);
};

export default generateComponent;

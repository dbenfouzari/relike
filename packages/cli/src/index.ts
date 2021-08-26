#!/usr/bin/env node

import { program } from "commander";

import { generateComponent, generateIndexFile, generateNativeComponent } from "./commands";

program.version("0.0.1");

program.name("yarn relike");

/// Generate React Component.
/// $ relike generate:component --name Button --path src/components
/// $ relike g:c --name Button --path src/components
program
  .command("generate:component")
  .alias("g:c")
  .description("Generate React Component. It includes Storybook's story, CSS module stylesheet, and test file.")
  .usage(
    `
  # By passing arguments
  $ relike generate:component button src/components
   
  # By passing flags
  $ relike generate:component --name=button --path=src/components
   
  # By following wizard
  $ relike generate:component

  ? What is the component name ? button
  ? Select a target directory src/components/
  ✨  Done in 4.24s.
`,
  )

  .argument("[component]", "Component name")
  .argument("[path]", "Your component's path")

  .option("-n, --name <component>", "Component name")
  .option("-p, --path <path>", "Your component's path")
  .option("--no-style", "Do not generate CSS module")
  .option("--no-story", "Do not generate story")
  .option("--no-test", "Do not generate test")
  .option("-d, --debug", "Output extra debugging")

  .action(generateComponent)

  .showHelpAfterError("(add --help for additional information)");

/// Generate React-Native Component.
/// $ relike generate:native-component --name Button --path src/components
/// $ relike g:nc --name Button --path src/components
program
  .command("generate:native-component")
  .alias("g:nc")
  .description("Generate React-Native Component. It includes Storybook's story and test file.")
  .usage(
    `
  # By passing arguments
  $ relike generate:native-component button src/components
   
  # By passing flags
  $ relike generate:native-component --name=button --path=src/components
   
  # By following wizard
  $ relike generate:native-component

  ? What is the component name ? button
  ? Select a target directory src/components/
  ✨  Done in 4.24s.
`,
  )

  .argument("[component]", "Component name")
  .argument("[path]", "Your component's path")

  .option("-n, --name <component>", "Component name")
  .option("-p, --path <path>", "Your component's path")
  .option("--no-story", "Do not generate story")
  .option("--no-test", "Do not generate test")
  .option("-d, --debug", "Output extra debugging")

  .action(generateNativeComponent)

  .showHelpAfterError("(add --help for additional information)");

/// Generate exports index file.
/// $ relike generate:index --path src/components
/// $ relike g:i --path src/components
program
  .command("generate:index")
  .alias("g:i")
  .description("Generate exports index file.")
  .usage(
    `
  # By passing arguments
  $ relike generate:index src/components
   
  # By passing flags
  $ relike generate:index --path=src/components
   
  # By following wizard
  $ relike generate:index
`,
  )

  .argument("[path]", "Your folder path")
  .argument("[excluded]", "Excluded files and folders, comma separated")
  .option("-p, --path <path>", "Your folder path")
  .option("-e, --exclude <excluded>", "Excluded files and folders, comma separated")
  .action(generateIndexFile)
  .showHelpAfterError("(add --help for additional information)");

program.parse();

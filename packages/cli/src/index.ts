import { program } from 'commander';

import { generateComponent } from './commands';

program.version('0.0.1');

program.name('yarn fastics');

/// Generate React Component.
/// $ fastics generate:component --name Button --path src/components
/// $ fastics g:c --name Button --path src/components
program
  .command('generate:component')
  .alias('g:c')
  .description('Generate React Component. It includes Storybook\'s story, CSS module stylesheet, and test file.')
  .usage(`
  # By passing arguments
  $ fastics generate:component button src/components
   
  # By passing flags
  $ fastics generate:component --name=button --path=src/components
   
  # By following wizard
  $ fastics generate:component

  ? What is the component name ? button
  ? Select a target directory src/components/
  ✨  Done in 4.24s.
`)

  .argument('[component]', 'Component name')
  .argument('[path]', 'Your component\'s path')

  .option('-n, --name <component>', 'Component name')
  .option('-p, --path <path>', 'Your component\'s path')
  .option('--no-style', 'Do not generate CSS module')
  .option('--no-story', 'Do not generate story')
  .option('--no-test', 'Do not generate test')
  .option('-d, --debug', 'Output extra debugging')

  .action(generateComponent)

  .showHelpAfterError('(add --help for additional information)');

program.parse();

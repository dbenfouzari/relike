# @hastics/cli

This package provides some useful commands to help to build your components.

* [@hastics/cli](#hasticscli)
* [Usage](#usage)
* [Commands](#commands)
    * [`hastics generate:component [NAME] [PATH]`](#hastics-generatecomponent-name-path)
    * [`hastics generate:native-component [NAME] [PATH]`](#hastics-generatenative-component-name-path)
    * [`hastics generate:index [PATH] [EXCLUDED]`](#hastics-generateindex-path-excluded)

# Usage

```sh-session
$ yarn add -D @hastics/cli
$ hastics COMMAND
running command...
$ hastics --help [COMMAND]
USAGE
  $ hastics COMMAND
...
```

# Commands

* [`hastics generate:component [NAME] [PATH]`](#hastics-generatecomponent-name-path)
* [`hastics generate:native-component [NAME] [PATH]`](#hastics-generatenative-component-name-path)
* [`hastics generate:index [PATH] [EXCLUDED]`](#hastics-generateindex-path-excluded)

## `hastics generate:component [NAME] [PATH]`

Generate a React component with reliable skeleton.

By default, it includes a `.module.scss` file, a `.test.tsx` file, and a `.stories.tsx` file.
So if you want to enable the full power of this, you have to install the packages:

```shell
npx sb init
yarn add -D @testing-library/react
```

```
USAGE
  $ hastics generate:component [NAME] [PATH]
  $ hastics g:c [NAME] [PATH]

ARGUMENTS
  NAME  Component name
  PATH  Your component's path

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  Component name
  -p, --path=path  Your component's path
  --no-style       Do not create stylesheet
  --no-story       Do not create Storybook's story
  --no-test        Do not create test file

EXAMPLES
  # By passing arguments
     $ hastics generate:component button src/components

  # By passing flags
     $ hastics generate:component --name=button --path=src/components

  # By following wizard
     $ hastics generate:component

     ? What is the component name ? button
     ? Select a target directory src/components/
     ✨  Done in 4.24s.

  It finally creates a folder like this
  📦 src
    ┣ 📂 components
    ┃ ┣ 📂 button
    ┃ ┃ ┣ 📜 index.ts
    ┃ ┃ ┣ 📜 button.module.scss
    ┃ ┃ ┣ 📜 button.stories.tsx
    ┃ ┃ ┣ 📜 button.test.tsx
    ┃ ┃ ┗ 📜 button.tsx
    ┗ ...
```

## `hastics generate:native-component [NAME] [PATH]`

Generate a React-Native component with reliable skeleton.

By default, it includes a `.test.tsx` file and a `.stories.tsx` file.
So if you want to enable the full power of this, you have to install the packages:

```shell
npx sb init
yarn add -D @testing-library/react-native
```

```
USAGE
  $ hastics generate:native-component [NAME] [PATH]
  $ hastics g:nc [NAME] [PATH]

ARGUMENTS
  NAME  Component name
  PATH  Your component's path

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  Component name
  -p, --path=path  Your component's path
  --no-story       Do not create Storybook's story
  --no-test        Do not create test file

EXAMPLES
  # By passing arguments
     $ hastics generate:native-component button src/components

  # By passing flags
     $ hastics generate:native-component --name=button --path=src/components

  # By following wizard
     $ hastics generate:native-component

     ? What is the component name ? button
     ? Select a target directory src/components/
     ✨  Done in 4.24s.

  It finally creates a folder like this
  📦 src
    ┣ 📂 components
    ┃ ┣ 📂 button
    ┃ ┃ ┣ 📜 index.ts
    ┃ ┃ ┣ 📜 button.stories.tsx
    ┃ ┃ ┣ 📜 button.test.tsx
    ┃ ┃ ┗ 📜 button.tsx
    ┗ ...
```

## `hastics generate:index [PATH] [EXCLUDED]`

This command allows you to automatically generate an `index.ts` file that exports all modules in a folder.

Let's assume you have a folder `components` that actually contains `button`, `icon` and `text` folders.

By calling command

```shell
yarn hastics generate:index src/components
```

you will create an `index.ts` file in `src/components` that will contain

```ts
export { default as Button } from "./button";
export { default as Icon } from "./icon";
export { default as Text } from "./text";
```

```
USAGE
  $ hastics generate:index [NAME] [PATH]
  $ hastics g:i [NAME] [PATH]

ARGUMENTS
  PATH      Your components' folder path
  EXCLUDED  Excluded files and folders, comma separated

OPTIONS
  -h, --help                show CLI help
  -p, --path=path           Your components' folder path
  -e, --excluded=excluded   Excluded files and folders, comma separated

EXAMPLES
  # By passing arguments
     $ hastics generate:index src/components index.ts,react-app-env.d.ts,setupTests.ts,types.ts

  # By passing flags
     $ hastics generate:index --path=src/components --excluded=index.ts,react-app-env.d.ts,setupTests.ts,types.ts
```

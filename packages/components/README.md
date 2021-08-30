# @hastics

This project aims to help by creating beautiful React components, without headache.

In fact, you only need to design your own custom styles and here we go ! You get working components
that work for you.

It also provides a CLI to help you in your development process.

[![CI status][github-action-image]][github-action-url] [![codecov][codecov-image]][codecov-url][![david deps][david-image]][david-url] [![david devDeps][david-dev-image]][david-dev-url] [![Total alerts][lgtm-image]][lgtm-url]

[codecov-image]: https://codecov.io/gh/hastics/hastics/branch/main/graph/badge.svg?token=2jeYgN8SRs
[codecov-url]: https://codecov.io/gh/hastics/hastics/branch/main
[github-action-image]: https://github.com/hastics/hastics/workflows/Quality/badge.svg
[github-action-url]: https://github.com/hastics/hastics/actions?query=workflow%3AQuality
[david-image]: https://img.shields.io/david/hastics/hastics?style=flat-square
[david-dev-url]: https://david-dm.org/hastics/hastics?type=dev
[david-dev-image]: https://img.shields.io/david/dev/hastics/hastics?style=flat-square
[david-url]: https://david-dm.org/hastics/hastics
[lgtm-image]: https://flat.badgen.net/lgtm/alerts/g/hastics/hastics
[lgtm-url]: https://lgtm.com/projects/g/hastics/hastics/alerts/

## Demo

See live demo at https://fastics.github.io/components/

## Installation

```shell
yarn add @hastics/components
```

Or

```shell
npm i -S @hastics/components
```

## Usage

```tsx
import { IconButton, Icon, Icons } from '@hastics/components';

const App = () => (
  <IconButton
    icon={<Icon icon={Icons.ring_volume} />}
    onPress={() => { console.log('pressed!') }}
  />
)
```

[comment]: <> (## Documentation)

[comment]: <> (You can see all documentation on https://fastics.github.io/components/.)

[comment]: <> (It's a component library that exposes all available components.)

## Contributors
Made with ❤️ by [Donovan BENFOUZARI](https://dbenfouzari.tech)

# @hastics

This project aims to help by creating beautiful React components, without headache.

In fact, you only need to design your own custom styles and here we go ! You get working components
that work for you.

## Demo

See live demo at https://hastics.github.io/hastics/

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
## Documentation
You can see all documentation on https://hastics.github.io/hastics/.
It's a component library that exposes all available components.

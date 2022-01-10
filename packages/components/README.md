# @neono

This project aims to help by creating beautiful React components, without headache.

In fact, you only need to design your own custom styles and here we go ! You get working components
that work for you.

## Demo

See live demo at https://neono-dev.github.io/neono/

## Installation

```shell
yarn add @neono/components
```

Or

```shell
npm i -S @neono/components
```

## Usage

```tsx
import { IconButton, Icon, Icons } from '@neono/components';

const App = () => (
  <IconButton
    icon={<Icon icon={Icons.ring_volume} />}
    onPress={() => { console.log('pressed!') }}
  />
)
```
## Documentation
You can see all documentation on https://neono.github.io/neono/.
It's a component library that exposes all available components.

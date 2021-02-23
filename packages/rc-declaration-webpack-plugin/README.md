# rc-declaration-webpack-plugin

Create react-commponent's declaration files

## Installation

```sh
$ yarn add @marioa/rc-declaration-webpack-plugin --dev
```

## Use

```ts
// webpack config set
import RcDeclarationWebpackPlugin from '@marioa/rc-declaration-webpack-plugin';

plugins: [new RcDeclarationWebpackPlugin({ declarationDir: './dist/' })];
```

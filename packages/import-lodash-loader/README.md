# react-md

Import lodash automatically of specific methods one by one

## Installation

```sh
$ yarn add @marioa/import-lodash-loader --dev
```

## Use

```ts
// webpack config set
module: {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node-modules/,
      use: [
        'babel-loader',
        'import-lodash-loader',
      ],
    }
  ],
},

// ts declaration file
import * as _lodash from 'lodash';

declare global {
  declare const _: _lodash;
}

```

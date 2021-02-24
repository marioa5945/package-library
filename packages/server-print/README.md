# server-print

Print and copy server url

## Installation

```sh
$ yarn add @marioa/server-print --dev
```

## Use

```ts
import serverPrint from '@marioa/server-print';

serverPrint('8080');

// add path
serverPrint('8080', '/example');
```

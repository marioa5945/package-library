# server-print

Print and copy server url

## Installation

```sh
$ yarn add server-print --dev
```

## Use

```ts
import serverPrint from 'server-print';

serverPrint('8080');

// add path
serverPrint('8080', '/example');
```

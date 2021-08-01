# server-print

Print and copy server url

## Installation

```sh
$ yarn add server-print --dev
```

## Use

```ts
import serverPrint from 'server-print';

serverPrint({port: '8080'});

// add path
serverPrint({prot: '8080', path: '/example'});

// Change copy's path
serverPrint({port: '8080', copyType: 'ip'});
```

# Demo

Demo of markdown file

- line 1
- line 2
- line 3

## css

```css
/* css1  */
@media only screen and (-webkit-min-device-pixel-ratio: 1.1) {
  .css {
    background-image: url(img_2x.png);
  }
}

/* css2 */
.css {
  background: -webkit-image-set(url(img_1x.png) 1x, url(img_2x.png) 2x);
}
```

## ts

```ts
import Module = require('module');
import * as ts from 'typescript';

/**
 * exec specified file
 */
const runFile = () => {
  // tips of run
  process.once('exit', function () {
    if (process.send) {
      process.send({ msg: 'process off' });
    }
  });

  // Create a local module instance based on `cwd`.
  const cwd = process.cwd();
  const scriptPath = process.argv[2];
  register();
  const module = new Module(scriptPath);
  module.filename = scriptPath;
  module.paths = (Module as any)._nodeModulePaths(cwd);

  // Prepend `tscn` arguments to CLI for child processes.
  const execPath = process.argv[1];
  process.execArgv.unshift(execPath);
  process.argv = [execPath, scriptPath];

  Module.runMain();
};
```

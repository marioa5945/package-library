import { exec } from 'child_process';
import { resolve } from 'path';
import { Compiler } from 'webpack';

class RcDeclarationWebpackPlugin {
  declarationDir: string;

  constructor(options: { declarationDir: string }) {
    this.declarationDir = options.declarationDir;
  }

  apply(compiler: Compiler): void {
    const entry = compiler.options.entry;
    const importArr = typeof entry === 'object' ? entry.main.import : [];

    if (importArr && importArr.length > 0) {
      let cmd = `tsc --declaration --declarationDir ${
        this.declarationDir
      } --skipLibCheck --emitDeclarationOnly --esModuleInterop --jsx React ${resolve(__dirname, 'type.d.ts')} `;

      for (const n of importArr) {
        cmd += ` ${n}`;
      }

      compiler.hooks.done.tap('rc-declaration-webpack-plugin', () => {
        exec(cmd);
      });
    }
  }
}

export default RcDeclarationWebpackPlugin;

import readline from 'readline';
import util from 'util';
const exec = util.promisify(require('child_process').exec);
const choices = ['react-md', 'import-lodash-loader', 'rc-declaration-webpack-plugin', 'server-print'].reverse();

/**
 * Get defaut command
 * @param {string}name
 * @param {boolean?}defaultTsc It add default tsc command, if defaultTsc is true
 */
const cmdGet = (name: string, defaultTsc?: boolean): string => {
  let cmd = `rimraf ./dist/${name}`;
  cmd = defaultTsc
    ? cmd + ` && tsc --outDir ./dist/${name}/ --declaration --skipLibCheck --allowSyntheticDefaultImports ./packages/${name}/index.ts`
    : cmd;
  return cmd + `&& cp ./packages/${name}/package1.json ./dist/${name}/package.json && cp ./packages/${name}/README.md ./dist/${name}/README.md`;
};

/**
 * build command array
 */
const buildCmdArr = [
  'webpack --config ./scripts/webpack.react-md.ts',
  cmdGet('import-lodash-loader', true),
  cmdGet('rc-declaration-webpack-plugin', true),
  cmdGet('server-print', true),
];

const publishCmdGet = (name: string) => {
  return `cd ./dist/${name}/ && npm publish --access public && cd ../../`;
};

let buildIndex = 0;
let comCount = choices.length;

/**
 * 0. build select
 * 1. whether to publish of select
 * 2. publish of select
 */
let step = 0;

const rl = readline.createInterface(process.stdin, process.stdout);

/**
 * select build or select publish print
 */
const selectBuildOrPublishPrint = () => {
  let str = step === 0 ? '\r\nSelect the components to build:\r\n' : '\r\nSelect the components to publish:\r\n';
  for (let i = 0; i < comCount; i++) {
    str += `${buildIndex === i ? '[X]' : '[ ]'} ${choices[i]}\r\n`;
  }
  process.stdout.write(str);
};

// print select of first
selectBuildOrPublishPrint();

let isPublish = true;

/**
 * print of choose whether to publish
 */
const selectIsPublishPrint = () => {
  let str = '\r\nWhether to publish:\r\n';

  str += `${isPublish ? '[X]' : '[ ]'} yes\r\n`;
  str += `${!isPublish ? '[X]' : '[ ]'} no\r\n`;

  process.stdout.write(str);
};

process.stdin.on('keypress', (s: unknown, key: any): void => {
  const name = key.name;

  if (step === 1) {
    if (name === 'up' || name === 'down') {
      isPublish = !isPublish;
    } else {
      return;
    }
  } else {
    if (name === 'up' && buildIndex > 0) {
      buildIndex--;
    } else if (name === 'down' && buildIndex < comCount - 1) {
      buildIndex++;
    } else if (name === 'down' && buildIndex === comCount - 1) {
      buildIndex = 0;
    } else if (name === 'up' && buildIndex === 0) {
      buildIndex = comCount - 1;
    } else {
      return;
    }
  }

  // Move the cursor to cover
  readline.moveCursor(process.stdout, 0, step === 1 ? -4 : -comCount - 2);

  if (step === 0) {
    selectBuildOrPublishPrint();
  } else if (step === 1) {
    selectIsPublishPrint();
  }
});

const execCmd = async (cmd: string) => {
  const { stdout, stderr } = await exec(cmd);
  console.log(stderr === '' ? stdout : stderr);

  if (step === 3) {
    console.log('\r\n===================== exit\r\n');
    process.exit(0);
  } else {
    selectIsPublishPrint();
  }
};

rl.on('line', () => {
  if (step === 0) {
    console.log(`${choices[buildIndex]} is building...`);
    execCmd(buildCmdArr[comCount - buildIndex - 1]);
    step++;
  } else if (step === 1) {
    step = isPublish ? 2 : 1;
    selectBuildOrPublishPrint();
  } else if (step === 2) {
    console.log(`${choices[buildIndex]} is publish...`);
    step++;
    execCmd(publishCmdGet(choices[buildIndex]));
  }
}).on('close', () => {
  rl.close();
});

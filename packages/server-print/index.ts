import os = require('os');
const interfaces = os.networkInterfaces();
import boxen = require('boxen');
import chalk = require('chalk');
import { write } from 'clipboardy';

/**
 * Get localhost ip address
 */
const ipObj = interfaces.en1 ?? interfaces.en0;
const getIp = ipObj ? ipObj[1].address : '';

/**
 * Print and copy server url
 * @param port localhost port
 * @param path ? localhost path
 * @param copyType 'localhost' | 'ip' | 'none'
 */
const serverPrint = async (info:{port: string, path?: string, copyType?: 'localhost' | 'ip' | 'none'}): Promise<void> => {
  const {port, path, copyType} = info
  const error = (message: string) => chalk`{red ERROR:} ${message}`;

  const localAddress = `http://localhost:${port}${path ?? ''}`;
  const ipAddress = `http://${getIp}:${port}${path ?? ''}`;
  let message = chalk.green('Serving!');
  message += `\n\n${chalk.bold(`- Local:`)}           ${localAddress}`;
  message += `\n${chalk.bold(`- On Your Network:`)} ${ipAddress}`;

  try {
    if (copyType !== 'none'){
      await write(copyType === 'localhost' ? localAddress : ipAddress);
      message += `\n\n${chalk.grey(`Copied ${copyType === 'localhost' ? 'local' : 'ip'} address to clipboard!`)}`;
    }
  } catch (err) {
    console.error(error(`Cannot copy to clipboard: ${(err as {
      message: string;
    }).message}`));
  }
  console.log(
    boxen(message, {
      padding: 1,
      borderColor: 'green',
      margin: 1,
    })
  );
};

export default serverPrint;

import os = require('os');
const interfaces = os.networkInterfaces();
import boxen = require('boxen');
import chalk = require('chalk');
import { write } from 'clipboardy';

/**
 * Get localhost ip address
 */
const getIp = () => {
  let ip = '';
  for (const name of Object.keys(interfaces)) {
    const arr = (interfaces[name] as unknown as Array<{ [key: string]: unknown }>).filter((n) => n.family === 'IPv4' && !n.internal);
    if (arr.length > 0) {
      ip = arr[0].address as string;
    }
  }
  return ip;
};

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
  const ipAddress = `http://${getIp()}:${port}${path ?? ''}`;
  let message = chalk.green('Serving!');
  message += `\n\n${chalk.bold(`- Local:`)}            ${localAddress}`;
  message += `\n${chalk.bold(`- On Your Network:`)} ${ipAddress}`;

  try {
    if (copyType !== 'none'){
      await write(copyType === 'localhost' ? localAddress : ipAddress);
      message += `\n\n${chalk.grey(`Copied ${copyType === 'localhost' ? 'local' : 'ip'} address to clipboard!`)}`;
    }
  } catch (err) {
    console.error(error(`Cannot copy to clipboard: ${err.message}`));
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

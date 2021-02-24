import os from 'os';
const interfaces = os.networkInterfaces();
import boxen from 'boxen';
import chalk from 'chalk';
import { write } from 'clipboardy';

/**
 * Get localhost ip address
 */
const getIp = () => {
  let ip = '';
  for (const name of Object.keys(interfaces)) {
    const arr = (interfaces[name] as Array<{ [key: string]: any }>).filter((n) => n.family === 'IPv4' && !n.internal);
    if (arr.length > 0) {
      ip = arr[0].address;
    }
  }
  return ip;
};

/**
 * Print and copy server url
 * @param port localhost port
 * @param path localhost path
 */
const serverPrint = async (port: string, path?: string): Promise<void> => {
  const error = (message: string) => chalk`{red ERROR:} ${message}`;

  const localAddress = `http://localhost:${port}${path ?? ''}`;
  let message = chalk.green('Serving!');
  message += `\n\n${chalk.bold(`- Local:`)}            ${localAddress}`;
  message += `\n${chalk.bold(`- On Your Network:`)}  http://${getIp()}:${port}${path ?? ''}`;

  try {
    await write(localAddress);
    message += `\n\n${chalk.grey('Copied local address to clipboard!')}`;
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

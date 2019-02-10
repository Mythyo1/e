const chalk = require('chalk');
const moment = require('moment');

exports.log = (content, type = 'log') => {
  const timestamp = `[${moment().format('YYYY-MM-DD HH:mm:ss')}]:`;
  switch (type) {
    case 'log':
      return console.log(`${timestamp} ${chalk.green.bgBlue(type.toUpperCase())} ${content} `);
      break;
    case 'warn':
      return console.log(`${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
      break;
    case 'error':
      return console.log(`${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `);
      break;
    case 'debug':
      return console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);
      break;
    case 'cmd':
      return console.log(`${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
      break;
    case 'ready':
      return console.log(`${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
      break;
    case 'user':
      return console.log(`${timestamp} ${chalk.white.bgRed(type.toUpperCase())} ${content}`);
      break;
    default:
      throw new TypeError('Logger type must be either warn, debug, log, ready, cmd or error.');
  }
}; 

exports.error = (args) => this.log(args, 'error');

exports.warn = (args) => this.log(args, 'warn');

exports.debug = (args) => this.log(args, 'debug');

exports.cmd = (args) => this.log(args, 'cmd');

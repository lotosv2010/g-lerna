const chalk = require('chalk');
const config = require('./package.json');

exports.command = 'create <name>';
exports.describe = '创建一个新的lerna管理的包';
exports.builder = (yargs) => {
  yargs
    .positional('name', {
      describe: '包名(包含scope)',
      type: 'string',
    })
    .options({
      registry: {
        group: 'Command Options:',
        describe: '配置包的发布仓库',
        type: 'string',
      },
    })
    .fail((msg, err) => {
      if (
        msg.includes('Not enough non-option arguments') ||
        msg.includes('Missing required argument: name')
      ) {
        console.error(
          `${chalk.red.bgBlack('ERR!')} ${chalk.magentaBright('lerna')} Not enough non-option arguments: got 0, need at least 1`,
        );
      } else if (err) {
        console.error(
          `${chalk.red.bgBlack('ERR!')} ${chalk.magentaBright('lerna')} ${err.message || err}`,
        );
      } else {
        console.error(
          `${chalk.red.bgBlack('ERR!')} ${chalk.magentaBright('lerna')} ${msg}`,
        );
      }
      process.exit(1);
    });
};
exports.handler = (argv) => {
  // console.log('执行create命令', argv);
  console.log(
    `${chalk.bgBlack('lerna')} ${chalk.blueBright('notice')} ${chalk.magentaBright('cli')} v${config.version}`,
  );
  return require('.')(argv);
};

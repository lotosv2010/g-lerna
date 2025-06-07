const chalk = require('chalk');
const config = require('./package.json');

exports.command = 'init';
exports.describe = '创建一个新的Lerna仓库';
exports.builder = (/*yargs*/) => {
  console.log(
    `${chalk.bgBlack('lerna')} ${chalk.blueBright('notice')} ${chalk.magentaBright('cli')} v${config.version}`,
  );
};
exports.handler = (argv) => {
  console.log(
    `${chalk.bgBlack('lerna')} ${chalk.greenBright('info')} Applying the following file system updates:`,
  );
  return require('.')(argv);
};

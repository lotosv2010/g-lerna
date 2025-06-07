exports.command = 'init';
exports.describe = '创建一个新的Lerna仓库';
exports.builder = (yargs) => {
  console.log('执行init builder', yargs);
};
exports.handler = (argv) => {
  console.log('执行init命令', argv);
};

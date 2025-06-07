'use strict';
const cli = require('@g-lerna/cli');
const intCmd = require('@g-lerna/init/command');
// const create = require('@g-lerna/create');

function main(argv) {
  // cli 返回的是 yargs 实例
  return cli().command(intCmd).parse(argv);
}

module.exports = main;

'use strict';
const cli = require('@g-lerna/cli');
const intCmd = require('@g-lerna/init/command');
const createCmd = require('@g-lerna/create/command');

function main(argv) {
  // cli 返回的是 yargs 实例
  return cli().command(intCmd).command(createCmd).parse(argv);
}

module.exports = main;

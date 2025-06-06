'use strict';

const gLerna = require('..');
const assert = require('assert').strict;

assert.strictEqual(gLerna(), 'Hello from gLerna');
console.info('gLerna tests passed');

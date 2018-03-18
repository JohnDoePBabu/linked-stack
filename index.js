'use strict';

const $ = require('yargs').argv;
const readline = require('readline');
const color = require('chalk');
const Stack = require('./stack');
const popOperator = $.pop || '-';

const input = readline.createInterface({
  input: process.stdin,
  terminal: false
});
const stackInstance = new Stack();

console.log(color.green(`Welcome to linked stack. 
Enter any string to insert into stack.
Use ${popOperator} to pop from stack`));

input.on('line', (line) => {
    if (line !== popOperator) {
      stackInstance.push(line);
    } else console.log(color.red(stackInstance.pop()));
})
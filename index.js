var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre'
console.log(chalk.red.bold.underline('Hello', 'world'));

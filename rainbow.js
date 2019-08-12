const chalk = require("chalk");

function rainbow(input) {
    let result = "";
    let i = 0;
    const allColors = [
        chalk.blue,
        chalk.red,
        chalk.green
    ]
    // this works with multi bit chars
    for(letter of input) {
        const colorize = allColors[i % allColors.length];
        result += colorize(letter);
        i++;
    }

    return result;
}

module.exports = rainbow;



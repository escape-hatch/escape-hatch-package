const base64url = require('base64-url');
const chalk = require('chalk');

const escapeHatch = function () {
  process.on('uncaughtException', function (err) {
    console.error(err)
    console.log(chalk.bold.underline.gray.bgBlue(`Need help?  Try the Escape Hatch:\n-> https://escapehatch.herokuapp.com/links/${base64url.encode(`${err.name}: ${err.message}`)}`))
    process.exitCode = 1
  })
}

module.exports = escapeHatch

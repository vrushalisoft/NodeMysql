const express = require("express");
const chalk = require('chalk');
const mysql = require("mysql");

const app = express();



      



app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
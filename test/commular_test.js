'use strict';

var grunt = require('grunt');
var mock = require('mock-require');
var packageJSON = require(process.cwd() + '/package.json');
var copyPackageJSON = JSON.parse(JSON.stringify(packageJSON));
var fs = require('fs');
var commularPath = '../scripts';

exports.commular = {
  "Check that commands are added [commander]": function(test) {
    var commular;
    var customCommand = require('./fixtures/commander');
    mock(process.cwd() + '/package.json', copyPackageJSON);
    mock.reRequire(commularPath);
    copyPackageJSON['commular-cli'] = 'commander';
    commular = require(commularPath);
    commular.test = true;
    commular()
      .then(function(program) {
        test.equals(program.commands.length, 0, 'There are no commands available.');
        customCommand.command(program);
        test.equals(program.commands.length, 1, 'There is one command available.');
        program.parse(['node', 'test', 'setup', 'test', '--setup_mode', 'other']);
        test.done();
      });
  },
  "Check that commands are added [vorpal]": function(test) {
    var commular;
    var customCommand = require('./fixtures/vorpal');
    mock(process.cwd() + '/package.json', copyPackageJSON);
    mock.reRequire(commularPath);
    copyPackageJSON['commular-cli'] = 'vorpal';
    commular = require(commularPath);
    commular.test = true;
    commular()
      .then(function(program) {
        test.equals(program.commands.length, 2, 'There are no commands available.');
        customCommand.command(program);
        test.equals(program.commands.length, 3, 'There is one command available.');
        program.execSync('setup test --setup_mode other');
        test.done();
      });
  }
};

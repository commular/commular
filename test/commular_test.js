'use strict';

var grunt = require('grunt');
var mock = require('mock-require');
var packageJSON = require(process.cwd() + '/package.json');
var copyPackageJSON = JSON.parse(JSON.stringify(packageJSON));
var path = require('path');
var fs = require('fs');
var q = require('q');
var commularPath = '../scripts';

exports.commular = {
  "Check that commands are added [commander]": function(test) {
    var commular;
    var program;
    mock(process.cwd() + '/package.json', copyPackageJSON);
    mock.reRequire(commularPath);
    copyPackageJSON.cli = 'commander';
    commular = require(commularPath);
    commular.debug = true;
    program = commular.getProgram();
    program.commands = [];
    test.expect(2);
    test.equals(program.commands.length, 0, 'There are no commands.');
    commular()
    .then(function (program) {
      test.equals(program.commands.length, 1, 'There is one command available.');
      test.done();
    });
  },
  "Check that commands are added [vorpal]": function(test) {
    var commular;
    var program;
    mock(process.cwd() + '/package.json', copyPackageJSON);
    mock.reRequire(commularPath);
    copyPackageJSON.cli = 'vorpal';
    commular = require(commularPath);
    commular.debug = true;
    program = commular.getProgram();
    program.commands = [];
    test.expect(2);
    test.equals(program.commands.length, 0, 'There are no commands.');
    commular()
      .then(function(program) {
        test.equals(program.commands.length, 3, 'There are three commands available.');
        test.done();
      });
  }
};

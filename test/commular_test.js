'use strict';

var grunt = require('grunt');
var path = require('path');
var fs = require('fs');
var q = require('q');
var commular = require('../scripts');

exports.commular = {
  "Check that commands are added": function(test) {
    var program;
    test.expect(2);
    program = commular.getProgram();
    test.equals(program.commands.length, 0, 'There are no commands.');
    commular()
    .then(function (program) {
      test.equals(program.commands.length, 1, 'There is one command available.');
      test.done();
    });
  }
};

var program = require('commander');
var npm = require('npm');
var packageJSON = require( process.cwd() + '/package.json');
var getModulePrefixes = require('./libs/get-module-prefixes');
var q = require('q');
var modulesPrefixes =  getModulePrefixes(packageJSON);

function commular() {
  var deferred = q.defer();
  program
    .version(packageJSON.version);

  npm.load({
    loaded: false
  }, function(error) {
    if(error) {
      return deferred.reject(err);
    }
    npm.commands.ls([], true, function(err, data) {
      var keys;
      if (err) {
        return deferred.reject(err);
      }
      keys = Object.keys(data.dependencies || data._dependencies);
      keys.forEach(function(dependency) {
        modulesPrefixes.forEach(function (prefix) {
          if (dependency.indexOf( prefix + '-') === 0) {
            require(dependency).command(program);
          }
        });
      });
      program.parse(process.argv);
      deferred.resolve(program);
    });
  });
  return deferred.promise;
}
commular.getProgram = function () {
  return program;
};

module.exports = commular;

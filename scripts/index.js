var npm = require('npm');
var packageJSON = require( process.cwd() + '/package.json');
var getPluginPrefixes = require('./libs/get-plugin-prefixes');
var getFrameworkInstance = {
  commander: function () {
    var program = require('commander');
    program
      .version(packageJSON.version);
    return program;
  },
  vorpal: function () {
    var Vorpal = require('vorpal');
    var program = new Vorpal();
    program
      .version(packageJSON.version);

    return program;
  }
};

var executeAfterAddCommands = {
  commander: function (program) {
    program.parse(process.argv);
  },
  vorpal: function (program) {
    program.parse(process.argv, {});
  }
};

var q = require('q');
var modulesPrefixes =  getPluginPrefixes(packageJSON);

function commular() {
  var deferred = q.defer();
  npm.config.loaded = false;
  npm.load(function(error) {
    if(error) {
      return deferred.reject(error);
    }

    npm.commands.ls([], true, function(err, data) {
      var keys;
      var program;
      var customCLI = packageJSON['commular-cli'];
      var framework = customCLI || "commander";
      if (err) {
        return deferred.reject(err);
      }
      keys = Object.keys(data.dependencies || data._dependencies);

      try{
        keys.forEach(function(dependency) {
          if(dependency === framework) {
            program = getFrameworkInstance[framework]();
            throw new Error('CLI Framework resolved as: ' + framework);
          }
        });
      }catch(er){
        if(commular.test) {
          console.log('\n', er.message, '\n');
        }
      }

      keys.forEach(function(dependency) {
        modulesPrefixes.forEach(function (prefix) {
          if (dependency.indexOf( prefix + '-') === 0) {
            require(dependency).command(program);
          }
        });
      });

      if(!commular.test) {
        executeAfterAddCommands[framework](program);
      }
      deferred.resolve(program);
    });
  });
  return deferred.promise;
}

module.exports = commular;

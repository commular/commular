exports.command = function (program) {
  program
    .command('setup [env]')
    .description('run setup commands for all envs')
    .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function (env, options) {
      var mode = options.setup_mode || "normal";
      env = env || 'all';
      console.log('setup for %s env(s) with %s mode', env, mode);
    })
    .on('--help', function () {
      const name = program.name();
      console.log('  Examples:');
      console.log();
      console.log('    $ ' + name + ' setup environment');
      console.log('    $ ' + name + ' setup environment --setup_mode mode');
      console.log();
    });
};

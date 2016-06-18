exports.command = function (program) {
  program
    .command('setup <env>')
    .description('run setup commands for all envs')
    .option("-s, --setup_mode [mode]", "Which setup mode to use")
    .action(function (args) {
      var mode = args.options.setup_mode || "normal";
      args.env = args.env || 'all';
      console.log('setup for %s env(s) with %s mode', args.env, mode);
    })
    .help(function () {
      const name = program.name();
      console.log('  Examples:');
      console.log();
      console.log('    $ ' + name + ' setup environment');
      console.log('    $ ' + name + ' setup environment --setup_mode mode');
      console.log();
    });
};

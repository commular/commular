module.exports = function (grunt) {
  grunt.initConfig({
    // Check code for mistakes or errors.
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      generated: ['test/generated']
    },
    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['jshint', 'clean', 'nodeunit']);

  grunt.registerTask('default', ['test']);
};

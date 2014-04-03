module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /templates\//
        },
        files: {
          'js/templates.js': 'templates/*.handlebars'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('default', ['emberTemplates']);
};

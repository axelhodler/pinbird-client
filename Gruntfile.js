module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: 'js/templates/'
        },
        files: {
          'js/templates.js': 'js/templates/*.handlebars'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-ember-templates');

  grunt.registerTask('default', ['emberTemplates']);
};

module.exports = function(grunt) {
  grunt.initConfig({
    handlebars: {
      all: {
        files: {
          "js/templates.js": ["templates/*.handlebars"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
};

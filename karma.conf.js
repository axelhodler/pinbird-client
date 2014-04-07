module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['qunit'],
    files: [
      "bower_components/jquery/jquery.js",
      "bower_components/handlebars/handlebars.js",
      "bower_components/ember/ember.js",
      "bower_components/ember-data/ember-data.js",
      "bower_components/bootstrap/dist/js/bootstrap.js",

      "js/app.js",
      "js/routes.js",
      "tests/*.js",
      "js/templates/*.handlebars"
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,

    plugins: [
      "karma-qunit",
      "karma-ember-preprocessor",
      "karma-phantomjs-launcher"
    ],

    preprocessors: {
      "**/*.handlebars": "ember"
    }
  });
};

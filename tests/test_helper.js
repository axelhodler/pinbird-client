App.rootElement = '#ember-testing';

Ember.Test.registerHelper('getCurrentRoute', function() {
  var currentPath = App.__container__.lookup('controller:application')
        .currentPath;
  return currentPath;
});

App.setupForTesting();
App.injectTestHelpers();

var addBookmark = function(title, url) {
  visit("/");
  fillIn("#title", title);
  fillIn("#url", url);
  click("#add_bookmark");
};

var expectRoute = function(expectedRoute) {
  equal(getCurrentRoute(), expectedRoute);
};

var getControllerFor = function(route) {
  return App.__container__.lookup('controller:' + route);
};

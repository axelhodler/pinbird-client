App.rootElement = '#ember-testing';

Ember.Test.registerHelper('getCurrentPath', function() {
  var currentPath = App.__container__.lookup('controller:application')
        .currentPath;
  return currentPath;
});

App.setupForTesting();
App.injectTestHelpers();

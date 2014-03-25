module("Test routing", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

test("Index route transitions to /bookmarks route", function() {
  visit("/").then(function () {
    equal("bookmarks.index", getCurrentPath());
  });
});

test("Error route is mapped", function() {
  visit("/error").then(function() {
    equal("error", getCurrentPath());
  });
});

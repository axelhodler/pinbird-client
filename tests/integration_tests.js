module("Integration tests", {
  setup: function() {
    // reset the application state between each test
    App.reset();
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
  }
});

test("Index route transitions to /bookmarks route", function() {
  visit("/").then(function () {
    expectRoute("bookmarks.index");
  });
});

test("Redirect to index if no error message is set", function() {
  visit("/error").then(function() {
    expectRoute("bookmarks.index");
  });
});

test("Dont redirect to index if error message is set", function() {
  getControllerFor('error').set('errorMessage', 'asdf');

  visit("/error").then(function() {
    expectRoute("error");
  });
});

test("Can add bookmark", function() {
  expect(2);

  addBookmark("New title", "New url");

  andThen(function() {
    ok(find("li:contains('New title')").length,
       "The bookmark's title should display");
    ok(find("li:contains('New url')").length,
       "The bookmark's url should display");
  });
});

test("Can delete bookmark", function() {
  expect(2);

  addBookmark("New title2", "New url2");
  // hacky deletion
  click("button[name=delete_bookmark]");

  andThen(function() {
    ok(!find("li:contains('New title2')").length, "bookmark was deleted");
    ok(!find("li:contains('New url2')").length, "bookmark was deleted");
  });
});

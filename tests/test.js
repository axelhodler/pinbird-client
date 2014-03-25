module("Test routing", {
  setup: function() {
    App.reset();
  }
});

test("Index route transitions to /bookmarks route", function() {
  visit("/").then(function () {
    equal("bookmarks.index", App.__container__.lookup('controller:application').
          currentPath);
  });
});

App.Router.map(function() {
  this.resource('bookmarks', function() {
    this.resource('bookmark', { path: ':bookmark_id' });
  });
});

// If the root is accessed transition to /bookmarks
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('bookmarks');
  }
});

App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('bookmark');
  }
});

App.BookmarkRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('bookmark', params.bookmark_id);
  }
});

App.Router.map(function() {
  this.resource('bookmarks', function() {
    this.resource('bookmark', { path: ':bookmark_id' });
  });
  this.resource('error', { path: 'error' });
});

// If the root is accessed transition to /bookmarks
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('bookmarks');
  }
});

App.ErrorRoute = Ember.Route.extend({
  setupController: function(controller) {
    if (controller.get('errorMessage') === undefined) {
      this.transitionTo('bookmarks');
    }
  }
});

App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('bookmark');
  },
  actions: {
    error: function() {
      var c = this.controllerFor('error');
      c.set('errorMessage', 'The REST API seems to be offline');

      this.transitionTo('error');
    }
  }
});

App.BookmarkRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('bookmark', params.bookmark_id);
  }
});

App.Router.map(function() {
  this.resource('bookmarks', function() {
    this.resource('bookmark', { path: ':bookmark_id' });
  });
  this.resource('error', { path: 'error' });
  this.resource('missing', { path: '*path' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('bookmarks');
  }
});

App.ErrorRoute = Ember.Route.extend({
  redirect: function() {
    if (this.controllerFor('error').get('errorMessage') === '') {
      this.transitionTo('bookmarks');
    }
  }
});

App.MissingRoute = Ember.Route.extend({
  redirect: function() {
    this.controllerFor('error').send('missingRoute');
    this.transitionTo('error');
  }
});

App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('bookmark');
  },
  actions: {
    error: function() {
      this.controllerFor('error').send('backendDown');
      this.transitionTo('error');
    }
  }
});

App.BookmarkRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('bookmark', params.bookmark_id);
  }
});

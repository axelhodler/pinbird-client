App = Ember.Application.create();

App.Router.map(function() {
  this.resource('bookmarks', function() {
    this.resource('bookmark', { path: ':bookmark_id' });
  });
});

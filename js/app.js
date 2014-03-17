App = Ember.Application.create();

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

App.BookmarksController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var bm = {
        title: this.get('title'),
        url: this.get('url'),
        user: 'none'
      };
      var createdBm = this.store.createRecord('bookmark', bm);
      // this calls the 'other' createRecord method which ultimataely saves
      createdBm.save();
    },
    delete: function(item){
        var bm = item;
        bm.deleteRecord();
        bm.save();
    }
  }
});

App.Bookmark = DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  user: DS.attr('user')
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:5000',
  headers : {
      "Authorization":"test"
  }
});

// deal with the MongoDB ObjectId named "_id"
App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: "_id"
});

App = Ember.Application.create();

App.ErrorController = Ember.ObjectController.extend({
  errorMessage: ''
});

App.BookmarksController = Ember.ObjectController.extend({
  isEntering: false,

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
      this.set('isEntering', false);
      this.set('title', '');
      this.set('url', '');
    },
    delete: function(item){
      var bm = item;
      bm.deleteRecord();
      bm.save();
    },
    inputFocussed: function() {
      this.set('isEntering', true);
    }
  }
});

App.Bookmark = DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  user: DS.attr('string')
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

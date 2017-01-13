import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  model(params) {
    var promise = this.store.findAll('question').then(function(questionsArray) {
      return questionsArray.filter(function(item) {
          return item.get('tag') === params.name;
      });
    });

    return DS.PromiseArray.create({
      promise: promise
    });
  }
});

//This was a mess to figure out : )

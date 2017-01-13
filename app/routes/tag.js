import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var promise = this.store.findAll('question').then( function( questionsArray ) {
          return questionsArray.filter( function( item, index, enumerable) {
             return item.get('tag') === params.name;
          });
       })

       return DS.PromiseArray.create({
          promise: promise
       });
  }
});

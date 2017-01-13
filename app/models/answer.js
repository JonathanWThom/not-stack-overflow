import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  votes: DS.attr({defaultValue: 0}),
  answer: DS.belongsTo('question', { async: true})
});

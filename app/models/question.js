import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true}),
  sorting: ['votes:desc'],
  sorted_answers: Ember.computed.sort('answers', 'sorting'),
  tag: DS.attr()
});

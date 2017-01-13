import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        tag: this.get('tag')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});

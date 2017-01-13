import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        tag: this.get('tag')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});

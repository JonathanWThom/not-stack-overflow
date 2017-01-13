import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchTag() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('searchTag', params);
    }
  }
});

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: 'question/:question_id'});
  this.route('tag', {path: 'tag/:name'});
});

export default Router;

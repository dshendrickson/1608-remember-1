import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reminders', {path: '/'}, function() {
    this.route('reminder', {path: '/reminders/:reminder_id'});
    this.route('new', {path: '/new'});
  });
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' });
  this.route('html5');
  this.route('main');
  this.route('small-business');
  this.route('web');
  this.route('individual');
  this.route('enterprise');
  this.route('aem');
  this.route('contact');
});

export default Router;

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
  this.route('individual', function() {
    this.route('html5');
    this.route('explore-css');
    this.route('conquor-javascript');
    this.route('api-development');
    this.route('blockchain');
    this.route('cloud-solutions');
    this.route('server-configuration');
  });
  this.route('enterprise');
  this.route('aem');
  this.route('contact');
  this.route('ebook', function() {});
  this.route('developer');

  this.route('content', function() {});
  this.route('preorder-ebook');
});

export default Router;

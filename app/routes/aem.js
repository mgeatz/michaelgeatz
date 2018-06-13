import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    console.log('contact info');
    window.scrollTo(0,0);
  }

});

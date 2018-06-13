import Controller from '@ember/controller';

export default Controller.extend({

  afterRender() {
    console.log('after render');
  },

  actions: {
    newRoute(thumbParam, linkage) {
      console.log('ROUTE CHANGE');
      this.transitionTo(linkage);
    }
  }

});

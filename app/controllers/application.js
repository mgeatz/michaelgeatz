import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    newRoute(thumbParam, linkage) {
      console.log('ROUTE CHANGE');
      this.transitionTo(linkage);
    }
  }

});

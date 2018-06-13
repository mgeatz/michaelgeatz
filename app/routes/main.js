import Route from '@ember/routing/route';

const MainRoute = Route.extend({

  beforeModel() {
    window.scrollTo(0,0);
  },

  actions: {

    newRoute(thumbParam) {
      console.log('newRoute - route level', thumbParam);
      this.transitionTo(thumbParam);
    }

  }

});

export default MainRoute;

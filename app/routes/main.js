import Route from '@ember/routing/route';

const MainRoute = Route.extend({

  actions: {

    newRoute(thumbParam) {
      console.log('newRoute - route level', thumbParam);
      this.transitionTo(thumbParam);
    },

  }

});

export default MainRoute;

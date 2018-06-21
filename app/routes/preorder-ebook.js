import Route from '@ember/routing/route';

export default Route.extend({

  name: '',
  email: '',

  setupController(controller) {
    controller.set('name', '');
    controller.set('email', '');
  },

  actions: {
    submitInfo() {
      let name     = this.controller.get('name'),
          email    = this.controller.get('email'),
          urlTrack = '/' + name + '/' + email;

      location.href = urlTrack;
    }
  }

});

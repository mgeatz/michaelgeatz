import Route from '@ember/routing/route';

export default Route.extend({


  actions: {
    preOrderbook() {
      console.log('transition to preorder page');
      location.href = 'http://bit.ly/2yrygyX';
    }
  }
});

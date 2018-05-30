import Component from '@ember/component';

export default Component.extend({

  actions: {

    changeTheme(val) {
      console.log('change theme component');
      this.sendAction('changeTheme', val);
    }

  }

});

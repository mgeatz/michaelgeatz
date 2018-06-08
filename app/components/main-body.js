import Component from '@ember/component';

export default Component.extend({

  classNames: ['main_body'],

  fontStyles: ['font_handwriting', 'font_serif'],

  themes: ['theme_light', 'theme_dark', 'theme_green', 'theme_orange', 'theme_blue', 'theme_gold'],

  noSelection: true,
  individualServices: false,
  smallBusinessServices: false,
  enterpriseConsulting: false,


  init() {
    this._super();

    Ember.$('.mwg_body')
      .addClass(this.get('fontStyles')[1])
      .addClass(this.get('themes')[5]);

  },


  actions: {


    changeFont() {

    },


    changeTheme(selection) {
      console.log('change theme route', selection);

      let $element = Ember.$('.mwg_body'),
          classes  = $element.attr('class');

      $element.removeClass(classes.match(/theme.*/g));
      $element.addClass(selection);
    },


    newRoute(thumbParam, linkage) {
      console.log('newRoute - parent component', thumbParam, linkage);
      window.scrollTo(0,0);
      this.sendAction('newRoute', thumbParam, linkage);
    },


    renderPillarDetails(thumbParam) {
      console.log('renderPillarDetails - parent component', thumbParam);
      this.send('updatePillar', thumbParam);
    },


    updatePillar(thumbParam) {
      this.set('noSelection', false);
      this.set('individualServices', false);
      this.set('smallBusinessServices', false);
      this.set('enterpriseConsulting', false);
      this.set(thumbParam, true);
    },

    backToPillars() {
      this.set('noSelection', true);
      this.set('individualServices', false);
      this.set('smallBusinessServices', false);
      this.set('enterpriseConsulting', false);
    }

  }

});

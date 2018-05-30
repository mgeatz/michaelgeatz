import Component from '@ember/component';

export default Component.extend({

  classNames: ['main_body'],

  fontStyles: ['font_handwriting', 'font_serif'],

  themes: ['theme_light', 'theme_dark', 'theme_green', 'theme_orange', 'theme_blue', 'theme_gold'],

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
          classes = $element.attr('class');

      $element.removeClass(classes.match(/theme.*/g));
      $element.addClass(selection);
    }

  }

});

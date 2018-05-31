import Component from '@ember/component';

const ThumbnailPlusComponent = Component.extend({

  actions: {

    renderPillarDetails(thumbDirect) {
      console.log('renderPillarDetails component');
      this.sendAction('renderPillarDetails', thumbDirect);
    }

  }
});

ThumbnailPlusComponent.reopenClass({
  positionalParams: ['icon','title','description','renderPillarDetails', 'thumbDirect']
});

export default ThumbnailPlusComponent;

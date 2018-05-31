import Component from '@ember/component';

const ThumbnailPlusComponent = Component.extend({

  actions: {

    actionBubble(thumbParam) {
      console.log('actionBubble component', thumbParam);
      this.sendAction('actionBubble', thumbParam);
    }

  }
});

ThumbnailPlusComponent.reopenClass({
  positionalParams: ['icon','title','description','actionBubble', 'thumbParam']
});

export default ThumbnailPlusComponent;

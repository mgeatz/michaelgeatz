import Component from '@ember/component';

const ThumbnailPlusComponent = Component.extend({

});

ThumbnailPlusComponent.reopenClass({
  positionalParams: ['icon','title','description']
});

export default ThumbnailPlusComponent;

import Component from '@ember/component';

const MediaObject = Component.extend({
});

MediaObject.reopenClass({
  positionalParams: ['mediaHeading', 'imageSrc']
});

export default MediaObject;

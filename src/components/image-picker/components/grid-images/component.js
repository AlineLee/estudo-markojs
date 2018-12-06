'use strict';

module.exports = class {
  onImageSelected (image) {
    this.emit('imageSelected', image);
  }
};

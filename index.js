/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-run-raf',

  included: function(app) {
    if (typeof this.import === 'function' && app.bowerDirectory) {
      this.import(app.bowerDirectory + '/animation-frame/AnimationFrame.min.js');
    }
  },

  isDevelopingAddon: function() {
    return false;
  }
};

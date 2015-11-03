/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-run-raf',

  included: function(app) {
    app.import(app.bowerDirectory + '/animation-frame/AnimationFrame.min.js');
    if (app.env === 'test') {
      app.import(app.bowerDirectory + '/es5-shim/es5-shim.js');
    }
  },

  isDevelopingAddon: function() {
    return false;
  }
};

/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-run-raf',

  included: function() {
    var app;
    var current = this;
    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    if (!app.bowerDirectory) {
      app.import('bower_components/animation-frame/AnimationFrame.min.js');
    } else {
      app.import(app.bowerDirectory + '/animation-frame/AnimationFrame.min.js');
    }
  },

  isDevelopingAddon: function() {
    return false;
  }
};

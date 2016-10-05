/* jshint node: true */
'use strict';


module.exports = {
  name: 'ember-run-raf',

  /**
     This method climbs up the hierarchy of addons
     up to the host application.
     This prevents previous addons (prior to `this.import`, ca 2.7.0)
     to break at importing assets when they are used nested in other addons.
     @private
     @method _findHost
   */
  _findHost: function() {
    var current = this;
    var app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  },

  included: function() {
    var app = this._findHost();

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

import nextFrame from 'ember-run-raf/utils/schedule-frame';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | schedule frame');

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.expect(1);
  return new Ember.RSVP.Promise((resolve) => {
    nextFrame(this, function() {
      assert.ok(true);
      resolve();
    }, 'hi');
  });
});

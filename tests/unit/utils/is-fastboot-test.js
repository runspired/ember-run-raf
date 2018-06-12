import isFastboot from 'ember-run-raf/utils/is-fastboot';
import { module, test } from 'qunit';

module('Unit | Utility | is fastboot', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    var result = isFastboot();
    assert.ok(!result);
  });
});
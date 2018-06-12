import nativeClearTimeout from 'ember-run-raf/utils/clear-timeout';

import { module, test } from 'qunit';

module('Unit | Utility | clear-timeout', function() {
  test('Module Exists', function(assert) {
    assert.ok(nativeClearTimeout);
  });

  test("Calling the exported clearTimeout doesn't throw an illegal invocation TypeError", function(assert) {
    assert.expect(1);

    var catchBlockNotEntered = true;
    try {
      nativeClearTimeout();
    } catch (err){
      catchBlockNotEntered = false;
    }
    assert.ok(catchBlockNotEntered, "calling nativeClearTimeout didn't cause an error");
  });
});
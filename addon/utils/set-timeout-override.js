import globalScope from './global-scope';
import isFastboot from './is-fastboot';
import raf from './raf';
import nativeSetTimeout from './set-timeout';
import nativeCancelTimeout from './cancel-timeout';
import Ember from 'ember';

const {
  run
  } = Ember;

/**!
 * Modifies `window.setTimeout` to use  `requestAnimationFrame`
 */

function frameTimeout(method, wait) {
  if (!wait) {
    return raf.addToFrame.call(null, method);
  }
  return nativeSetTimeout.call(null, method, wait);
}

function cancelTimeout(id) {
  raf.cancelFrame(id);
  nativeCancelTimeout(id);
}

function installOverride() {
  if (!isFastboot()) {
    if (run.backburner._platform) {
      run.backburner._platform = {
        setTimeout: raf.addToFrame,
        clearTimeout: raf.cancelFrame
      };
    } else {
      globalScope.setTimeout = frameTimeout;
      globalScope.clearTimeout = cancelTimeout;
    }
  }
}

export {
  frameTimeout,
  cancelTimeout,
  installOverride
};

export default installOverride;

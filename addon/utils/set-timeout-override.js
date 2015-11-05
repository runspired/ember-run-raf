import globalScope from './global-scope';
import isFastboot from './is-fastboot';
import addToFrame from './raf';
import nativeSetTimeout from './set-timeout';
import Ember from 'ember';

/**!
 * Modifies `window.setTimeout` to use  `requestAnimationFrame`
 */

function frameTimeout(method, wait) {
  if (!wait) {
    return addToFrame.call(null, method);
  }
  return nativeSetTimeout.call(null, method, wait);
}

function installOverride() {
  if (!isFastboot()) {
    globalScope.setTimeout = frameTimeout;
  }
}

export {
  frameTimeout,
  installOverride
};

export default installOverride;

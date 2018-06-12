import { run } from '@ember/runloop';
import globalScope from './global-scope';
import isFastboot from './is-fastboot';
import raf from './raf';
import nativeSetTimeout from './set-timeout';
import nativeClearTimeout from './clear-timeout';

/**!
 * Modifies `window.setTimeout` to use  `requestAnimationFrame`
 */

function frameTimeout(method, wait) {
  if (!wait) {
    return raf.addToFrame.call(null, method);
  }
  return nativeSetTimeout.call(null, method, wait);
}

function clearTimeout(id) {
  raf.clearFrame(id);
  nativeClearTimeout(id);
}

function installOverride() {
  if (!isFastboot()) {
    if (run.backburner._platform) {
      run.backburner._platform.setTimeout = frameTimeout;
      run.backburner._platform.clearTimeout = clearTimeout;
    } else {
      globalScope.setTimeout = frameTimeout;
      globalScope.clearTimeout = clearTimeout;
    }
  }
}

export {
  frameTimeout,
  clearTimeout,
  installOverride
};

export default installOverride;

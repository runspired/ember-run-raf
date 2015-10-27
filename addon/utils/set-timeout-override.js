import globalScope from '../utils/global-scope';
import isFastboot from '../utils/is-fastboot';

/**!
 * Modifies `window.setTimeout` to use  `requestAnimationFrame`
 */
let GlobalScope = globalScope();

var addToFrame = GlobalScope.requestAnimationFrame;
var nativeSetTimeout = GlobalScope.setTimeout;

function frameTimeout(method, wait) {
  if (!wait) {
    return addToFrame(method);
  }
  return nativeSetTimeout(method, wait);
}

function installOverride() {
  if (!isFastboot()) {
    GlobalScope.setTimeout = frameTimeout;
  }
}

export {
  addToFrame,
  nativeSetTimeout,
  frameTimeout,
  installOverride
};

export default installOverride;

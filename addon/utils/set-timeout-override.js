import globalScope from '../utils/global-scope';
import isFastboot from '../utils/is-fastboot';

/* global self */
/**!
 * Modifies `window.setTimeout` to use  `requestAnimationFrame`
 */
const GlobalScope = globalScope();
const addToFrame = GlobalScope.requestAnimationFrame;
const nativeSetTimeout = GlobalScope.setTimeout;

export addToFrame;
export nativeSetTimeout

function frameTimeout(method, wait) {
  if (!wait) {
    return addToFrame(method);
  }
  return nativeSetTimeout(method, wait);
}

if (!isFastboot()) {
  GlobalScope.setTimeout = frameTimeout;
}

export default frameTimeout;

import globalScope from '../utils/global-scope';
import isFastboot from '../utils/is-fastboot';
import setTimeoutOverride from '../utils/set-timeout-override';

let hasInitialized = false;

export function initialize(/* container, application */) {
  if (!hasInitialized && !isFastboot()) {
    globalScope().AnimationFrame.shim();
    setTimeoutOverride();
    hasInitialized = true;
  }
}

export default {
  name: 'raf-polyfill',
  initialize: initialize
};

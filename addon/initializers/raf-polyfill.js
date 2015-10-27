import globalScope from '../utils/global-scope';
import isFastboot from '../utils/is-fastboot';
import setTimeoutOverride from '../utils/set-timeout-override';

export function initialize(/* container, application */) {
  if (!isFastboot()) {
    globalScope().AnimationFrame.shim();
    setTimeoutOverride();
  }
}

export default {
  name: 'raf-polyfill',
  initialize: initialize
};

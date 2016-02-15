import globalScope from './global-scope';
import nativeSetTimeout from './set-timeout';
import nativeCancelTimeout from './cancel-timeout';

let addToFrame = globalScope.requestAnimationFrame;
if (!addToFrame) {
  addToFrame = function addToFrame(method) {
    return nativeSetTimeout.call(null, () => {
      method(new Date().getTime());
    }, 0);
  };
}

let cancelFrame = globalScope.cancelAnimationFrame;
if (!cancelFrame) {
  cancelFrame = function cancelFrame(id) {
    return nativeCancelTimeout(id);
  };
}

addToFrame = addToFrame.bind(globalScope);
cancelFrame = cancelFrame.bind(globalScope);

export default {
  addToFrame,
  cancelFrame
};

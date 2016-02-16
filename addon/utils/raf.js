import globalScope from './global-scope';
import nativeSetTimeout from './set-timeout';
import nativeClearTimeout from './clear-timeout';

let addToFrame = globalScope.requestAnimationFrame;
if (!addToFrame) {
  addToFrame = function addToFrame(method) {
    return nativeSetTimeout.call(null, () => {
      method(new Date().getTime());
    }, 0);
  };
}

let clearFrame = globalScope.cancelAnimationFrame;
if (!clearFrame) {
  clearFrame = function clearFrame(id) {
    return nativeClearTimeout(id);
  };
}

addToFrame = addToFrame.bind(globalScope);
clearFrame = clearFrame.bind(globalScope);

export default {
  addToFrame,
  clearFrame
};

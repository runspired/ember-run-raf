import globalScope from './global-scope';
const nativeClearTimeout = globalScope.clearTimeout.bind(globalScope);
export default nativeClearTimeout;

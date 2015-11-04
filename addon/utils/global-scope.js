/*global global, self*/
import isFastboot from './is-fastboot';

const globalScope = isFastboot() ? global : ( typeof window !== 'undefined' ? window : self );

export default globalScope;

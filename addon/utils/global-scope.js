/*global global, self*/
import isFastboot from './is-fastboot';

export default function globalScope() {
  return isFastboot() ? global : self;
}

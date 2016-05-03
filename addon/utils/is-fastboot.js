/* global process */
export default function isFastboot() {
  return (typeof process !== 'undefined' && process.env && process.env.EMBER_CLI_FASTBOOT);
}

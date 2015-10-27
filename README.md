# Ember-run-raf

Ember-run-raf is a `requestAnimationFrame` polyfill and a suite of `raf` tools to complement,
good all the way back to IE9 (potentially IE8).

This addon overwrites `setTimeout` to utilize `raf` whenever the given `wait` is `null` or `0`,
this has the effect of making `backburner` utilize `raf` to flush queues, which is advantageous when
your app performs a lot of animation, scrolling, or complex DOM insertions.

This project grew out of [smoke-and-mirrors](https://github.com/runspired/smoke-and-mirrors), where
these tools were used to reduce scroll jank and ensure that DOM and scroll position manipulation would
occur during the same animation frame.

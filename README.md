# Ember-run-raf

[![npm version](https://badge.fury.io/js/ember-run-raf.svg)](http://badge.fury.io/js/ember-run-raf)
[![Build Status](https://travis-ci.org/runspired/ember-run-raf.svg)](https://travis-ci.org/runspired/ember-run-raf)
[![Ember Observer Score](http://emberobserver.com/badges/ember-run-raf.svg)](http://emberobserver.com/addons/ember-run-raf)

Ember-run-raf is a `requestAnimationFrame` polyfill and a suite of `raf` tools to complement,
good all the way back to IE9 (potentially IE8).

This addon overwrites `setTimeout` to utilize `raf` whenever the given `wait` is `null` or `0`,
this has the effect of making `backburner` utilize `raf` to flush queues, which is advantageous when
your app performs a lot of animation, scrolling, or complex DOM insertions.

This project grew out of [smoke-and-mirrors](https://github.com/runspired/smoke-and-mirrors), where
these tools were used to reduce scroll jank and ensure that DOM and scroll position manipulation would
occur during the same animation frame.

## What are the consequences?

`requestAnimationFrame` is basically a much better setTimeout with a few useful
additional behaviors.  It's ties to the platform's refresh rate and will execute
the given work during the next refresh. Additionally, any work scheduled into it
becomes non-DOM affecting until all scheduled work completes.

What that means is one function can manipulate style of content on something, the
next function can accurately read that new style or content, but the browser doesn't
actually render it until the end.

Some side effect include:

- the browser auto slows or pauses frames when the tab or window is hidden to preserve memory
- it has the effect of coalescing run loops that would trigger close together if you make Ember.run use it
- it reduces scroll and animation jank by ensuring that you aren't flooding your code with callbacks faster than the browser can handle them
- it lets you add content to the DOM, shift the scroll position, and alter that content all without producing a visible change on screen

For callbacks while scrolling, using `run.scheduleOnce` + `requestAnimationFrame` has turned out
to be a hugely better throttle mechanism than `run.throttle`.  Not only does it perfectly limit
the amount of work to be done to the available time to do it, but it additionally ensures that
the work is correctly scheduled into the queue at the right time (you would have needed to schedule
from within the throttle callback before).

Instead of guessing how often you should execute and spending a ton of time in backburner to do so,
your method executes exactly when it next should, in the order it should.

This addon is mostly to start a conversation and to provide the ability to test out the idea and
use it in ember applications today.  Ideally, a tighter more direct integration with backburner
will be possible soon, without overriding `setTimeout` globally.

## The Polyfill

The specific polyfill in use here could probably be improved, I'm leaning towards creating
a new polyfill of my own after browsing the available options on `npm`, but recommendations
are welcome.

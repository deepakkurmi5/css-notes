https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions
https://web.dev/learn/css/transitions
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions

##  CSS Transitions

* CSS transitions provide a way to control animation speed when changing CSS properties.

* CSS transitions allows you to change property values smoothly, over a given duration.

## Transitions  Properties

* transition-property - /*Specifies which css  properties should be transitioned.*/

* transition-duration - /*Defines how long the transition should take to complete.*/

* transition-timing-function - /*Specifies the timing curve used for the transition.*/

* transition-delay - /*Sets a delay before the transiton starts.*/

* transition: <property> <duration> <timing-function> <delay>;


## How to Use CSS Transitions?

To create a transition effect, you must specify two things:

- the CSS property you want to add an effect to
- the duration of the effect


## Specify the Speed Curve of the Transition

The transition-timing-function property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

- ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- linear - specifies a transition effect with the same speed from start to end
- ease-in - specifies a transition effect with a slow start
- ease-out - specifies a transition effect with a slow end
- ease-in-out - specifies a transition effect with a slow start and end
- cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

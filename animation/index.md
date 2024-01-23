https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations
https://www.w3schools.com/css/css3_animations.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations
https://developer.mozilla.org/en-US/docs/Web/CSS/animation

## What are CSS Animations?

* An animation lets an element gradually(slowly slowly) change from one style to another.

                               'or' 

* CSS animations make it possible to animate transitions from one CSS style configuration to another.

* You can change as many CSS properties you want, as many times as you want.

* To use CSS animation, you must first specify some keyframes for the animation.

* Keyframes hold what styles the element will have at certain times.


## What is a Keyframe?

The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.

@keyframes identifier {
  from {
    transform: translateX(0%);
  }
  
  to {
    transform: translateX(100%);
  }
}

- /*Values*/

* <custom-ident>

- from
A starting offset of 0%.

- to
An ending offset of 100%.


* <percentage>

 
# CSS Animations Properties

* animation-name
* animation-duration
* animation-timing-function
* animation-delay
* animation-iteration-count - *set the number of times the animation should repeat. You can use values like infinite, 3 or 2n(for even iterations)* 

* animation-direction - *Determines whether the animation runs forwards, backward, backward, or alternaes beetween forward and backward cycles.*

* animation-fill-mode - 

/*CSS animations do not affect an element before the first keyframe is played or after the last keyframe is played. The animation-fill-mode property can override this behavior./*

/*The animation-fill-mode property specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both)./*

The animation-fill-mode property can have the following values:

* none - Default value. Animation will not apply any styles to the element before or after it is executing

* forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)

* backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period

*  both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions


* animation-play-state - *The animation-play-state CSS property sets whether an animation is running or paused.*

* animation - shorthand

- animation: name duration timing-function delay iteration-count direction fill-mode play-state;


* animation-timeline

The animation-timeline CSS property specifies the timeline that is used to control the progress of a CSS animation.

**Values**

* scroll() -  default value is -  scroll(block & nearest)

ex:- scroll(block) , scroll(y) ,  scroll(inline), scroll(x), scroll(nearest)

* view() - 

ex:- view(top-offset, bottom-offset) 

* auto

<!-- * animation-composition -->
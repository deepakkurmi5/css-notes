https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
https://get.foundation/sites/docs/media-queries.html
https://developer.mozilla.org/en-US/docs/Web/CSS/@media
https://www.w3schools.com/cssref/css3_pr_mediaquery.php


## CSS media queries

* CSS media queries allow us to adjust the display and orientation of content at different screen sizes.

display  -  inline, block, inline-block, flex etc.
orientation - portrait and landscape.

- portrait
The viewport is in a portrait orientation, i.e., the height is greater than or equal to the width.

- landscape
The viewport is in a landscape orientation, i.e., the width is greater than the height.

* Media queries are case-insensitive.

* Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).

## Rules

A media query is composed of an optional media type and any number of media feature expressions, which may optionally be combined in various ways using logical operators. Media queries are case-insensitive.

* Media types  - all, print, screen

Media types define the broad category of device for which the media query applies: all, print, screen. The type is optional (assumed to be all) except when using the not or only logical operators.

* Media features -  describe a specific characteristic of the user agent, output device, or environment:

- hover
- resolution
- width
- orientation
- color

For example, the hover feature allows a query to test against whether the device supports hovering over elements. Media feature expressions test for their presence or value, and are entirely optional. Each media feature expression must be surrounded by parentheses ().


* Logical operators - not, (comma), only , or, and

can be used to compose a complex media query: not, and, and only. You can also combine multiple media queries into a single rule by separating them with commas.

## Accessibility concerns

To best accommodate people who adjust a site's text size, use ems when you need a <length> for your media queries.

Both em and px are valid units, but em works better if the user changes the browser text size.

## Syntax 

@media not|only mediatype and (expressions) {
  CSS-Code;
}

## Targeting media types

Media types describe the general category of a given device. Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screen readers. For example, this CSS targets printers:


@media print {
  /* … */
}

You can also target multiple devices. For instance, this @media rule uses two media queries to target both screen and print devices:

@media screen, print {
  /* … */
}

or 

@media all {
  /* … */
}


## Targeting media features

Media features describe the specific characteristics of a given user agent, output device, or environment. For instance, you can apply specific styles to widescreen monitors, computers that use mice, or to devices that are being used in low-light conditions. This example applies styles when the user's primary input mechanism (such as a mouse) can hover over elements:

@media (hover: hover) {
  /* … */
}

and 

@media (max-width: 1250px) {
  /* … */
}

@media (min-width: 600px) {
  /* … */
}

and

@media (color) {
  /* … */
}


## Combining multiple types or features

@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}

and

@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}


## Testing for multiple queries

@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}


## Syntax improvements in Level 4


@media (max-width: 30em) {
  /* … */
}

or 

@media (width <= 30em) {
  /* … */
}

------------------------------------------------------------
------------------------------------------------------------

@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

or 

@media (30em <= width <= 50em) {
  /* … */
}

# Typical Device Breakpoints

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}


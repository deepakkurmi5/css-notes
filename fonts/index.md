<!-- =========================================
Font Docs
========================================= -->

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts
https://www.w3schools.com/css/css_font.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide
https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts

<!-- =========================================
Font Notes
========================================= -->

## Font

The CSS fonts module defines font-related properties and how font resources are loaded. ¯


## Font Properties

* font shorthand
* font-family
* font-feature-settings
* font-kerning
* font-language-override
* font-optical-sizing
* font-palette
* font-size
* font-size-adjust - not supportable (11.96%%)
* font-stretch
* font-style
* font-weight
* font-synthesis shorthand
* font-synthesis-small-caps
* font-synthesis-style
* font-synthesis-weight
* font-variant shorthand
* font-variant-alternates
* font-variant-caps
* font-variant-east-asian
* font-variant-emoji
* font-variant-ligatures
* font-variant-numeric
* font-variant-position
* font-variation-settings

# At-rules and descriptors

- At-rule: @font-face
Descriptors:

* ascent-override
* descent-override
* font-display
* font-family
* font-feature-settings
* font-stretch
* font-style
* font-variation-settings
* font-weight
* line-gap-override
* size-adjust
* src
* unicode-range

- At-rule: @font-feature-values
Descriptor:

* font-display

- At-rule: @font-palette-values
Descriptors:

* base-palette
* font-family
* override-colors

## Font Properties Docs

<!-- ?=========================================
*font-family
?========================================= -->

The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

1. Values are separated by commas to indicate that they are alternatives. 
   
   *The browser will select the first font in the list that is installed or that can be downloaded using a @font-face at-rule.*

2. The font-family property specifies a list of fonts, from highest priority to lowest. 

3. You should always include at least one generic family name in a font-family list,  since there's    
   no guarantee that any given font is available. This lets the browser select an acceptable fallback font when necessary.


**Generic Font Families**

In CSS there are five generic font families:

1. Serif fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2. Sans-serif fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
3. Monospace fonts - here all the letters have the same fixed width. They create a mechanical look. 
4. Cursive fonts imitate human handwriting.
5. Fantasy fonts are decorative/playful fonts.

Example - font-family: "Courier New", Courier, monospace; 


<!-- ?=========================================
*font-feature-settings
?========================================= -->

This property gives us control over advanced typographic settings such as small caps, ligatures, and swashes. To activate them you must declare which value you need in quotes and then followed by either 1 or on to enable. Alternatively, you can disable them with either 0 or off:

**Values**

* liga: standard ligatures
* dlig: discretionary ligatures
* onum: old style figures
* lnum: lining figures
* tnum: tabular figures
* zero: slashed zero
* frac: fractions
* sups: superscript
* subs: subscript
* smcp: small caps
* c2sc: small capitals from capitals
* case: case-sensitive forms
* hlig: historical ligatures
* calt: contextual alternates
* swsh: swashes
* hist: historical forms
* ss**: stylistic sets
* kern: kerning
* locl: localized forms
* rlig: required ligatures
* medi: medial forms
* init: initial forms
* isol: isolated forms
* fina: final forms
* mark: mark
* mkmk mark-to-mark positioning 


<!-- ?=========================================
*font-variant
?========================================= -->

The font-variant property allows you to change the targeted text to small caps. This property has been extended in CSS3.

Before CSS3, this property accepted one of two possible values: normal (how text is rendered by default) and small-caps.


**Properties**

* font-variant-alternates
* font-variant-caps
* font-variant-east-asian
* font-variant-emoji
* font-variant-ligatures
* font-variant-numeric
* font-variant-position

@font-face


# At-rules and descriptors Docs

https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face

@font-face

The @font-face CSS at-rule specifies a custom font with which to display text; the font can be loaded from either a remote server or a locally-installed font on the user's own computer.


<!-- ?=========================================
*font-display
?========================================= -->

The font-display property defines how font files are loaded and displayed by the browser. It is applied to the @font-face rule which defines custom fonts in a stylesheet.

Values
The font-display property accepts five values:

- auto (default): Allows the browser to use its default method for loading, which is most often similar to the block value.

- block: Instructs the browser to briefly hide the text until the font has fully downloaded. More accurately, the browser draws the text with an invisible placeholder then swaps it with the custom font face as soon as it loads. This is also known as a “flash of invisible text” or FOIT.

- swap: Instructs the browser to use the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.

- fallback: Acts as a compromise between the auto and swap values. The browser will hide the text for about 100ms and, if the font has not yet been downloaded, will use the fallback text. It will swap to the new font after it is downloaded, but only during a short swap period (probably 3 seconds).

- optional: Like fallback, this value tells the browser to initially hide the text, then transition to a fallback font until the custom font is available to use. However, this value also allows the browser to determine whether the custom font is even used at all, using the user’s connection speed as a determining factor where slower connections are less likely to receive the custom font.

<!-- ?=========================================
*size-adjust
?========================================= -->

The size-adjust CSS descriptor for the @font-face at-rule defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.

The size-adjust descriptor behaves in a similar fashion to the font-size-adjust property. It calculates an adjustment per font by matching ex heights.

*Note* -

All metrics associated with this font are scaled by the given percentage. This includes glyph advances, baseline tables, and overrides provided by @font-face descriptors.

Syntax - size-adjust: 90%;


<!-- ?=========================================
*line-gap-override
?========================================= -->

The line-gap-override CSS descriptor for the @font-face at-rule defines the line-gap metric for the font. The line-gap metric is the font recommended line-gap or external leading.

**Syntax** - 

line-gap-override: normal;
line-gap-override: 90%;
https://www.w3schools.com/howto/howto_css_image_responsive.asp
https://www.w3schools.com/css/css3_images.asp
https://web.dev/learn/design/responsive-images
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#high
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

https://cloudfour.com/thinks/responsive-images-101-part-4-srcset-width-descriptors/#:~:text=Width%20descriptors%20are%20looking%20for,it%20in%20the%20srcset%20attribute.

https://www.freecodecamp.org/news/your-complete-guide-to-truly-responsive-images/

## Markup Responsive image 

*srcset* - 

One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of:

user agent - A user agent is a computer program representing a person, for example, a browser in a Web context.

- A URL to an image
- Optionally, whitespace followed by one of:

1. width descriptors -  A width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.

The width of the image source can cause some confusion. Width descriptors are looking for the resolution of the source file.

2. A pixel density descriptor (display density descriptors) - A pixel density descriptor (a positive floating point number directly followed by x). If no descriptor is specified, the source is assigned the default descriptor of 1x.

**Rules**

* It is incorrect to mix width descriptors and pixel density descriptors in the same srcset attribute. Duplicate descriptors (for instance, two sources in the same srcset which are both described with 2x) are also invalid.

* If the srcset attribute uses width descriptors, the sizes attribute must also be present, or the srcset itself will be ignored.

*sizes* -

One or more strings separated by commas, indicating a set of source sizes. Each source size consists of:

- A media condition. This must be omitted for the last item in the list.
- A source size value.
Media Conditions describe properties of the viewport, not of the image. For example, (max-height: 500px) 1000px proposes to use a source of 1000px width, if the viewport is not higher than 500px.

* Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width (w) descriptors. The selected source size affects the intrinsic size of the image (the image's display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width descriptor, then the sizes attribute has no effect.

## CSS Responsive Images 

* Responsive images will automatically adjust to fit the size of the screen.

* Responsive image hints with sizes and srcset (see also the <picture> element and our Responsive images tutorial).


**Tips and Tricks -**
------------------------------

1. If you want the image to scale both up and down on responsiveness, set the CSS width property to 100% and height to auto:

 img {
  width: 100%;
  height: auto;
} 

2. If you want an image to scale down if it has to, but never scale up to be larger than its original size, use max-width: 100% 

 img {
  max-width: 100%;
  height: auto;
} 

3. If you want to restrict a responsive image to a maximum size, use the max-width property, with a pixel value of your choice: 

 img {
  width: 100%;
  max-width: 400px;
  height: auto;
} 


## CSS The object-fit Property

The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.

We see that the image is being squished to fit the container of 200x300 pixels (its original aspect ratio is destroyed).

Here is where the object-fit property comes in. The object-fit property can take one of the following values:

* fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
* contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
* cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
* none - The image is not resized
* scale-down - the image is scaled down to the smallest version of none or contain

## Using the object-position Property

 The CSS object-position property is used to specify how an <img> or <video> should be positioned within its container.
 
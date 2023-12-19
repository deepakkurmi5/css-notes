
## CSS Variables

The var() function is used to insert the value of a CSS variable.

CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.


## Syntax of the var() Function

var(--name, value)

Variable always start with -- 

example - --variableName

name  -	Required. The variable name (must start with two dashes)
value -	Optional. The fallback value (used if the variable is not found)


## How var() Works

First of all: CSS variables can have a 

1. global 
2. local scope.

* global - Global variables can be accessed/used through the entire document.

To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element.

* local scope - Local variables can be used only inside the selector where it is declared.

To create a variable with local scope, declare it inside the selector that is going to use it.


## Advantages of using var() are:

- makes the code easier to read (more understandable)
- makes it much easier to change the color values.

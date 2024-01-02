https://developer.mozilla.org/en-US/docs/Web/CSS/@container
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries

## Container Queries

* Container queries enable you to apply styles to an element based on the size of the element's container.

## Syntax

@container <container-condition> {
  <stylesheet>
}

## Using container queries

These values have the following effects:

 - size
The query will be based on the inline and block dimensions of the container. Applies layout, style, and size containment to the container.

- inline-size
The query will be based on the inline dimensions of the container. Applies layout, style, and inline-size containment to the element.

- normal
The element is not a query container for any container size queries, but remains a query container for container style queries.

* example - 

selector {
  container-type: inline-size;
}


## Naming containment contexts

A containment context can be named using the container-name property.

* example - 

selector {
  container-name: custome-name;
  container-type: inline-size;
}

The shorthand syntax for this is to use container in the form container: <name> / <type>, for example:

selector {
  container: custome-name / inline-size;
}

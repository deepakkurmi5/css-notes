<!-- ==========================================================
 SMACSS  (Scalable and Modular Architecture for CSS)
==========================================================  -->

- There are five types of categories:

* Base
* Layout
* Module
* State
* Theme

<!-- ==========================================================
 Setup For Design
==========================================================  -->

## Base rules - 

Base rules are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. Essentially, a base style says that wherever this element is on the page, it should look like this.
                    
**index.css**
```
* { padding: 0; margin: 0 }

input[type=text] { border: 1px solid #999; }

a { color: #039; }

a:hover { color: #03C; }

```

## Layout rules

Layout rules divide the page into sections. Layouts hold one or more modules together.

```
#header, #article, #footer {
    width: 960px;
    margin: auto;
}

#article {
    border: solid #CCC;
    border-width: 1px 0 0;
}

```

## Modules rules

Modules are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on.

## State rules

State rules are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.

Finally, Theme rules are similar to state rules in that they describe how modules or layouts might look. Most sites don’t require a layer of theming but it is good to be aware of it.


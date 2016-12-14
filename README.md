# jquery-loading

[![Build Status](https://travis-ci.org/trungk18/jquery-loading.svg)](https://travis-ci.org/trungk18/jquery-loading)

Show a "loading" indicator while element (could be text, image and so on) is loading from server

##Docs and demo

1. [http://trungk18.github.io/jquery-loading/](http://trungk18.github.io/jquery-loading/)

2. [http://codepen.io/trungk18/pen/wWoLYR](http://codepen.io/trungk18/pen/wWoLYR)

## Getting started

###Install it, using [Bower](http://bower.io/):

```sh
$ bower install jquery-loading-indicator
```

###Include it:

```html
<!-- jQuery -->
<script src="js/vendor/jquery-3.1.0.min/index.js"></script>
<script src="js/jquery-loading.js"></script>

<!-- Include the CSS file to use the plugin default themes and loaders -->
<link href="css/jquery-loading.css" rel="stylesheet">
```

###Use it:

- Init loading
```javascript
$('#loading').loading({ circles: 3 });
```

- Hide loading indicator from its container.

```javascript
$('#loading').loading({ hide: true});
```

- Destroy loading indicator from its container from the DOM.

```javascript
$('#loading').loading({ destroy: true });
```

###Available options

```javascript
$('#loading').loading({
    overlay: false, // add an overlay background
    width: null, // set fixed width to loading indicator, otherwise calculated relative to element
    indicatorHtml: "<div class='js-loading-indicator' style='display: none;'></div>",
    overlayHtml: "<div class='js-loading-overlay' style='display: none;'></div>",
    base: 0.9, // indicator's width/height relative to element
    circles: 3, // number of indicator circles: maximum is 3
    top: null, //indicator position relative to the top of its container
    left: null, //indicator position relative to the left of its container
    hide: false, // hide the indicator of the current element
    destroy: false //remove the indicator from the DOM
});
```

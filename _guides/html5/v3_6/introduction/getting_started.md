---
layout: guides/html5/v3_6/content
title: &title Getting Started # title as shown in the menu and 
order: 2
menuitem: *title
platform:
  - html5
version:
  - v3_6
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Install PhotoEditor SDK

Integrating our editor into your web application is easy as pie. However, if you can't wait  to see the editor in action you can find a working demo integration [here](http://static.photoeditorsdk.com/demo/).


First, download the [latest release](https://github.com/imgly/pesdk-html5-build/releases/latest) from our public GitHub repository and extract it.
Afterwards, you will be left with the following folder structure

```bash
├── assets
│   ├── frames
│   ├── stickers
│   └── ui
├── css
└── js
    └── vendor
```

The package contains three folders that you need to integrate to your project. The
`assets` folder contains all assets required for the photoeditor, this includes for examples assets for *frames*, *stickers* and the *ui*.
Furthermore, The `css` folder containts all *stylesheets* for the PhotoEditor SDK UI. Last, the `js` folder contains all *javascript* sources of the editor and its dependencies.

In order to get started, copy the folders `assets`, `css` and `js` into your project. 
Then include the SDK and the UI JavaScript files in your as well as the CSS files inside your `<head>` tag:

```html
<head>
  <!-- React Dependencies for the SDK UI --> 
  <script src="js/vendor/react.min.js"></script>
  <script src="js/vendor/react-dom.min.js"></script>
  <!-- PhotoEditor SDK-->
  <script src="js/PhotoEditorSDK.min.js"></script>
  <!-- PhotoEditor SDK UI --> 
  <script src="js/PhotoEditorReactUI.min.js"></script>
  <link rel="stylesheet" href="css/PhotoEditorReactUI.min.css" />
</head>
```

Now, create a `<div>` tag as a container for the editor. The editor will adapt its size according to the dimensions of the container.
For the sake of simplicity, specify the dimensions using inline styles: 
    
```html
<div id="editor" style="width: 100vw; height: 100vh;"></div>
```

Finally, in order to initialize the editor, instantiate the UI using JavaScript. Add the following code right below our containing `<div>` element:

```html
<script>
  window.onload = function () {
    var container = document.getElementById('editor')
    var editor = new PhotoEditorSDK.UI.ReactUI({
      container: container,
      apiKey: 'YOUR_API_KEY', // <-- Please replace this with your API key
      assets: {
        baseUrl: '/assets' // <-- This should be the absolute path to your `assets` directory
      }
    })
  }
</script>
```

This was all required to get the PhotoEditor SDK up and running. For simplicity here is the whole source code of  the *html* file:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- React Dependencies for the SDK UI --> 
    <script src="js/vendor/react.min.js"></script>
    <script src="js/vendor/react-dom.min.js"></script>
    <!-- PhotoEditor SDK-->
    <script src="js/PhotoEditorSDK.min.js"></script>
    <!-- PhotoEditor SDK UI --> 
    <script src="js/PhotoEditorReactUI.min.js"></script>
    <link rel="stylesheet" href="css/PhotoEditorReactUI.min.css" />
  </head>

  <body>
    <div id="editor" style="width: 100vw; height: 100vh;"></div>
    <script>
      window.onload = function () {
        var container = document.getElementById('editor')
        var editor = new PhotoEditorSDK.UI.ReactUI({
          container: container,
          apiKey: 'YOUR_API_KEY', // <-- Please replace this with your API key
          assets: {
            baseUrl: '/assets' // <-- This should be the absolute path to your `assets` directory
          }
        })
      }
    </script>
  </body>
</html>
```

Launch your favorite webserver and enjoy our editor. If you don't know which webserver to use, give `python -m SimpleHTTPServer 8000`` a try.


In any case, you can find a working demo integration [here](http://static.photoeditorsdk.com/demo/).
---
layout: guide
title: Controls # title as shown in the menu and 
order: 1
category: 
  - ios # One of the categories
  - guide
  - ui
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Controls 

## Overview 

## Force Controls

Since version 3.5.0 you can force users to use certain controls before using all other editor
functions. In order to do that, you need to pass the `editor.forceControls` option which contains
an array of objects in the following format:

```js
{
  control: "control-identifier", // e.g. crop, filter, adjustments
  options: {
    key: "value" // This object should contain options for the given control
  }
}
```

## Example: Force crop

In order to force a user to crop the input image to a square image, pass the following options:

```js
var editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    forceControls: [
      {
        control: "crop",
        options: {
          ratios: [
            { name: "square", ratio: 1 }
          ]
        }
      }
    ]
  }
})
```

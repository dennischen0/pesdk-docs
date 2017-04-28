---
layout: guides/content
title: &title Filter # title as shown in the menu and 

menuitem: *title
order: 0
platform: html5
version: v3_6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 
published: true # Either published or not 
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}_framed.png){: height="400px" .center-image}

# {{ page.title }}

Filters determine the mood and atmosphere of pictures and help convey the right message for your creative. The PhotoEditor SDK ships with over 60 handcrafted filters covering all state of the art style- and mood settings that can even be previewed in camera mode. Furthermore, the API of the PhotoEditor SDK enables you to expand the filter library with your own set of custom filters and define your unique visual language. Custom filters can easily be created by anyone using LUTs (Lookup Tables) from popular apps like Photoshop, GIMP or Lightroom.

## Adding Custom Filters 

You can create custom filters by extending the [`Filter` class](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.Filter.html).
A filter has a [`PrimitivesStack`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.Filter.PrimitivesStack.html)
which holds a list of [`FilterPrimitives`](http://static.photoeditorsdk.com/docs/html5/PhotoEditorSDK.FilterPrimitives.html).


```js
const { Filter, FilterPrimitives } = PhotoEditorSDK
class BWHardFilter extends Filter {
  constructor (...args) {
    super(...args)
    this._stack.push(new FilterPrimitives.Grayscale())
    this._stack.push(new FilterPrimitives.Contrast({
      contrast: 1.5
    }))
  }
}

/**
 * A unique string that identifies this filter
 */
BWHardFilter.identifier = 'bwhard'

/**
 * This string is used in the UI
 */
BWHardFilter.displayName = 'B&W Hard'
```

You can now pass the filter to the `FilterOperation`:

```js
const filterOperation = new PhotoEditorSDK.Operations.FilterOperation(sdk, {
  filter: new BWHardFilter()
})
```


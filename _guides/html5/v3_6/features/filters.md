---
layout: guides/content
title: &title Filters # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.

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
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}


Filters determine the mood and atmosphere of pictures and help convey the right message for your creative. The PhotoEditor SDK ships with over 60 handcrafted filters covering all state of the art style- and mood settings that can even be previewed in camera mode. Furthermore, the API of the PhotoEditor SDK enables you to expand the filter library with your own set of custom filters and define your unique visual language. Custom filters can easily be created by anyone using LUTs (Lookup Tables) from popular apps like Photoshop, GIMP or Lightroom.

## Adding Custom Filters

You can create custom filters by extending the [`Filter` class](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Filter.html).
A filter has a [`PrimitivesStack`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Filter.PrimitivesStack.html)
which holds a list of [`FilterPrimitives`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.FilterPrimitives.html).


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


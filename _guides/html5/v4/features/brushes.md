---
layout: guides/content
title: &title Brush # title as shown in the menu and
description: The Brush Engine of the PhotoEditor SDK for HTML5 is optimized for touch screen interaction and supports various brush strokes, thicknesses, and colors.
menuitem: *title
order: 7
platform: html5
version: v4-DesktopUI
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

The highly efficient brush engine of the PhotoEditor SDK is optimized for touch screen interaction and supports different brush strokes that can be edited in terms of thickness and color.


## Localization

### Overlay name

By default, our UI displays each overlay's `defaultName` as the overlay label. You can override this value for each overlay by overriding or adding new keys to the `controls.overlay.overlays` object in the [Localization JSON]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/localization) file:

```js
{
  "editor": {
    "controls": {
      // ...
      "overlay": {
        // ...
        "overlays": {
          // ...
          "my_overlay": "Customly localized overlay name"
          // ...
        }
        // ...
      }
      // ...
    }
  }
}
```

---
layout: guides/content
title: &title Overlays # title as shown in the menu and

menuitem: *title
order: 8
platform: html5
version: v4
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

{% include html5_ui_badge.html react=false desktop=true %}

## Adding custom overlay images

In order to add custom overlay images to your UI, you can pass them using the `overlays` option of the `overlay` control:

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    overlay: {
      overlays: [
        {
          identifier: 'my_overlay',
          defaultName: 'Custom Overlay',
          image: 'overlays/my_overlay.jpg',
          thumbnail: 'overlays/my_overlay_thumb.jpg',
          blendMode: 'lighten'
        }
      ],
      replaceOverlays: false
    }
  }
})
```

Available blend modes are `normal`, `overlay`, `hard light`, `soft light`, `multiply`, `darken`, `lighten`, `screen` and `color burn`.

If you set the `replaceOverlays` option to `true`, only your own overlays will be displayed in the UI. You can also specify the available overlays by passing their identifiers using the `availableOverlays` option.

The default identifiers are: `imgly_overlay_golden`, `imgly_overlay_bokeh`, `imgly_overlay_hearts`, `imgly_overlay_lightleak1`, `imgly_overlay_lightleak2`, `imgly_overlay_rain`, `imgly_overlay_wood`, `imgly_overlay_mosaic`, `imgly_overlay_chop`, `imgly_overlay_vintage`, `imgly_overlay_metal`, `imgly_overlay_paper`, `imgly_overlay_painting`, `imgly_overlay_grain`, `imgly_overlay_clouds`, `imgly_overlay_wall1` and `imgly_overlay_wall2`


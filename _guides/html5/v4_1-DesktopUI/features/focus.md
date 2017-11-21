---
layout: guides/content
title: &title Focus # title as shown in the menu and
description: The focus tool of the PhotoEditor SDK for HTML5 lets your users add a radial or linear blur to their images. Learn how to configure the tool.
menuitem: *title
order: 0
platform: html5
version: v4_1-DesktopUI
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}


The focus tool allows your users to add a radial or linear blur to their images which lets them mimic *Tile Shift* or *Bokeh* effects.

# Specifying which focus modes are available

In order to enable or disable specific focus modes, simply pass the `availableModes` option to
the focus controls. This option should be an array of focus identifiers of which the following
are available: `radial`, `mirrored`, `linear`, `gaussian`.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    focus: {
      availableModes: ['radial', 'mirrored', 'linear', 'gaussian']
    }
  }
})
```

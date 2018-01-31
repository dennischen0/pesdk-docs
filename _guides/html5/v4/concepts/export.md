---
layout: guides/content
title: &title Export to Server
description: By default, the PhotoEditor SDK for HTML5 exports to your user's device. Learn how to disable the automatic download and export to a server instead.

menuitem: *title
order: 0
platform: html5
version: v4
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

To export the resulting image as an `Image` object or as a data url, you can use the [`export`](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorDesktopUI.html#export) method:

```js
editor.export(false)
  .then((image) => {
    document.body.appendChild(image)
  })
```

The export format (e.g. DataURL or Image) and file format (e.g. PNG or JPEG) can be specified using the editor configuration. See the API documentation for available [`RenderTypes`](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.html#.RenderType) and [`ImageFormats`](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.html#.ImageFormat). When exporting using the `DATAURL` format, you can pass the resulting Data URL to a server, decode it there and write it to a file.

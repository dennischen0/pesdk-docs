---
layout: guides/content
title: &title Configuration
description: The PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: Configuration
order: 2
platform: html5
version: v4-DesktopUI
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

<!--Check PhotoEditorDesktopUI.js in the sourcecode -->

You can easily configure the editor to disable specific tools, hide buttons etc. by adding properties
to the `options` object passed to the UI:

  * `license` String - Your license (Required)
  * `container` DOMElement - The element the editor should be rendered to.
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`.
  * `logLevel` String - `trace`, `info`, `warn`, `error` or `log`. Defaults to `warn`.
  * `responsive` Boolean - Specifies whether the editor should react to window resizing.
  * `preloader` Boolean - Enables the preloader. Defaults to `true`.

  * `assets` Object
    * `baseUrl` String - The base URL for all assets. Should be the absolute path to your `assets` directory. Defaults to `assets`
    * `resolver` Function - A function that gets called for every asset. Can turn an asset path into another path. Useful for stuff like Rails' asset pipeline.

  * `editor` Object
    * `image` Image - The image that should be loaded and displayed initially.
    * `pixelRatio` Number - If none is given, the SDK automatically detects the current device's pixel ratio.
    * `preferredRenderer` String - Defaults to `webgl`. Available are `webgl` and `canvas`.
    * `displayCloseButton` Boolean - Should a close button be displayed? If set to `true`, the `DesktopUI` instance will emit a `close` event when the button is clicked
    * `displayResizeMessage` Boolean - Should a message be displayed when the image has been scaled down for performance reasons. Defaults to `true`.
    * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type
      * `desktop` Number - Defaults to 10
      * `mobile` Number - Defaults to 5
    * `enableDrag` Boolean - Should the image be draggable? Defaults to `true`.
    * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`.
    * `enableExport` Boolean - Should the export button be displayed? Defaults to `true`. If set to `false`, export is still available via the API.
    * `smoothDownscaling` Boolean - Toggles smooth downscaling of images and sprites. Might have a negative impact on performance, therefor default is `false`.
    * `tools` Array - The enabled tools. Available are: `transform`, `filter`, `adjustments`, `focus`, `text`, `sticker`, `brush`, `frame` and `overlay`
    * `controlsOrder` Array - The order in which the controls are displayed. Available are `library`, `transform`, `filter`, `adjustments`, `focus`, `text`, `sticker`, `brush`, `frame` and `overlay`. Can be grouped in arrays which will be displayed with separators.
    * `operationsOrder` Array - The order in which operations are added to the stack. Changing this may have a negative impact on performance.
    * `controlsOptions` Object - Objects passed to the controls. See [the documentation](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.Controls.html) for available controls and their options.

    * `export` Object
      * `format` String - The mime type of the exported image. Defaults to `image/png`. Available formats vary by browser.
      * `type` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
      * `download` Boolean - Should a download dialog be displayed on export?
      * `fileBasename` String - The base file name, defaults to `photoeditorsdk-export`
      * `quality` Number - JPEG quality, defaults to 0.8

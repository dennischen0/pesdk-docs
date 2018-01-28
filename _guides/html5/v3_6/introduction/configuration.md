---
layout: guides/content
title: &title Configuration
description: The PhotoEditor SDK for HTML5 can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

menuitem: Configuration
order: 2
platform: html5
version: v3_6
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

<!--Check PhotoEditorReactUI.js in the sourcecode -->

You can easily configure the editor to disable specific tools, hide buttons etc. by adding properties
to the `options` object passed to the UI:

  * `apiKey` String - Your API key (Required)
  * `container` DOMElement - The element the editor should be rendered to.
  * `title` String - The text in the title bar. Can only be changed by licensed developers.
  * `language` String - The UI language. Defaults to `en`. Available are `en` and `de`.
  * `logLevel` String - `trace`, `info`, `warn`, `error` or `log`. Defaults to `warn`.
  * `enableUpload` Boolean - Enables photo upload. Defaults to `true`.
  * `enableWebcam` Boolean - Enables webcam support. Defaults to `true` on desktop devices, `false` on mobile devices (mobile devices handle camera upload via the default upload functionality)
  * `showCloseButton` Boolean - Should the close button be displayed? Defaults to `false`. If set to
    true, the editor will emit a `close` event when the user clicks the close button.
  * `showHeader` Boolean - Should the header be displayed? Defaults to true. Can only be changed by licensed developers.
  * `showTopBar` Boolean - Should the top bar (new / zoom / undo / export) be displayed? Defaults to `true`.
  * `preloader` Boolean - Enables the preloader. Defaults to `true`.
  * `watermarkImage` Image - An image that should be placed on top as a watermark. Defaults to `undefined`.
  * `image` Image - The image that the user can edit. Defaults to `undefined`.
  * `displayResizeMessage` Boolean - Should a message be displayed when the image has been scaled down for performance reasons. Defaults to `true`.


  * `photoRoll` Object
    * `provider` PhotoEditorSDK.UI.ReactUI.PhotoRoll.Provider - The class providing all data for the photo roll.

  * `editor` Object
    * `image` Image - The image that should be loaded and displayed initially.
    * `preferredRenderer` String - Defaults to `webgl`. Available are `webgl` and `canvas`.
    * `pixelRatio` Number - If none is given, the SDK automatically detects the current device's
        pixel ratio.
    * `responsive` Boolean - Should the editor re-render on window resize? Defaults to `false`.
    * `enableDrag` Boolean - Should the image be draggable? Defaults to `true`.
    * `enableZoom` Boolean - Should the image be zoomable? Defaults to `true`.
    * `smoothDownscaling` Boolean - Toggles smooth downscaling of images and sprites. Might have
      a negative impact on performance, therefor default is `false`.
    * `smoothUpscaling` Boolean - Toggles smooth upscaling
    * `tools` Array - The enabled tools. Available are: `crop`, `filter`,
      `brightness`, `saturation`, `contrast`, `gamma`, `clarity`, `exposure`, `shadows`, `highlights`,
      `text`, `sticker`, `brush`, `radial-focus`, `linear-focus`, `border` and `frame`
    * `controlsOrder` Array - The order in which the controls are displayed. Available are `crop`,
        `orientation`, `filter`, `adjustments`, `text`, `sticker`, `brush`, `focus`, `selective-blur`, `border`. Can
        be grouped in arrays which will be displayed with separators.
    * `operationsOrder` Array - The order in which operations are added to the stack. Changing
        this may have a negative impact on performance.
    * `controlsOptions` Object - Objects passed to the controls. See [the documentation](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.UI.ReactUI.Controls.html) for available controls and their options.
    * `maxMegaPixels` Object - Specifies the maximum amount of megapixels per device type
      * `desktop` Number - Defaults to 10
      * `mobile` Number - Defaults to 5
    * `export` Object
      * `showButton` Boolean - Should the export button be visible? Defaults to `true`.
      * `format` String - The mime type of the exported image. Defaults to `image/png`. Available
        formats vary by browser.
      * `type` PhotoEditorSDK.RenderType - Specifies the export type (image or data url)
      * `download` Boolean - Should a download dialog be displayed on export?
  * `assets` Object
    * `baseUrl` String - The base URL for all assets. Should be the absolute path to your
        `assets` directory. Defaults to `assets`
    * `resolver` Function - A function that gets called for every asset. Can turn an asset
      path into another path. Useful for stuff like Rails' asset pipeline.




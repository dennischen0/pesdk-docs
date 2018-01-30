---
layout: guides/content
title: &title Overview # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 provides all the tools necessary to enhance your product with state-of-the-art photo editing features, effects, and assets.
menuitem: Overview
order: 0
platform: html5
version: v4
versions:
  - v4-DesktopUI
  - v4-ReactUI
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


Our photo editor is a powerhorse. It comes with unmatched performance using WebGL as primary
rendering engine, and canvas as fallback. All essential photo editing functions are bundled into a
beautiful, simple and skinnable UI. The editor is easily extensible and customizable via API as
described in the following sections.

__Note:__ Since we're working with the latest web technologies, all code samples are using the
ECMAScript 6 standard. If you're using an older ECMAScript / JavaScript standard, please use
[Babel](http://babeljs.io/) to compile the examples to ES5.

<div class="documentation__disclaimer">
<h4 id="license-terms">License Terms</h4>
Make sure you have a commercial license before releasing your app.
A commercial license is always required unless you are a non-profit company. Please [contact us](https://www.photoeditorsdk.com/pricing) to get more information about the pricing options.
</div>



## Architecture

Our photo editor consists of two parts:

### Framework
  The SDK handles the image processing.
  It provides many powerful operations like cropping, image
  orientation, beautiful filters, adjustments, text and sticker overlays and much more. It's the
  heart of our editor and it's easily extensible with custom filters or even custom operations.
  The engine handles image rendering at the lowest level. With a simple scene graph based API, it
  combines and abstracts the complicated WebGL and Canvas2D APIs. Its highly performant architecture
  even allows you to do real-time rendering.
  The engine is not covered in this documentation. Go to
  our [API documentation](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.Engine.html) to
  learn more about it.

### User Interface

  Our beautiful and fully customizable UI is based on React.JS. It's the top level of our SDK
  and it's incredibly easy to integrate into your website or web application - no matter if you're
  already using React.JS or not. A few lines of JavaScript and you're ready to go.

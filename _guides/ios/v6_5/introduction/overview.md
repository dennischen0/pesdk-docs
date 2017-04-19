---
layout: guides/ios/v6_5/content
title: &title Overview # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Overview

Our SDK provides tools for adding photo editing capabilities to your iOS application with a big variety of filters that can be previewed in realtime. Unlike other apps that allow a live preview of filters, the Photo Editor SDK even provides a live preview when using high-resolution images. We do not have any resolution limits, the framework is written in Swift and allows for easy customization.
Additionally we support adding stickers and text in a non-destructive manner, which means that you can change the position, size, scale and order at any given time, even after applying other effects or cropping the photo.

<div class="documentation__disclaimer">
<h4>License Terms</h4>
Make sure you have a commercial license before releasing your app.
A commercial license is required for any app or service that has any form of monetization: This includes free apps with in-app purchases or ad supported applications. Please contact us if you want to purchase the commercial license.
</div>

## Features

* 62 stunning built in filters to choose from.
* Native code: Our rendering engine is based on Apple's Core Image, therefore we dodge all the nasty OpenGL problems other frameworks face.
* iPad support: The Photo Editor SDK uses auto layout for its views and adapts to each screen size - iPhone or iPad.
* Design filters in Photoshop: With most photo editing frameworks you have to tweak values in code or copy & paste them from Photoshop or your favorite image editor. With our response technology that is a thing of the past. Design your filter in Photoshop, once you are done apply it onto the provided identity image. That will 'record' the filter response - save it, add it as new filter, done!
* Swift: Keeping up with time, we chose Swift as the main development language of the Photo Editor SDK, leading to leaner easier code.
* Live preview: Filters can be previewed directly in the camera preview.
* Low memory footprint: We were able to reduce our memory footprint significantly.
* Non-destructive: Don't like what you did? No problem, just redo or even discard it.
* Highly customizable: Style the UI as you wish to match your needs.
* Objective-C support: All of our public API is Objective-C compatible.
* Fast: Our renderer uses hardware acceleration and the GPU, which makes it lightning fast.

### New in Version 6.0

* Updated UI: We've made some UI changes leading to an even better user experience.
* Lots of refactoring and stability improvements
* Updated Sticker Tool: We now support multiple sticker categories and sticker coloring.
* Updated Focus Tool: You can finally adjust the gradient and we've moved from a gaussian blur to a box blur for an even better result.
* Transform Tool: We've completely redesigned and rewritten our crop tool. You can now not only crop your image, but also straighten it.

![Product](/assets/images/ios/product.png)

---
layout: guides/content
title: &title Adjustments # title as shown in the menu and
description: The Adjustment tool set of the PhotoEditor SDK for HTML5 offers essential and advanced editing functions like Brightness, Contrast, Saturation or Exposure.
menuitem: Adjustments
order: 2
platform: html5
version: v4
category:
  - guide
  - feature
tags:
  - photo editor
published: true # Either published or not
---

<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_desktop %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg
{% endcapture %}
{% capture image_react %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}_react.jpg
{% endcapture %}

{% assign images = "" | split: "" | push: image_desktop | push: image_react %}
{% include image_carousel.html images=images %}

Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast, while allowing more expert users to fine tune highlights, shadows and clarity.

# Specifying which adjustments are available

In order to enable or disable specific adjustments, simply pass the `availableAdjustments` option to
the adjustments controls. This option should be an array of adjustment identifiers of which the following
are available: `brightness`, `saturation`, `contrast`, `gamma`, `clarity`, `exposure`, `shadows`, `highlights`

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    focus: {
      availableModes: ['brightness', 'saturation', 'contrast']
    }
  }
})
```

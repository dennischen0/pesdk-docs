---
layout: guides/content
title: &title Text # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 ships with a robust tool that provides all necessary functions for quickly adding text. Learn how to add custom fonts.
menuitem: *title
order: 4
platform: html5
version: v4
category:
  - guide
  - feature
tags: &tags # tags that are necessary
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

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.

## Adding custom fonts

You can add custom fonts by passing them using the `fonts` option.

If `replaceFonts` is set to true, all default fonts are removed. If it is set to `false`, youur additional fonts are appended.

# Text Metrics

Due to the lack of support for font measurement and precise layouting, the SDK relies font metrics from the fonts used in the editor. These are provided for all default fonts and can be easily added along with your custom fonts.

**WARNING**: If you do not provide font metrics for your custom font, the SDK will issue a warning during load and you may experience cut off or jumping text. To quickly collect the required metrics, we recommend the [Opentype Font Inspector](https://opentype.js.org/font-inspector.html). Just upload your font file and extract `unitsPerEm` from the _Font Header table_, as well as `ascender` and `descender` from the _Horizontal Header Table_.

### Adding system fonts

You can simply add system fonts by specifying their font family, which you would also use in CSS, and the variations in which the font should be available.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    text: {
      fonts: [
        {
          fontFamily: 'Comic Sans MS', // The font family name
          variations: [
            {
              identifier: 'comicsans_regular',
              textMetrics: { // For best rendering, you'll need to determine the metrics manually
                unitsPerEm: 1000,
                ascender: 1026,
                descender: -432
              }
            },
            {
              identifier: 'comicsans_bold',
              fontWeight: 'bold',
              textMetrics: {
                //...
              }
            }
          ]
        }
      ]
    }
  }
})
```

### Adding google fonts

The `fonts` option also allows you to add custom fonts from Google Fonts. To do this, add the variation's `provider` option and set it to `google`. This will cause the UI to pre-load the font from Google Fonts.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    text: {
      fonts: [
        {
          fontFamily: 'Shrikhand', // The font family name, defined by Google Fonts
          variations: [
            {
              identifier: 'shrikhand',
              provider: 'google',  // This loads the font from Google Fonts
              textMetrics: { // For best rendering, you'll need to determine the metrics manually
                unitsPerEm: 1000,
                ascender: 1026,
                descender: -432
              }
            }
          ]
        }
      ]
    }
  }
})
```

### Adding web fonts

The `fonts` option also allows you to add custom web fonts. To do this, set the variaton's `provider` option to `file` and specify a `filePath`. If the `filePath` is relative, it will be fetched from the `assets/` directory. We recommend adding the web fonts as `.woff` files, which have the widest browser support.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    text: {
      fonts: [
        {
          fontFamily: 'Custom Font', // The font family name, defined by you. Can be anything.
          variations: [
            {
              identifier: 'custom_font', // A unique identifier for this font
              provider: 'file',
              filePath: 'fonts/Custom-Font.woff',
              textMetrics: {
                unitsPerEm: 2048,
                ascender: 500,
                descender: -400
              }
            }
          ]
        }
      ]
    }
  }
})
```

## Specifying the available fonts

Per default, all existing font variations (including your own) are available to the user. To make only specific fonts available to the user, use the `availableFonts` option.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    text: {
      availableVariations: [
        'imgly_font_aleo_bold',
        'imgly_font_amaticsc',
        'custom_font'
      ]
    }
  }
})
```

## Rotation snapping

Our UI allows the user to freely rotate texts, which is nice, but it can be hard to hit the right rotation (e.g. exactly 90 degrees). To fix this, we added a customizable snapping feature that can be configured using the `snapRotation` and `snapRotationTolerance` options:

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    text: {
      // This value defines at what degrees rotation snapping should happen
      snapRotation: 90,

      // This value defines at what degrees *around* the `snapRotation` value snapping should happen
      snapRotationTolerance: 5
    }
  }
})
```

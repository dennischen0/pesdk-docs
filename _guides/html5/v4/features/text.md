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
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

{% include html5_ui_badge.html react=true desktop=true %}

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.



## Adding custom fonts

You can add custom fonts by passing them using the `fonts` option.

If `replaceFonts` is set to true, all default fonts are removed. If it is set to `false`, your additional fonts are appended.

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
              identifier: 'comicsans_regular'
            },
            {
              identifier: 'comicsans_bold',
              fontWeight: 'bold'
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
              provider: 'google' // This loads the font from Google Fonts
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
              filePath: 'fonts/Custom-Font.woff'
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

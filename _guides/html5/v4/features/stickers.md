---
layout: guides/content
title: &title Stickers # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library.
menuitem: *title
order: 5
platform: html5
version: v4-DesktopUI
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

The PhotoEditor SDK ships with a categorized sticker library whose UI is optimized for exploration and discovery. You can easily leverage the API to complement the library with your custom sticker packages.

## Adding custom stickers

You can add custom sticker categories and stickers by passing them using the `categories` option which should follow our [__Stickers JSON Schema__](#stickers-json-schema).

If `replaceCategories` is set to true, all default categories and stickers are removed. If it is set to `false`, your additional categories and stickers are appended.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    sticker: {
      categories: [
        {
          identifier: 'some_category',
          defaultName: 'Some Category',
          metaData: {
            backgroundImage: 'stickers/background.png'
          },
          stickers: [
            {
              identifier: 'custom_sticker',
              defaultName: 'Custom Sticker',
              images: {
                mediaThumb: {
                  uri: 'stickers/thumb/customsticker.png',
                  width: 50,
                  height: 50
                },
                mediaBase: {
                  uri: 'stickers/base/customsticker.png',
                  width: 400,
                  height: 400
                }
              }
            }
          ]
        }
      ],
      replaceCategories: true // `categories` replaces all other categories / stickers
    }
  }
})
```

## Specifying the available stickers

Per default, all existing stickers (including your own) are available to the user. To make only specific stickers available to the user, use the `availableStickers` option.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    sticker: {
      availableStickers: [
        'imgly_sticker_emoticons_alien',
        'imgly_sticker_emoticons_angel',
        'custom_sticker'
      ]
    }
  }
})
```

### Stickers JSON Schema

In order to correctly use stickers in our UI, you need to follow our Stickers JSON Schema:

```json
{
  "version": "2.0",
  "categories": [{
    "identifier": "imgly_sticker_emoticons",
    "defaultName": "Emoticons",
    "metaData": {
      "backgroundImage": "stickers/background.png"
    },
    "stickers": [{
      "identifier": "imgly_sticker_emoticons_alien",
      "defaultName": "Alien Emoticon",
      "images": {
        "mediaThumb": {
          "uri": "https://xxxxxxxxxx",
          "width": 100,
          "height": 100
        },
        "mediaMedium": {
          "uri": "https://xxxxxxxxxx",
          "width": 500,
          "height": 500
        },
        "mediaBase": {
          "uri": "https://xxxxxxxxxx",
          "width": 2136,
          "height": 3216
        }
      }
    }, {
      "identifier": "imgly_sticker_emoticons_angel",
      "defaultName": "Angel Emoticon",
      "images": {
        "mediaThumb": {
          "uri": "https://xxxxxxxxxx",
          "width": 100,
          "height": 100
        },
        "mediaMedium": {
          "uri": "https://xxxxxxxxxx",
          "width": 500,
          "height": 500
        },
        "mediaBase": {
          "uri": "https://xxxxxxxxxx",
          "width": 2136,
          "height": 3216
        }
      }
    }]
  }]
}
```

## Enable smooth downscaling

Due to the nature of WebGL, downscaling images might result in pixellated images. You can avoid that by setting `smoothDownscaling` to `true`. Please note that this might impact performance of the editor, since the Editor now uses larger textures internally:

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    sticker: {
      smoothDownscaling: true
    }
  }
})
```

## Rotation snapping

Our UI allows the user to freely rotate stickers, which is nice, but it can be hard to hit the right rotation (e.g. exactly 90 degrees). To fix this, we added a customizable snapping feature that can be configured using the `snapRotation` and `snapRotationTolerance` options:

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    sticker: {
      // This value defines at what degrees rotation snapping should happen
      snapRotation: 90,

      // This value defines at what degrees *around* the `snapRotation` value snapping should happen
      snapRotationTolerance: 5
    }
  }
})
```

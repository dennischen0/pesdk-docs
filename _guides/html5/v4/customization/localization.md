---
layout: guides/content
title: &title Localization
description: The PhotoEditor SDK for HTML5 can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.

menuitem: *title
order: 0
platform: html5
version: v4
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

{% include html5_ui_badge.html react=true desktop=true %}

International web applications have international users. That's why our editor is already available in English (EN) and German (DE) and you can easily switch languages by adding the `language` String (Defaults to `en`) property to the `options` object passed to the UI. Check the [configuration section](https://docs.photoeditorsdk.com/guides/html5/v4-DesktopUI/introduction/configuration) for further information. To add custom languages to our UI, you can pass them using the `extensions.languages` object. The `language` option
specifies the language that the UI should use.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  extensions: {
    languages: {
      es: spanishLanguageObject
    }
  },
  language: 'es'
})
```

The language objects should have the same structure as our default languages. Here is the English
language object as an example:

```json
{
  "editor": {
    "new": "New",
    "export": "Export",
    "cancel": "Cancel",
    "controls": {
      "library": {
        "title": "Library",
        "search": "Search Library",
        "fileDropZone": "Drag image here or click to browse for one.",
        "fileDropZoneHovered": "Drop to upload."
      },
      "transform": {
        "title": "Transform",
        "reset": "Reset Default",
        "dimensions": {
          "width": "w",
          "height": "h"
        },
        "ratios": {
          "imgly_transforms_common": {
            "name": "Common Crops",
            "ratios": {
              "imgly_transform_common_custom": "Custom",
              "imgly_transform_common_square": "Square",
              "imgly_transform_common_4-3": "4:3",
              "imgly_transform_common_16-9": "16:9"
            }
          },
          "imgly_transforms_facebook": {
            "name": "Facebook",
            "ratios": {
              "imgly_transform_facebook_ad": "Ad",
              "imgly_transform_facebook_post": "Post",
              "imgly_transform_facebook_cover": "Cover",
              "imgly_transform_facebook_profile": "Profile Pic"
            }
          }
        }
      },
      "filter": {
        "title": "Filters",
        "filters": {
          "identity": "None",
          "imgly_lut_ad1920": "1920 A.D.",
          "imgly_lut_ancient": "Ancient",
          "imgly_lut_bleached": "Bleached",
          "imgly_lut_bleachedblue": "Bleached Blue",
          "imgly_lut_blues": "Blues",
          "imgly_lut_blueshadows": "Blue Shadows",
          "imgly_lut_breeze": "Breeze",
          "imgly_lut_bw": "B & W",
          "imgly_lut_classic": "Classic",
          "imgly_lut_colorful": "Colorful",
          "imgly_lut_cool": "Cool",
          "imgly_lut_cottoncandy": "Cotton Candy",
          "imgly_lut_creamy": "Creamy",
          "imgly_lut_eighties": "Eighties",
          "imgly_lut_elder": "Elder",
          "imgly_lut_evening": "Evening",
          "imgly_lut_fall": "Fall",
          "imgly_lut_food": "Food",
          "imgly_lut_glam": "Glam",
          "imgly_lut_gobblin": "Gobblin",
          "imgly_lut_highcarb": "High Carb",
          "imgly_lut_highcontrast": "High Contrast",
          "imgly_lut_k1": "K1",
          "imgly_lut_k6": "K6",
          "imgly_lut_kdynamic": "KDynamic",
          "imgly_lut_keen": "Keen",
          "imgly_lut_lenin": "Lenin",
          "imgly_lut_litho": "Litho",
          "imgly_lut_lomo100": "Lomo 100",
          "imgly_lut_lucid": "Lucid",
          "imgly_lut_neat": "Neat",
          "imgly_lut_nogreen": "No Green",
          "imgly_lut_orchid": "Orchid",
          "imgly_lut_pale": "Pale",
          "imgly_lut_pitched": "Pitched",
          "imgly_lut_plate": "Plate",
          "imgly_lut_pola669": "Pola 669",
          "imgly_lut_polasx": "Pola SX",
          "imgly_lut_pro400": "Pro 400",
          "imgly_lut_quozi": "Quozi",
          "imgly_lut_sepiahigh": "Sepia High",
          "imgly_lut_settled": "Settled",
          "imgly_lut_seventies": "Seventies",
          "imgly_lut_soft": "Soft",
          "imgly_lut_steel": "Steel",
          "imgly_lut_summer": "Summer",
          "imgly_lut_sunset": "Sunset",
          "imgly_lut_tender": "Tender",
          "imgly_lut_twilight": "Twilight",
          "imgly_lut_winter": "Winter",
          "imgly_lut_x400": "X400"
        }
      },
      "adjustments": {
        "title": "Adjust",
        "sections": {
          "basics": "Basics",
          "refinements": "Refinements"
        },
        "items": {
          "brightness": "Brightness",
          "contrast": "Contrast",
          "saturation": "Saturation",
          "exposure": "Exposure",
          "gamma": "Gamma",
          "shadows": "Shadows",
          "highlights": "Highlights",
          "clarity" : "Clarity"
        }
      },
      "focus": {
        "title": "Focus",
        "items": {
          "none": "None",
          "radial": "Radial",
          "mirrored": "Mirrored",
          "linear": "Linear",
          "gaussian": "Gaussian"
        }
      },
      "text": {
        "title": "Text",
        "defaultText": "Double-click to edit!",
        "new": "New Text",
        "font": "Font",
        "size": "Size",
        "spacing": "Spacing",
        "line": "Line"
      },
      "sticker": {
        "title": "Stickers",
        "new": "New Sticker",
        "fill": "Fill",
        "opacity": "Opacity",
        "replace": "Replace",
        "stickerCategories": {},
        "stickers": {}
      },
      "brush": {
        "title": "Brush",
        "settings": "Brush Settings",
        "width": "Width",
        "hardness": "Hardness"
      },
      "frame": {
        "title": "Frames",
        "opacity": "Opacity",
        "width": "Width",
        "replace": "Replace",
        "fill": "Fill",
        "frames": {
          "none": "None"
        }
      },
      "overlay": {
        "title": "Overlay",
        "blendModes": {
          "none": "None",
          "normal": "Normal",
          "overlay": "Overlay",
          "hardLight": "Hard Light",
          "softLight": "Soft Light",
          "multiply": "Multiply",
          "darken": "Darken",
          "lighten": "Lighten",
          "screen": "Screen",
          "colorBurn": "Color Burn"
        },
        "overlays": {
          "none": "None",
          "imgly_overlay_bokeh": "Bokeh",
          "imgly_overlay_chop": "Chop",
          "imgly_overlay_clouds": "Clouds",
          "imgly_overlay_golden": "Golden",
          "imgly_overlay_grain": "Grain",
          "imgly_overlay_hearts": "Hearts",
          "imgly_overlay_lightleak1": "Light Leak 1",
          "imgly_overlay_lightleak2": "Light Leak 2",
          "imgly_overlay_metal": "Metal",
          "imgly_overlay_mosaic": "Mosaic",
          "imgly_overlay_painting": "Painting",
          "imgly_overlay_paper": "Paper",
          "imgly_overlay_rain": "Rain",
          "imgly_overlay_vintage": "Vintage",
          "imgly_overlay_wall1": "Wall",
          "imgly_overlay_wall2": "Wall 2",
          "imgly_overlay_wood": "Wood"
        }
      }
    }
  },
  "loading": {
    "loading": "Loading...",
    "exporting": "Exporting...",
    "resizing": "Resizing...",
    "fonts": "Loading fonts..."
  },
  "warnings": {
    "imageResized_maxMegaPixels": {
      "title": "Image resized",
      "text": "Your image exceeds the maximum size of ${maxMegaPixels} megapixels and has therefore been resized to ${width}x${height} pixels."
    },
    "imageResized_maxDimensions": {
      "title": "Image resized",
      "text": "Due to hardware limitations your image has been resized to ${width}x${height} pixels."
    },
    "newImage_changesLost": {
      "title": "New Image",
      "text": "Any unsaved changes will be lost. Continue?",
      "buttons": {
        "yes": "Yes",
        "no": "No"
      }
    },
    "discardChanges": {
      "title": "Discard changes?",
      "text": "You have unsaved changes. Are you sure you want to discard the changes?",
      "buttons": {
        "cancel": "Cancel",
        "keep": "Keep changes",
        "discard": "Discard changes"
      }
    }
  },
  "errors": {
    "title": "Error",
    "renderingError": {
      "text": "An error has occurred while rendering the image."
    },
    "stickerLoadingError": {
      "text": "Failed to load sticker ${path}."
    },
    "imageLoadingError": {
      "text": "Failed to load image. This can have multiple reasons, e.g. the file is corrupted or the file type is not supported."
    },
    "fontLoadingError": {
      "text": "Failed to load font ${fontFamily}."
    },
    "webcamNotSupported": {
      "text": "The webcam feature is not supported by your browser."
    },
    "webcamUnavailable": {
      "text": "Unable to display webcam image (Error: ${error})"
    },
    "invalidFileType": {
      "text": "The file type ${fileType} is not supported."
    }
  }
}

```

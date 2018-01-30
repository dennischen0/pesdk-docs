---
layout: guides/content
title: &title Filters # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.

menuitem: *title
order: 0
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

Filters determine the mood and atmosphere of pictures and help convey the right message for your creative. The PhotoEditor SDK ships with over 50 handcrafted filters covering all state of the art style- and mood settings that can even be previewed in camera mode. Furthermore, the API of the PhotoEditor SDK enables you to expand the filter library with your own set of custom filters and define your unique visual language. Custom filters can easily be created by anyone using LUTs (Lookup Tables) from popular apps like Photoshop, GIMP or Lightroom.

## Adding Custom Filters

We use a technology called Lookup Tables (LUTs) in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

![Identity LUT]({{ site.baseurl }}/assets/images/shared/identity.png){: width="30%" .center-image}

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll need to [download]({{ site.baseurl }}/assets/images/shared/identity.png){: download="pesdk_identity_lut" } the identity LUT shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you need to save your LUT as a PNG file.

Afterwards, you'll need to add the LUT image to the filter options. Filters are grouped in categories.

If `replaceCategories` is set to true, only your custom filter categories and filters will be displayed.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    filters: {
      categories: [
        {
          identifier: 'my_category', // A unique identifier for this filter category
          defaultName: 'My Category', // The default translation for this filter category
          filters: [
            {
              identifier: 'my_custom_lut', // A unique identifier for this filter
              defaultName: 'Custom LUT', // The default translation for this filter
              lutImage: 'filters/my_custom_lut.png' // The path to the LUT image
            }
          ]
        }
      ]
    }
  }
})
```

## Specifying the available filters

By default, all existing filters (including your own) are available to the user. To make only specific filters available to the user, use the `availableFilters` option.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    filter: {
      availableFilters: ['imgly_lut_ad1920', 'imgly_lut_blues']
    }
  }
})
```

## Localization

### Filter name

By default, our UI displays each filter's `defaultName` as the filter label. You can override this value for each filter by overriding or adding new keys to the `controls.filters.filters` object in the [Localization JSON]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/localization) file:

```js
{
  "editor": {
    "controls": {
      // ...
      "filter": {
        // ...
        "filters": {
          // ...
          "my_custom_lut": "Customly localized filter name"
          // ...
        }
        // ...
      }
      // ...
    }
  }
}
```

### Category name

Same goes for the category name, the localization key for this is `controls.filters.categories`:

```js
{
  "editor": {
    "controls": {
      // ...
      "filter": {
        // ...
        "categories": {
          // ...
          "my_category": "Customly localized filter category name"
          // ...
        }
        // ...
      }
      // ...
    }
  }
}
```

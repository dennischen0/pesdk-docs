---
layout: guides/content
title: &title Stickers # title as shown in the menu and 
description: The PhotoEditor SDK for Android ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library
menuitem: *title
order: 6
platform: android
version: v5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The PhotoEditor SDK comes with a predefined set of stickers, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the {% include guides/android/demo-repository.md %}.

The tool is implemented in the [`StickerEditorTool`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/StickerEditorTool.html) class and displayed using the [`StickerToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/StickerToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/styling) section.

## Managing stickers

In order to change the available stickers, rearrange or add new stickers, start with a default `PESDKConfig` as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. Then use the `setStickerConfig()` method to update the configuration. The stickers are partitioned into categories, therefore the `PESDKConfig` expects a list of `StickerCategoryConfig` objects. Each of these objects represents a single sticker category and takes three parameters:

1. The resource identifier of the sticker name. Will not be displayed in the default layout but, is used for accessibility
2. A drawable resource or ImageSource of the icon
3. A list of `StickerConfig` objects

> Please make sure you put the PNG files into the `res/raw` **or** the `res/drawable-nodpi` folder, otherwise the sticker is scaled by Android.

The list of `StickerConfig` objects represents the stickers that are available in the current category. Each `StickerConfig` takes the following five parameters:

1. Sticker identifier, this should be unique. It is currently used for serialization only.
2. Resource identifier of the sticker name. Will not be displayed in the default layout, but is used for accessibility
3. `Drawable` resource or `ImageSource` of the icon
4. `Drawable` resource or `ImageSource` of the sticker
5. (Optional) `ImageStickerConfig.OPTION_MODE` to configure the coloring behavior

A sticker configuration could then look like this:

```java
// Set custom sticker set
config.setStickerLists (
    new StickerCategoryConfig(
        "Internal PNG Stickers",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/external-stickers-category-icon.png")),
        new ImageStickerConfig(
            "your_uniq_ID-1",
            R.string.sticker_name_glasses_normal, 
            R.drawable.sticker_preview_glasses_normal, 
            R.drawable.sticker_glasses_normal
        ),
        new ImageStickerConfig(
            "your_uniq_ID-2",
            R.string.sticker_name_glasses_nerd, 
            R.drawable.sticker_preview_glasses_nerd, 
            R.drawable.sticker_glasses_nerd
        ),
        new ImageStickerConfig(
            "your_uniq_ID-3",
            R.string.sticker_name_glasses_shutter_green, 
            R.drawable.sticker_preview_glasses_shutter_green, 
            R.drawable.sticker_glasses_shutter_green
        ),
        new ImageStickerConfig(
            "your_uniq_ID-4",
            R.string.sticker_name_glasses_shutter_yellow, 
            R.drawable.sticker_preview_glasses_shutter_yellow, 
            R.drawable.sticker_glasses_shutter_yellow
        )
    ),
    new StickerCategoryConfig(
        "Internal VectorDrawable Stickers",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/external-stickers-category-icon.png")),
        new ImageStickerConfig(
                "your_uniq_ID-5",
                R.string.imgly_sticker_name_toy_drum, 
                R.drawable.imgly_sticker_toy_drum, 
                R.drawable.imgly_sticker_toy_drum, 
                ImageStickerConfig.OPTION_MODE.INK_STICKER
        ),
        new ImageStickerConfig(
                "your_uniq_ID-6",
                R.string.imgly_sticker_name_toy_crayons, 
                R.drawable.imgly_sticker_toy_crayons, 
                R.drawable.imgly_sticker_toy_crayons, 
                ImageStickerConfig.OPTION_MODE.INK_STICKER
        )
    ),
    new StickerCategoryConfig(
        "External Stickers",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/external-stickers-category-icon.png")),
        new ImageStickerConfig(
                "your_uniq_ID-7",
                "My External PNG", 
                ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-preview-128x128.png")), 
                ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses.png"))
        ),
        new ImageStickerConfig(
                "your_uniq_ID-8",
                "External VectorDrawable", 
                ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-vector.xml")), 
                ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-vector.xml"))
        ),
        new ImageStickerConfig(
                "your_uniq_ID-9",
                "My File", 
                ImageSource.create(Uri.fromFile(myPreviewFile)), 
                ImageSource.create(Uri.fromFile(myFile))
        )
    )
);
```

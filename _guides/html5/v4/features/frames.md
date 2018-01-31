---
layout: guides/content
title: &title Frames # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 provides a quick and easy way for adding frames to any creative. Learn how to add custom frame assets to the library.
menuitem: *title
order: 6
platform: html5
version: v4
category:
  - guide
  - feature
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

Good frames might not save bad paintings, however they may very well complete and enhance good photography. The PhotoEditor SDK includes a versatile frame tool that works with any given photo size or ratio. For the flexible frames tool that works perfectly for creatives with repeatable or stretchable areas, we abandoned the 9-patch standard and replaced it with a novel and even more flexible 12-patch layout.

## Adding custom frames

Frames consist of four groups. Each group has a start, middle and an end image. The start and end images are optional and for the middle image there are two modes, `repeat` and `stretch`, the latter being the default. These modes determine whether the asset should be stretched over the area, or if it should be repeated to fill up space. Please note that in `repeat` mode, assets are never cut off, but rather squeezed or stretched a bit, to fit in only complete copies of the asset.
The four groups can be laid out in two layouts: `horizontal-inside` or `vertical-inside`. See the following images for clarification:

![frame inside]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/frame_inside.png){: height="150px" .center-image }

The idea behind the naming is, that if you imagine a box that covers the right and left groups and the top and bottom groups surrounding it,
the horizontal box is inside the groups, as illustrated by the following image,

![frame horizontal]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/horizontalFrame.png){: height="150px" .center-image }

Let's have a look at a real world example.

![dia sample]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/dia_sample.png){: height="300px" .center-image }

The layout mode is horizontal inside. The top and bottom group just have a middle image, containing the film strip pattern.
The left and right group consist of a stretched border texture, and a start and end image to create a nice transition between the two sides of the film strip.

The code to create such a frame and pass it to the editor looks like this:

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    frame: {
      frames: [
        {
          identifier: 'dia',
          defaultName: 'Dia',
          layoutMode: 'horizontal-inside',
          thumbnail: 'frames/dia/icon.png',
          imageGroups: {
            top: {
              mid: {
                image: 'frames/dia/dia_top.png',
                mode: 'repeat'
              }
            },
            left: {
              start: 'frames/dia/dia_top_left.png',
              mid: 'frames/dia/dia_left.png',
              end: 'frames/dia/dia_bottom_left.png'
            },
            right: {
              start: 'frames/dia/dia_top_right.png',
              mid: 'frames/dia/dia_right.png',
              end: 'frames/dia/dia_bottom_right.png'
            },
            bottom: {
              mid: {
                image: 'frames/dia/dia_bottom.png',
                mode: 'repeat'
              }
            }
          }
        }
      ],
      replaceFrames: false, // Specifies whether `frames` should replace all existing frames
      availableFrames: ['dia'] // Only enables our new frame. Leave this out to enable all frames.
    }
  }
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    frame: {
      frames: [
        {
          identifier: 'dia',
          defaultName: 'Dia',
          layoutMode: 'horizontal-inside',
          thumbnail: 'frames/dia/icon.png',
          imageGroups: {
            top: {
              mid: {
                image: 'frames/dia/dia_top.png',
                mode: 'repeat'
              }
            },
            left: {
              start: 'frames/dia/dia_top_left.png',
              mid: 'frames/dia/dia_left.png',
              end: 'frames/dia/dia_bottom_left.png'
            },
            right: {
              start: 'frames/dia/dia_top_right.png',
              mid: 'frames/dia/dia_right.png',
              end: 'frames/dia/dia_bottom_right.png'
            },
            bottom: {
              mid: {
                image: 'frames/dia/dia_bottom.png',
                mode: 'repeat'
              }
            }
          }
        }
      ],
      replaceFrames: false, // Specifies whether `frames` should replace all existing frames
      availableFrames: ['dia'] // Only enables our new frame. Leave this out to enable all frames.
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
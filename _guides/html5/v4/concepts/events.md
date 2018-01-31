---
layout: guides/content
title: &title Events
description: Understanding how users engage with a product is critical to every business. Learn how to track your user's interactions with the PhotoEditor SDK for HTML5.

menuitem: *title
order: 0
platform: html5
version: v4
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The UI emits events that let you know what happens inside the editor. Most users use these events
for monitoring and analytics. You can listen to them by calling the UI's `on` method:


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI(/* ... */)
editor.on('export', (result) => {
  console.log('User clicked export, resulting image / dataurl:')
  console.log(result)
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
const editor = new PhotoEditorSDK.UI.ReactUI(/* ... */)
editor.on('export', (result) => {
  console.log('User clicked export, resulting image / dataurl:')
  console.log(result)
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

See the [documentation](https://docs.photoeditorsdk.com/apidocs/html5/v4/PhotoEditorSDK.UI.DesktopUI.html#$subsection:events) for available UI events.

Some people use the `export` event to find out which operations the user has applied to the image:


{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI(/* ... */)
editor.on('export', (result, editor) => {
  // User has clicked export, find out what operations he used
  const stack = editor.getOperationsStack()
  console.log('User used operations:')
  stack.forEach((operation) => {
    console.log(operation.constructor.identifier)
  })
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
const editor = new PhotoEditorSDK.UI.ReactUI(/* ... */)
editor.on('export', (result, editor) => {
  // User has clicked export, find out what operations he used
  const stack = editor.getOperationsStack()
  console.log('User used operations:')
  stack.forEach((operation) => {
    console.log(operation.constructor.identifier)
  })
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Example output:

```text
User used operations:
orientation
crop
filter
border
sprite
```

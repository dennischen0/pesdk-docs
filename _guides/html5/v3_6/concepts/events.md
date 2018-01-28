---
layout: guides/content
title: &title Events
description: Understanding how users engage with a product is critical to every business. Learn how to track your user's interactions with the PhotoEditor SDK for HTML5.

menuitem: *title
order: 0
platform: html5
version: v3_6
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The UI emits events that let you know what happens inside the editor. Most users use these events
for monitoring and analytics. You can listen to them by calling the UI's `on` method:

```js
const editor = new PhotoEditorSDK.UI.ReactUI(/* ... */)
editor.on('export', (result) => {
  console.log('User clicked export, resulting image / dataurl:')
  console.log(result)
})
```

See the [documentation](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.UI.ReactUI.html#$subsection:events) for available UI events.

Some people use the `export` event to find out which operations the user has applied to the image:

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

Example output:

```text
User used operations:
orientation
crop
filter
border
sprite
```

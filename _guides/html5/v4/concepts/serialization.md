---
layout: guides/content
title: &title Serialization # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 provides an option for serialization and deserialization, allowing your users to save and revise their work anytime.
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

{% include html5_ui_badge.html react=true desktop=true %}

Since version 3.4.2, PhotoEditorSDK's Editor UI supports serialization and deserialization of
application states. This means that you can export the current state of the editor and import
it later on.

The serialization schema is specified
[here]({{ site.baseurl }}/assets/downloads/serialization/schema-3.0.0.json){: download="schema-3.0.0.json" }.

## Serialization

In order to serialize the editor state, simply call `serialize()` on the Editor instance:

```js
editor.serialize({ image: true })
  .then((state) => {
    console.log('Editor state:', state)
  })
```

This will serialize the editor state and write the result to the console.

The `image` option specifies whether or not the input image should be serialized as well. Enabling
this (which is the default) will highly increase the size of the resulting object.

## Deserialization

In order to deserialize / load an editor state, simply call `deserialize()` on the Editor instance
and pass the editor state object:

```js
editor.deserialize(state)
  .then(() => {
    console.log('Restored state!')
  })
```

This will restore the editor state.

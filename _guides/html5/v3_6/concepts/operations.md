---
layout: guides/content
title: &title Custom Operations
description: Learn how to add custom image modifications to the rendering process of the PhotoEditor SDK for HTML5 by extending the operation class.

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
## Adding Custom Operations

Per default, the SDK just renders the plain image. To modify the rendered image you need to add
"operations" to it. There are [a bunch of operations](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Operations.html)
that you can use.

Operations can be configured by passing an options hash to them. Let's create a [`FilterOperation`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Operations.FilterOperation.html)
and pass the [`FridgeFilter`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Filters.FridgeFilter.html) to it.

```js
const sdk = /* ... (see previous section) */
const filterOperation = new PhotoEditorSDK.Operations.FilterOperation(sdk, {
  filter: new PhotoEditorSDK.Filters.FridgeFilter()
})
sdk.addOperation(filterOperation)
sdk.render()
```

The canvas should now display your image with a filter on it.

The available options of each operation are documented in our [API Documentation](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Operations.html).
We also created [a lot of beautiful filters]([API Documentation: PhotoEditorSDK.Filters](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Filters.html) that you can use.


## Extending operations

By extending the [`Operation class`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Operation.html)
you can add custom image modifications to the SDK.

## Rendering workflow

The SDK draws the image to the output canvas by rendering a [`Sprite`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Engine.Sprite.html)
instance. Before that, it applies all existing operations to that sprite.

An operation has an internal sprite which it uses to render the modified image to an internal
texture. This texture is then added to the output sprite so that the SDK can render the resulting
image to the output.

## Implementation

The Operation class implements two protected methods that handle the rendering: `_renderWebGL`, which
is called whenever the operation is applied using the [`WebGLRenderer`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Engine.WebGLRenderer.html),
and `_renderCanvas` which is called when it's applied using the [`CanvasRenderer`](https://docs.photoeditorsdk.com/apidocs/html5/v3_6/PhotoEditorSDK.Engine.CanvasRenderer.html).
If those two methods are doing the same, you can just override the generic `_render` method.

Let's create a `FlipOperation` which flips the image on the X axis.


```js
class FlipOperation extends PhotoEditorSDK.Operation {
  /**
   * Renders this operation
   */
  _render (inputTexture) {
    // Flip the sprite on the X-axis
    this._sprite.setScale(-1, 1)

    // Make sure we flip around the center
    this._sprite.setAnchor(0.5, 0.5)
    this._sprite.setPosition(renderTexture.getWidth() / 2, renderTexture.getHeight() / 2)

    // Render the flipped image to the render texture
    renderTexture.render(this._container)

    // Let the SDK render the flipped image (or let the next
    // operation use the flipped image as input). You can't
    // render Sprite instances directly, so we're gonna use
    // the container instead.
    outputSprite.setTexture(renderTexture)

    // Since we're not doing anything asynchronous, let's just
    // return an already resolved Promise
    return Promise.resolve()
  }
}

/**
 * A unique string that identifies this operation
 */
FlipOperation.identifier = 'flip'
```

Now you can instantiate and add the operation as mentioned above. ("Adding operations")

## Adding options

To make your operation configurable, you can add an `availableOptions` object:

```js
FlipOperation.prototype.availableOptions = {
  flipHorizontally: { type: PhotoEditorSDK.OptionTypes.BOOLEAN, default: false },
  flipVertically: { type: PhotoEditorSDK.OptionTypes.BOOLEAN, default: false }
}
```

You can now access the options using `this._options`:

```js
tempSprite.setScale(
  this._options.flipHorizontally ? -1 : 1,
  this._options.flipVertically ? -1 : 1
)
```

This also adds the `getFlipHorizontally()/setFlipHorizontally()` and `getFlipVertically()/setFlipVertically()`
methods to your operation.

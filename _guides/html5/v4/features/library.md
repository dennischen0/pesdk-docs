---
layout: guides/content
title: &title Library # title as shown in the menu and

menuitem: *title
order: 4
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


With our library control, users can upload their own pictures, take photo with their webcam or pick from one of our selected photos. As a developer, you can also make use of our API to provide your own set of photos that the user can pick from.

# Specifying a custom library provider

## Building your own provider

The Provider class is the data manager for our library feature. Extend this class in order to load data from an external source or provide a fixed set of images. Your custom provider needs to implement two categories: `getCategories` and `searchImages(query)` which will be invoked by our UI. Please note that these methods are asynchronous and must return a Promise.

```js
const { Provider, Category, Image } = PhotoEditorSDK.UI.DesktopUI.Library
class MyProvider extends Provider {
  constructor (...args) {
    super(...args)

    // Our cache object
    this._data = null
  }

  /**
   * This is a method explicitly created for this provider. It makes sure our data
   * JSON has been loaded from the server.
   * @return {Promise}
   * @private
   */
  _loadData () {
    if (this._data) { return Promise.resolve(this._data) }

    return this._loadJSON('http://d3czpaw5gb5xgh.cloudfront.net/v4/unsplash.json')
      .then(function (data) {
        this._data = data
        return data
      })
  }

  /**
   * Returns the categories
   * @return {Promise}
   * @resolve {PhotoEditorSDK.UI.DesktopUI.Library.Category[]}
   * @abstract
   */
  getCategories () {
    return this._loadData()
      .then(data => {
        // Create `Category` instances from our data
        return data.categories.map(({ name, coverImage }) =>
          new Category({
            name, coverImage
          })
        )
      })
  }

  /**
   * Returns the images for the given search query
   * @param {String} query
   * @return {Promise}
   * @resolve {PhotoEditorSDK.UI.DesktopUI.Library.Image[]}
   * @abstract
   */
  searchImages (query) {
    return this._loadData()
      .then(data => {
        return data.images.filter(image => {
          // Split query by spaces, make sure all words are present in image title
          var words = query.split(/\s+/)
          for (var i = 0; i < words.length; i++) {
            var word = words[i]
            var regexp = new RegExp(word, 'i')
            if (!regexp.test(image.title)) {
              return false
            }
          }

          return true
        }).map(imageData => {
          return new Image(imageData)
        })
      })
  }
}
```

The `Category` class takes two options: `name` of type `string` and `coverImage` of type `string`.

The `Image` class takes 7 options, of which two are mandatory: `category` that should point to the corresponding `Category` instance and `rawUrl` that should point to the full-sized image. Additional options are: `title`, `thumbUrl`, `authorName` and `authorAvatar` (all of type `string`).

## Passing the provider to the control

In order to make the UI use your provider, simply pass it as the `provider` option to the `library` control:

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    library: {
      provider: MyProvider
    }
  }
})
```

# Disabling the webcam / upload

By default, your users are able to take photos using their webcam or upload their own photos using a file picker. In order to disable these features, simply set the `enableWebcam` or the `enableUpload` (which also includes the webcam) to `false`.

```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  controlsOptions: {
    library: {
      enableWebcam: false, // Disables the webcam
      enableUpload: false // Disables the upload AND the webcam
    }
  }
})
```

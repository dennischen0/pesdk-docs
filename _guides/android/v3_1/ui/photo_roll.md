---
layout: guides/android/v3_1/content
title: &title Photo Roll # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - ui
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Photo Roll

Since version `3.4.0`, our Editor provides a Photo Roll screen the user can pick photos from.
The photos shown in the Photo Roll can be controlled using a `Provider`. The Provider implements a
couple of methods that the Editor will call in order to display Libraries, Suggested
Search Queries and Photos.

You can make the editor use the Provider by passing it via the `photoRoll.provider` option:

```js
  const editor = new PhotoEditorSDK.UI.ReactUI({
    photoRoll: {
      provider: UnsplashProvider
    }
  })
```

## getLibraries()

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library`
instances. Here is an example that returns one library called `Photos` and a cover image:

```js
const { PhotoRoll } = PhotoEditorSDK.UI.ReactUI
class UnsplashProvider extends PhotoRoll {
  /**
   * Returns the libraries
   * @return {Promise}
   */
  getLibraries () {
    return Promise.resolve([
      new ReactUI.PhotoRoll.Library({
        name: 'Photos',
        coverImage: 'http://static.photoeditorsdk.com/unsplash/thumb/ZsB2MbzSHjI.jpg'
      })
    ])
  }
}
```

The library will now be presented to the user like this:

<%=md_image("/assets/images/documentation/android/photoroll-library.png") %>

## getPhotosForLibrary(library)

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo`
instances. This method can either access a remote server that responds with JSON, parse the JSON and
display images from a remote source, or just return a fixed number of images, like in this example:

```js
const { PhotoRoll } = PhotoEditorSDK.UI.ReactUI
class UnsplashProvider extends PhotoRoll {
  /**
   * Returns the photos for the given library
   * @param {PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library} library
   * @return {Promise}
   * @abstract
   */
  getPhotosForLibrary (library) {
    if (library.name === 'Photos') {
      return Promise.resolve([
        new ReactUI.PhotoRoll.Photo(library, {
          title: 'Mmmmh, delicious fries',
          urls: {
            raw: 'http://static.photoeditorsdk.com/unsplash/raw/ZsB2MbzSHjI.jpg',
            thumb: 'http://static.photoeditorsdk.com/unsplash/thumb/ZsB2MbzSHjI.jpg'
          }
        })
      ])
    }
  }
}
```

The photo will now be presented to the user like this:

<%=md_image("/assets/images/documentation/android/photoroll-photo.png") %>

## getSearchSuggestions()

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.SearchSuggestion`
instances. Here is an example that returns one search suggestion with the search term `Nature`:

```js
const { PhotoRoll } = PhotoEditorSDK.UI.ReactUI
class UnsplashProvider extends PhotoRoll {
  /**
   * Returns the search suggestions
   * @return {Promise}
   */
  getSearchSuggestions () {
    return Promise.resolve([
      new ReactUI.PhotoRoll.Library({
        query: 'Nature',
        coverImage: 'http://static.photoeditorsdk.com/unsplash/thumb/Z_br8TOcCpE.jpg'
      })
    ])
  }
}
```

The search suggestion will now be presented to the user like this:

<%=md_image("/assets/images/documentation/android/photoroll-searchsuggestion.png") %>

Clicking the search suggestion will result in the search input field being pre-filled with the search
term (`Nature`), which will trigger a search.

## searchPhotos(query)

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo`
instances. Here is an example that calls `getPhotosForLibrary(null)`, which will return an array of Photos.
It will then filter the results and return only the results that contain at least one of the search terms:

```js
const { PhotoRoll } = PhotoEditorSDK.UI.ReactUI
class UnsplashProvider extends PhotoRoll {
  /**
   * Searches for photos with the given query
   * @param {String} query
   * @return {Promise}
   */
  searchPhotos (query) {
    const words = query.toLowerCase().split(/\s+/i)
    return this.getPhotosForLibrary(null)
      .then((photos) => {
        return photos.filter((photo) => {
          const title = photo.title.toLowerCase()
          return words.some((word) => title.indexOf(word) !== -1)
        })
      })
  }
}
```

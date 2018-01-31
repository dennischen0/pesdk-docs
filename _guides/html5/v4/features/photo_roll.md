---
layout: guides/content
title: &title Photo Roll # title as shown in the menu and
description: The PhotoEditor SDK provides a photo roll that your users can pick and edit photos and creatives from. Learn how to swiftly set your own photo library.
menuitem: *title
order: 8
platform: html5
version: v4
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The PhotoEditor SDK comes with a photo roll equipped with a wide range of stock photographies and templates that are presorted in categories. On top of that, the API of the SDK enables you to rearrange the creatives, exchange, reduce or expand the library and provide your users with the most appropriate set of assets for your use-case.


Since version `3.4.0`, our HTML5 editor provides a Photo Roll screen the user can pick photos from.
The photos shown in the Photo Roll can be controlled using a `Provider`. The Provider implements a
couple of methods that the Editor will call in order to display Libraries, Suggested
Search Queries and Photos.

You can make the editor use the Provider by passing it via the `photoRoll.provider` option:

{% capture second_snippet %}
ReactUI
---
```js
  const editor = new PhotoEditorSDK.UI.ReactUI({
    photoRoll: {
      provider: UnsplashProvider
    }
  })
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## getLibraries()

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.Library`
instances. Here is an example that returns one library called `Photos` and a cover image:

{% capture second_snippet %}
ReactUI
---
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
{% endcapture %}

{% assign snippets = "" | split: "" | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The library will now be presented to the user like this:
![Photoroll Library]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/photoroll-library.png){: .center-image style="padding: 20px; max-height: 400px;"}
## getPhotosForLibrary(library)

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo`
instances. This method can either access a remote server that responds with JSON, parse the JSON and
display images from a remote source, or just return a fixed number of images, like in this example:

{% capture second_snippet %}
ReactUI
---
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
{% endcapture %}

{% assign snippets = "" | split: "" | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The photo will now be presented to the user like this:

![Photoroll Photo]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/photoroll-photo.png){: .center-image style="padding: 20px; max-height: 400px;"}

## getSearchSuggestions()

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.SearchSuggestion`
instances. Here is an example that returns one search suggestion with the search term `Nature`:

{% capture second_snippet %}
ReactUI
---
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
{% endcapture %}

{% assign snippets = "" | split: "" | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-04{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The search suggestion will now be presented to the user like this:

![Photoroll Searchsuggestion]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/photoroll-searchsuggestion.png){: .center-image style="padding: 20px; max-height: 400px;"}


Clicking the search suggestion will result in the search input field being pre-filled with the search
term (`Nature`), which will trigger a search.

## searchPhotos(query)

This method returns a Promise that should be resolved with an Array of `PhotoEditorSDK.UI.ReactUI.PhotoRoll.Photo`
instances. Here is an example that calls `getPhotosForLibrary(null)`, which will return an array of Photos.
It will then filter the results and return only the results that contain at least one of the search terms:

{% capture second_snippet %}
ReactUI
---
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
{% endcapture %}

{% assign snippets = "" | split: "" | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-05{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

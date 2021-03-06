---
layout: quickstarts/content
title: &title Cordova # title as shown in the menu and
description: Learn how to get started with the PhotoEditor SDK and Cordova and how to swiftly integrate the SDK into a Cordova application with this Quick Start.
menuitem: *title
order: 2
category:
  - quickstart
tags: &tags # tags that are necessary
  - photo editor
  - html5
published: true
---

![Logo]({{ site.baseurl }}/assets/images/quickstarts/cordova/logo.png){: height="150px" .center-image}

# Getting Started with Cordova

We created a [demo repository](https://github.com/imgly/pesdk-cordova-demo) to show you how to easily easily integrate the PhotoEditor SDK into your Cordova application. Make sure to check out our [accompanying blog post](https://blog.photoeditorsdk.com/photoeditor-sdk-cordova-dabe146e6c13) as well.

> **WARNING:** The repository is not meant as a fully fledged Cordova plugin, but as a base for further development instead.

You can copy the repository into your own project and use the `cordova plugin add /path/to/plugin --link` command to add it to your app. You will most likely need to adjust the codebase to fit your requirements and to customize the PhotoEditor SDK. For customizations, take a look at the [PESDKPlugin.m](https://github.com/imgly/pesdk-cordova-demo/blob/master/src/ios/PESDKPlugin.m) and [PESDKPlugin.java](https://github.com/imgly/pesdk-cordova-demo/blob/master/src/android/PESDKPlugin.java) files and the corresponding documentation for [iOS]({{ site.baseurl }}/guides/ios/latest/introduction/configuration) and [Android]({{ site.baseurl }}/guides/android/latest/introduction/configuration). You can easily alter the configurations to change colors, behaviour etc. and handle callbacks that are sent by our SDK.

## License Files

> **WARNING**: The SDK requires dedicated license files for each platform. If unavailable, the camera and editor will crash upon launch.

You need to add the LICENSE_IOS and LICENSE_ANDROID files to each project. This can be done manually by opening the PESDKDemo.xcworkspace using Xcode and dragging the license file into the sidebar, as well as copying the license file to the /platforms/android/app/main/assets folder for Android. 

Or automated by using Cordovas `resource-file` tags to link the files from the root directory. To do so, put your `LICENSE_ANDROID` and `LICENSE_IOS` files in the root folder of your project and then add the following lines to your `config.xml`:

Within the Android platform tag (supported starting `cordova-android-7.0`):
```xml
<platform name="android">
  <resource-file src="LICENSE_ANDROID" target="app/src/main/assets/LICENSE_ANDROID" />
</platform>
```

Within the iOS platform tag:
```xml
<platform name="ios">
  <resource-file src="LICENSE_IOS" />
</platform>
```

> **WARNING**: You need to make sure that the app identifiers declared in your license files match the bundle/app identifiers used on iOS and Android.

## Example App
The included example app demonstrates how to open the PhotoEditor SDK's camera and pass any taken or selected images to the editor. When an edited image is saved, its filepath is sent back to Cordova and displayed using a JavaScript alert. An app could then display this image in Cordova or send it to a backend. To open an existing image instead, you can pass a filepath to the `present` method, but will need to handle the different ways both platforms manage filepaths. To launch the example app, take a look at the *Development* section below.

## Installation
In order to use the plugin within your Cordova app you need to follow some steps, detailed in the following paragraphs.

### iOS Configuration
The plugin adds the `NSCameraUsageDescription` and `NSPhotoLibraryUsageDescription` keys to your iOS apps `Info.plist` file. These are required as of iOS 10 and not setting them will cause your app to crash.
You can customize these messages to match your use case in the [plugin.xml](https://github.com/imgly/pesdk-cordova-demo/blob/master/plugin.xml) file:

```
    <config-file target="*-Info.plist" parent="NSCameraUsageDescription">
      <string># YOUR TEXT HERE #</string>
    </config-file>
    <config-file target="*-Info.plist" parent="NSPhotoLibraryUsageDescription">
      <string># YOUR TEXT HERE #</string>
    </config-file>
```

### Android Configuration
No special configuration is needed for Android. Just require the plugin.

## Development
The example app was created by starting a new Cordova app, adding the iOS and Android platforms and linking the plugin using the `cordova plugin add /path/to/plugin --link` command mentioned above.

To run the Android and iOS samples you can then simply execute `cordova run android` or `cordova run ios` from the `example` subfolder.

If you make changes to the plugin in the root directory, you'll likely have to remove and add the plugin to your example project again to make sure the updated source code is used.

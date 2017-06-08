---
layout: quickstarts/content
title: &title Cordova # title as shown in the menu and 

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

We created a [demo repository](https://github.com/imgly/pesdk-cordova-demo) to show you how to easily easily integrate the [PhotoEditor SDK into your Cordova application.

> **WARNING:** The repository is not meant as a fully fledged Cordova plugin, but as a base for further development instead.
 
You can copy the repository into your own project and use the `cordova plugin add /path/to/plugin --link` command to add it to your app. You will most likely need to adjust the codebase to fit your requirements and to customize the PhotoEditor SDK. For customizations, take a look at the [PESDKPlugin.m](https://github.com/imgly/pesdk-cordova-demo/blob/master/src/ios/PESDKPlugin.m) and [PESDKPlugin.java](https://github.com/imgly/pesdk-cordova-demo/blob/master/src/android/PESDKPlugin.java) files and the corresponding documentation for [iOS]({{ site.baseurl }}/guides/ios/v7_1/introduction/configuration) and [Android]({{ site.baseurl }}/guides/android/v3_1/introduction/configuration). You can easily alter the configurations to change colors, behaviour etc. and handle callbacks that are sent by our SDK.

## Example App
The included example app demonstrates how to open the PhotoEditor SDK's camera and pass any taken or selected images to the editor. When an edited image is saved, its filepath is sent back to Cordova and displayed using a JavaScript alert. An app could then display this image in Cordova or send it to a backend. To launch the example app, take a look at the *Development* section below.

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

To run the example app that comes with this repository you need to execute the following commands from the root folder:
```
$ make
$ cp example/LICENSE_ANDROID example/platforms/android/assets
```
These add the iOS and Android platforms to the example app, install the `pesdk` plugin from the current directory and finally add the required license for the PhotoEditor SDK to the Android application.

Furthermore you need to add the `LICENSE_IOS` file to the Xcode project by opening _PESDKDemo.xcworkspace_ using Xcode and dragging the license file into the sidebar.

To run the Android and iOS samples you can then simply execute `cordova run android` or `cordova run ios` from the `example` subfolder. If the Android app crashes upon launch you most likely forgot the `cp LICENSE_ANDROID...` command mentioned above.

After you change source code in the native Android/Xcode IDE, make sure to **commit your changes back to the root folder** or you might overwrite your work! The `make` commands link the plugin folder into your project and the repository is configured to ignore the corresponding platform and plugin folders within the example app.

### Android
Run `make clean android` to create a test APK file. You can open `example/platforms/android` directly with Android Studio.
### iOS
Run `make clean ios` and a test project is built. It will build an xcode project in `example/platforms/ios`.

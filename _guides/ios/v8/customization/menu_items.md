---
published: true # Either published or not
layout: guides/content
title: &title Menu Items # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v8
category:
  - guide
  - customization
description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

tags: &tags # tags that are necessary
  - photo editor
---


`PhotoEditViewController` has a constructor which takes an array of `PhotoEditMenuItem`s.

`PhotoEditMenuItem` is an enum with two possible cases.
1. `case tool(ToolMenuItem)` represents a tool that can be pushed onto the stack. It has a `ToolMenuItem` as an associated value, which has a title, an icon and the class of the tool that should be instantiated.
2. `case action(ActionMenuItem)` represents an action that should be executed when this menu item is selected. It has an `ActionMenuItem` as an associated value, which has a title, an icon, the closure that should be executed and which can update the current photo edit model, and a state closure that is used to query the active state of the action.

The `.tool` case can be used to present any subclass of `PhotoEditToolController`, making it easier to add your very own custom tool controllers to the SDK.
Here is the code for the current default set of menu items:

```swift
/// Creates the default menu items (transform, filter, adjust, sticker, text, overlay, frame,
/// brush, focus and auto enhancement)
public static var defaultItems: [PhotoEditMenuItem] {
  let menuItems: [MenuItem?] = [
    ToolMenuItem.createTransformToolItem(),
    ToolMenuItem.createFilterToolItem(),
    ToolMenuItem.createAdjustToolItem(),
    ToolMenuItem.createStickerToolItem(),
    ToolMenuItem.createTextToolItem(),
    ToolMenuItem.createOverlayToolItem(),
    ToolMenuItem.createFrameToolItem(),
    ToolMenuItem.createBrushToolItem(),
    ToolMenuItem.createFocusToolItem(),
    ActionMenuItem.createMagicItem()
  ]

  let photoEditMenuItems: [PhotoEditMenuItem] = menuItems.flatMap { menuItem in
    switch menuItem {
    case let menuItem as ToolMenuItem:
      return .tool(menuItem)
    case let menuItem as ActionMenuItem:
      return .action(menuItem)
    default:
      return nil
    }
  }

  return photoEditMenuItems
}
```

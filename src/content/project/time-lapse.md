---
title: "⌛️ Time-Lapse"
description: "Create time-lapses on MacOS without exuberant memory use"
repository: "https://github.com/wkaisertexas/timelapse"
builtWith: ["python", "opencv"]
display: true
---

# Context and scope

Timelapse is a iOS and MacOS application for creating screen and camera time-lapsed videos built off a slower-than-realtime ScreenCaptureKit Recording Engine.

# Goals and non-goals

Color accurate, slower-than realtime recording without any editing, post-processing or composition tool.

# Design

Both the Menu-bar MacOS app and iOS app are simple which only allows screen and application selection or camera selection. In configuration, both the frame rate and speed multiple can be selected.

# APIs

Standard Model, View, View-Model setup.

# Data Storage

All data is stored locally in a user-specified directory. No synced configuration is stored.

# Code / Pseudo Code

```swift
func handleFrame(frame){
  if(frame.timestamp < previousStoredFrameTimeStamp + 1. / FrameRate){
    return
  }

  saveFrame(frame);
}
```

# Degree of Constraints

Both system specifications and software limit the use of applications. [ScreenCaptureKit](https://developer.apple.com/documentation/screencapturekit/) limits the frame rate and resolution of recordings. Memory and compute requirements practically limit to pre-defined frame rates.

# Alternatives Considered

Recording alternate frames using Python and OpenCV was initially built as a proof of concept. Limitations to recordings granularity and large bundle sizes lead to a native application built in Swift.

# Cross-cutting concerns

Time lapse projects with unknown duration require upfront flexibility in storage and frame rates.

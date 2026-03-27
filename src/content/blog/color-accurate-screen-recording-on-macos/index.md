---
title: "Creating Color Accurate MacOS Screen Recordings with AVFoundation and ScreenCaptureKit"
description: "How to avoid pulling your hair out when creating color accurate recordings"
pubDate: "Feb 28 2023"
heroImage: "hero.png"
display: false
---

Recently, I built the MacOS menu bar app: [ScreenTimeLapse](https://github.com/wkaisertexas/ScreenTimeLapse). The concept is simple: record your screen slower than real time to create a time lapse. However, an insidious problem plagued the development process: color accuracy. A simple side project turned into a deep dive into the world of color spaces and color management.

## The Problem

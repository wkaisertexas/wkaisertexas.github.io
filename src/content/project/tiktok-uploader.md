---
title: "⬆️ TikTok Uploader"
description: "A selenium bot to automatically upload videos to TikTok"
repository: "https://github.com/wkaisertexas/tiktok-uploader"
builtWith: ["python", "selenium"]
display: true
---

# Context and scope

Desktop and graphical user interfaces (GUIs) are often wrapper to command-line tools. Especially Linux developments, the ability to effectively interface with other programs through the shell.

In December 2022, I began gaining interest in the video encoding and editing tool `ffmpeg`. At the same time, algorithmic content (split-screen subway surfers, am i the asshole (AITA), etc.) was taking over TikTok.

I create a basic script to turn C-Span testimony into a many split-screen subway surfers-style content (I am a big C-Span fan). After rendering hundreds of videos, uploading videos everyday was the most painstaking. To circumvent this, I built a proof-of-concept command line application. Taking _Rich Nguyen_'s [Software Development Essentials](https://uva-cs3140-sp23.github.io) at the time. I decided to take the opportunity to try and develop the script into a higher-quality module.

No real public modules existed for this purpose, so I decided to build one. Most of all, I think publishing this and going through three iterations was mostly an exercise of the challenges to writing good documentation.

# Goals and non-goals

Learning about Selenium and how to publish and maintain open-source software is the goal. While using a Selenium-controlled browser could be argued to be overkill, experience with the technology-particularly how it applies to end-to-end integration testing -- is something with which I wanted to gain personal experience.

# Design

# APIs

The python module is designed with two entry points:

- `upload_video` for uploading single videos (also called by the command line interface)
- `upload_videos` is called and has multiple uploads

To manage browser configurations, `browsers.py` allows a `selenium.webdriver` object ot be created with custom:

- driver
- options
- services

Because running multiple accounts with a custom login flow was planned, `auth.AuthBackend` was built to support either: **cookie** or **username** and **password** authenticator.

Uploading a video consists of 5 sequential steps:

- `_go_to_upload`
- `_set_video`
- `_set_interactivity`
- `_set_description`
- `_post_video`

Both logging and configuration are singletons in `__init__.py` and `config.toml` contains all XPath selectors.

# Data Storage

No persistent data storage is necessary for this project.

# Code / Pseudo Code

```python
go_to_homepage()
set_authentication_cookies()
upload_video()
set_video_metadata()
click_upload_button()
```

# Degree of Constraints

A direct-posting REST API would eliminate teh need for `tiktok-uploader` all-together. Furthermore, the now-available schedule post feature would have probably never even lead me to create a library at all.

# Alternatives Considered

A system built off-of the `requests` python module was considered. My desire to learn about Selenium, module design and module communication lead to this not being the right personal decision.

# Cross-cutting concerns

Platform changes to _TikTok_ are extremely likely to break the automation. Furthermore, language and localization difference (in the _European Union_ _TikTok_ will block the page before accepting cookies).

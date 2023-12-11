---
title: "Automate TikTok posting with a single Command"
description: "TikTok is one of the most popular social media platforms today, with millions of users sharing short videos daily. Posting content regularly is key to growing your following and increasing engagement. However, constantly uploading videos can be time-consuming and tedious. That’s where **TikTok-Uploader** comes in handy. It’s a Python package that uses Selenium browser automation to post TikTok videos automatically using either a simple API or a CLI command."
pubDate: "Feb 24 2023"
heroImage: "hero.png"
display: true
---

TikTok is one of the most popular social media platforms today, with millions of users sharing short videos daily. Posting content regularly is key to growing your following and increasing engagement. However, constantly uploading videos can be time-consuming and tedious. That’s where **TikTok-Uploader** comes in handy. It’s a Python package that uses Selenium browser automation to post TikTok videos automatically using either a simple API or a CLI command.

## Using the TikTok-Uploader

TikTok-Uploader API is easy to use, even for beginners. To use the API, you first need to install the package using **pip**:

```bash
$ pip install tiktok-uploader
```

After installation, you can import the package and create an instance of the **AuthBackend** class with your cookies login cookies.

```python
from tiktok_uploader.auth import AuthBackend

backend = AuthBackend(cookies="cookies.txt")
```

Login cookies can easily be downloaded using [Get cookies.txt](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid?hl=en), a simple extension available on Chrome, Firefox and Edge. After logging into the account you want to use use the extension to save the cookies.

> While the user is “logged in” every time when a Selenium browser instance is created, logging out will invalidate the existing cookies, breaking the automation

## Uploading a single video

Uploading a single video requires passing the path and description using the **upload** function.

```python
from tiktok_uploader.upload import upload_video

# single video
upload_video(
  path="path/to/your/video.mp4",
  description="my video description",
  cookies="cookies.txt", # directly passing cookies
  backend=auth
)
```

That’s it! TikTok-Uploader will automatically open a Chrome browser instance, log in to your TikTok account and upload your video.

## Uploading multiple videos sequentially

Sequential uploads avoid redundant sign ins. Consequently, uploading multiple videos sequentially is also much faster.

```python
from tiktok_uploader.auth import AuthBackend
from tiktok_uploader.upload import upload_videos

# multiple videos
videos = [
  {
    'path': 'video2.mp4',
    'description': 'first description'
  },
  {
    'path': 'video2.mp4',
    'description': 'second description'
  }
]

upload_videos(videos=videos, auth=auth)
```

## Using the CLI Command

If you prefer using the command line interface, **TikTok-Uploader** also provides a simple CLI command that you can use to upload your videos. First, install the package using pip, as described above. Then, open your terminal or command prompt and enter the following command:

```bash
tiktok-uploader \--video path/to/your/video.mp4 \--description "this is my video description" \--cookies cookies.txt
```

This will upload your video to your TikTok account using the same browser automation process as the API method.

## TikTok’s Share Video API

TikTok does have [Share Video API](https://developers.tiktok.com/doc/web-video-kit-with-web/) allow integrations to upload videos. However, these videos are only sent to user’s inboxes, rather than being posted directly.

> Share Video API allows users to share videos from your Web or Desktop app into TikTok. Videos will be sent into users’ inboxes where they can then be edited and published through the TikTok app.

TikTok clearly intended the Share Video API to be more for apps such as [CapCut](http://capcut.com/), rather than scheduled uploads.

## Conclusion

TikTok-Uploader is a useful tool for anyone looking to automate their TikTok video uploads. Whether you prefer using the simple API or the CLI command, this package makes the process easy and straightforward. So why waste time manually uploading videos when you can let TikTok-Uploader handle it for you? Give it a try and see how it can simplify your TikTok content creation process!

## Get it!

- ⬆️ [TikTok-Uploader on PyPI](https://pypi.org/project/tiktok-uploader/)
- ⬆️ [TikTok-Uploader on GitHub](http://github.com/wkaisertexas/tiktok-uploader)

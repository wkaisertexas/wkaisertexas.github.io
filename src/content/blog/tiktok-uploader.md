---
title: "Automate TikTok posting with a single command"
description: "TikTok is one of the most popular social media platforms, with millions of users. Posting content regularly is key to growing your following and increasing engagement. However, constantly uploading videos can be time-consuming. Use tiktok-uploader's simple API to upload videos automatically."
pubDate: "Feb 24 2023"
heroImage: "hero.png"
display: true
---

TikTok is one of the most popular social media platforms, with millions of users sharing short videos daily. Regularly posted content is key to growing your following and engagement. However, remembering to upload videos can be time-consuming. Using `tiktok-uploader`, the manual process of uploading videos can be automated with a single command.

## Using the TikTok-Uploader

To use the API, you first need to install the package using **pip**:

```bash
$ pip install tiktok-uploader
```

After installation, you can import the package and create an instance of the **AuthBackend** class with your cookies login cookies.

```python
from tiktok_uploader.auth import AuthBackend

backend = AuthBackend(cookies="cookies.txt")
```

Login cookies can be downloaded using [Get cookies.txt](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid?hl=en), an extension available on Chrome, Firefox and Edge. Use the extension to save TikTok's cookies on a singed-in account where you want to post.

> While the user is “logged in” every time when a Selenium browser instance is created, logging out of your browser will invalidate the existing cookies, breaking the automation

## Uploading a single video

Uploading a single video requires passing the `path` and `description` using the **upload** function.

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

That’s it! `tiktok-uploader` will automatically open a Chrome browser instance, log in to your TikTok and upload `video.mp4`

## Uploading multiple videos sequentially

Sequential video uploads avoids redundant sign ins and is much faster. To upload multiple videos, pass a list of dictionaries to the **upload_videos** function. Each dictionary should contain the `path` and `description` of the video.

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

If you prefer using the command line interface (CLI), `tiktok-uploader` also provides a simple CLI command that you can use to upload your videos. First, install the package using `pip``, as described above. Then, open your terminal and enter the following command:

```bash
tiktok-uploader -video path/to/your/video.mp4 -description "this is my video description" -cookies cookies.txt
```

## TikTok’s Share Video API

TikTok does have [Share Video API](https://developers.tiktok.com/doc/web-video-kit-with-web/) allow integrations to upload videos. However, these videos are only sent to user’s inboxes, rather than being posted directly.

> Share Video API allows users to share videos from your Web or Desktop app into TikTok. Videos will be sent into users’ inboxes where they can then be edited and published through the TikTok app.

TikTok clearly intended the Share Video API to be more for apps such as [CapCut](http://capcut.com/), rather than scheduled uploads.

## Conclusion

`tiktok-uploader` uses a browser automation to upload videos automatically to TikTok. The package is simple to use and can be integrated into python scripts or used from the command line. Sequential uploads are also supported and are much faster for large batches of videos.

## Get it!

- ⬆️ [TikTok-Uploader on PyPI](https://pypi.org/project/tiktok-uploader/)
- ⬆️ [TikTok-Uploader on GitHub](http://github.com/wkaisertexas/tiktok-uploader)

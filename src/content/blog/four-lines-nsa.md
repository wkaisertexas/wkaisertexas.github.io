---
title: "4 lines to make the NSA leak a screensaver"
description: "How I micro-dosed government secrets with a little bit of shell programming"
pubDate: "Feb 28 2023"
heroImage: "hero.png"
display: true
---

## Introduction

In 2013, Edward Snowden leaked classified documents about the National Security Agency’s surveillance activities. These documents contained sensitive information about the US government’s spying programs, and their disclosure created a media frenzy. As a result, many people wanted to download and read the documents for themselves. However, upon downloading the files from [Archive.org](https://archive.org/details/nsadocssnowden), they realized that they were a bunch of PDFs. This blog post will discuss how I used a simple bash script with *ImageMagick*’s software to convert the PDFs into images, which then became my screensaver.

![A screenshot of the leaked NSA files on Archive.org](../../blog/four-lines-nsa/download.png)

## Converting PDFs into Images

Converting PDFs into images may seem like a daunting task, but it’s relatively easy with the right software. *ImageMagick* is a free and open-source software suite that allows users to create, edit, and convert images. With *ImageMagick*, I was able to convert the Snowden leaks PDFs into images in just a few simple steps.

First, I downloaded and installed *ImageMagick* on my computer. Then, I created a new folder and placed all the PDFs in that folder. Next, I opened up the terminal and navigated to the directory where the PDFs were located. Finally, I entered the following command:

```bash
for leak in leakes/*.pdf; do
	echo "Converting $leak"
	convert -density 70 *.pdf ${leak%.}%3d.png
done
```

This command tells *ImageMagick* to convert all the PDFs in the folder to PNG images. It creates a separate PNG image for each page of each PDF.

## Screensaver

Once I had all the images, I decided to use them as my screensaver. I created a new folder and placed all the PNG images in that folder. Then, I went to my computer’s settings and selected the folder containing the images as my screensaver source.

Now, whenever my computer is idle, it displays a slideshow of the Snowden leaks documents. Not only is it an interesting screensaver, but it also serves as a reminder of the importance of protecting our privacy and the need for transparency in government activities.

## Conclusion

Downloading the Snowden leaks was a fascinating experience, but the PDF format made it difficult to view the documents. Thanks to *ImageMagick*, I was able to easily convert the PDFs into images, which I then used as my screensaver. This blog post has shown you how to use a bash script with *ImageMagick* to convert PDFs into images and how to set up those images as your screensaver.

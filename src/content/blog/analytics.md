---
title: "Track Everything. A minimalist data warehouse"
description: "Looker Studio as a personal tracking solution"
pubDate: "Aug 28 2023"
# heroImage: "/blog/chaos/hero.png"
display: false
---

Making content for the internet is wicked. Delayed, imperfect, noisy feedback operates in stark contrast to Chess and Go with clear feedback. Analytics are an invaluable tool to cut through this noise. Without being a large company however, setup, management and monitoring can become prohibitively difficult. 

Unless you fit neatly into blogger or youtuber, tracking growth is a mess. An article here, a tweet there leaves an opaque quasi-professional nightmare to analyze.

## Why tracking is not rationale

Scale is the most common reason for what is good for me and thee on the internet. [Bazel](https://bazel.build), Google's build tool, does not make sense for a personal project. Likewise - obsessive analytics is time better spent on creating more content. Just doing more is likely a better use of your time.

## Instant Feedback Hurts Our Performance

Harvard Business review published [Instant Feedback Hurts Our Performance](https://https://hbr.org/2019/07/instant-feedback-hurts-our-performance). Reporting on research by the University of Washington, drivers using a driving-score app similar to [Snapshot from Progressive](https://www.progressive.com/auto/discounts/snapshot/) were either given instant or delayed feedback. The data showed a 13 % worse driving score after drivers checked their app immediately.

Similar to how the difference between stepping on a scale once a week and once an hour marks the difference between a critical tool for weight loss and an addiction, feedback's timing is key. While a dose makes a poison, timing makes analytics useful. At too small a time-scale, feedback is noisey and non-representative. 

---

# Looker Studio

Looker Studio ( [formerly Google Data Studio](https://www.impressiondigital.com/blog/google-data-studio-renamed-as-looker-studio) ) is a data analytics engine similar to [Microsoft's Power BI](https://powerbi.microsoft.com/).

## Writing a Custom Connector

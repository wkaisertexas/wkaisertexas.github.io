---
title: "Track Everything. A minimalist data warehouse"
description: "Looker Studio as a personal tracking solution"
pubDate: "Aug 28 2023"
heroImage: "hero.png"
display: false
---

[Measure What Matters](https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221/ref=sr_1_1?keywords=measure+what+matters+by+john+doerr&qid=1692124836&sr=8-1) was 9th grade me's choice at a Berkley half-priced books was stopped on in a family trip. I have inadvertently selection a seminal piece on metrics by the legend: John Doerr.

While I like metrics, I hate black-boxes. Creating internet content, especially on multiple platforms can be a great black-box indeed.

Analytics are like tea - timings is important. Too cold metrics lack relevancy. However, too hot metrics can also be harmful. [Instant Feedback Hurts Our Performance](https://hbr.org/2019/07/instant-feedback-hurts-our-performance) by the _Harvard Business Review_ illuminates how instant metrics (the study used an app to give drivers a score) decreased driver's performance. Presumably, poorly-timed feedback could lead to unnecessary stress or resting on one's laurels.

## What I Want

A central impact report of my articles, projects and repositories emailed to me as a PDF weekly.

## Solution

Luckily, corporations struggled with metrics aggregation first. Tools like [Microsoft's PowerBI](https://powerbi.microsoft.com/en-us/), [IBM's Cognos Analytics](https://www.ibm.com/products/cognos-analytics), and, importantly, [Google Data Studio](https://datastudio.google.com).

Technically rebranded as [LookerStudio](https://www.impressiondigital.com/blog/google-data-studio-renamed-as-looker-studio) is Google's gift to you. Hoping you manage Google Analytics and Ads on the platform - Google gives it for free. Looker is an in-browser visualization tool that G-Suite natives will have no trouble picking up.

## Engulfing Data

Looker Studio represents data as an Excel-like tabular format. **[Connectors](https://lookerstudio.google.com/data)** as how data is imported into Looker Studio. Google Analytics, YouTube Analytics and Google Sheets Integration have pre-built connectors.

Connectors are written in JavaScript and run through [Apps Script](https://lookerstudio.google.com/data) (the predecessor to [Cloud Functions](https://cloud.google.com/functions)). [Connector Documentation](https://developers.google.com/looker-studio/connector/build) is mildly dated. These steps will chronicle my updated experience building a [GitHub API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28) connector.

## Project Creation

First, go to [Google Apps Script](https://www.google.com/script/start/), sign in with a Google account and create a project.

In the `Code.gs`, create a `cc` variable to represent the connector.

```javascript
let cc = DataStudioApp.createCommunityConnector();
```

## Setup / Configuration

A project's `getConfig` defines a connector's setup form.

```javascript
function getConfig() {
  var config = cc.getConfig();

  config
    .newInfo()
    .setId("instructions")
    .setText("Enter GitHub repositories to view informatics.");

  config
    .newTextInput()
    .setId("repository")
    .setName("Enter the repository or repositories you would like to track")
    .setHelpText('e.g. "facebook/react" or "google/angular"')
    .setPlaceholder("facebook/react")
    .setAllowOverride(true);

  return config.build();
}
```

## Data Structure Definition

Equivalent to defining columns in a spreadsheet, Looker Studio uses a `getFields` for data structure definition.

```javascript
function getFields() {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId("packageName")
    .setName("Name")
    .setType(types.TEXT);

  fields
    .newMetric()
    .setId("stars")
    .setName("Stars")
    .setType(types.NUMBER)
    .setAggregation(aggregations.MAX);

  fields
    .newMetric()
    .setId("forks")
    .setName("Forks")
    .setType(types.NUMBER)
    .setAggregation(aggregations.MAX);

  fields
    .newMetric()
    .setId("open_issues")
    .setName("Open Issues")
    .setType(types.NUMBER)
    .setAggregation(aggregations.MAX);

  fields
    .newMetric()
    .setId("watchers")
    .setName("Watchers")
    .setType(types.NUMBER)
    .setAggregation(aggregations.MAX);

  return fields;
}
```

## Getting Data

Upon loading, a report will request only relevant fields `getData(request)` through a request property.

```javascript

```

Returned data is given as rows in a little weird format.

```json
{
  "rows": [
    { "value": { "fieldA": "value1A", "fieldB": "value1B" } },
    { "value": { "fieldA": "value2A", "fieldB": "value2B" } },
    { "value": { "fieldA": "value3A", "fieldB": "value3B" } },
    { "value": { "fieldA": "value4A", "fieldB": "value4B" } }
  ]
}
```

Putting this all together, I wrote some glue code between the API and data structures.

```javascript
// all of the glue code
```

## Housekeeping

Not in the documentation is the required definition of `isAdminUser` for the analytics to function. Making this always return `true` seemed like a safe option.

```javascript
function isAdminUser() {
  return true;
}
```

## Deploying the Connector

## Creating a report

## Scheduling the Report

# Summary

[Looker Studio](https://lookerstudio.google.com/) is a good personal solution for my analytics. Prebuilt connectors pulling data from Google Analytics, YouTube and more. However with a flexible API, custom data imports and metrics can be generated with (relatively little) headaches. Data can then be transformed into automatically updating tables and charts. Finally, scheduling can make sure information is received in a useful time frame.

---

# Original Draft

Making content for the internet is wicked. Delayed, imperfect, noisy feedback operates in stark contrast to Chess and Go with clear feedback. Analytics are an invaluable tool to cut through this noise. Without being a large company however, setup, management and monitoring can become prohibitively difficult.

Unless you fit neatly into blogger or youtuber, tracking growth is a mess. An article here, a tweet there leaves an opaque quasi-professional nightmare to analyze.

## Why tracking is not rationale

Scale is the most common reason for what is good for me and thee on the internet. [Bazel](https://bazel.build), Google's build tool, does not make sense for a personal project. Likewise - obsessive analytics is time better spent on creating more content. Just doing more is likely a better use of your time.

## Instant Feedback Hurts Our Performance

Harvard Business review published [Instant Feedback Hurts Our Performance](https://https://hbr.org/2019/07/instant-feedback-hurts-our-performance). Reporting on research by the University of Washington, drivers using a driving-score app similar to [Snapshot from Progressive](https://www.progressive.com/auto/discounts/snapshot/) were either given instant or delayed feedback. The data showed a 13 % worse driving score after drivers checked their app immediately.

Similar to how the difference between stepping on a scale once a week and once an hour marks the difference between a critical tool for weight loss and an addiction, feedback's timing is key. While a dose makes a poison, timing makes analytics useful. At too small a time-scale, feedback is noisy and non-representative.

---

# Looker Studio

Looker Studio ( [formerly Google Data Studio](https://www.impressiondigital.com/blog/google-data-studio-renamed-as-looker-studio) ) is a data analytics engine similar to [Microsoft's Power BI](https://powerbi.microsoft.com/).

## Writing a Custom Connector

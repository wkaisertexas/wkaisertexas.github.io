---
title: "📍 Textual and Impact-based Coronavirus Open Research Dataset (CORD-19) Clustering"
description: "Creating an t-Distributed Stochastic Neighbor-Embedding (t-SNE) plot to visualize papers written about the Coronavirus pandemic"
repository: "https://github.com/wkaisertexas/COVID-Paper-Clustering"
builtWith: ["python", "pandas", "spacy", "matplotlib"]
display: true
---

# Context and scope

This uses the COVID-19 Open Research Dataset Challenge (CORD-19) for the paper dataset.

To textually analyze the dataset, SciSpaCy's large biomedical sciences model was used.

The majority of my code comes from MasksimEkin with his submission to this challenge. Including his beautiful Bokeh plot to visualize this data.

The one unique thing that this clustering incorporates is each paper's popularity in their respective fields. Alternative metrics were used via the AltMetric API to measure each paper's impact. Each paper's impact vector (# of citations, # of news citations, # of blog posts, # of tweets, # of Facebook pages, # of Reddit posts, # of wikipedia mentions, and # of readers) was combined with the PCA-reduced textual analysis vector upon which K-means clustering was run.

![K-Means plot created of category clusters](/project/cord19/k-means.png)

# Goals and non-goals

Creating a visualization which considers a paper's:

- subject matter
- impact as measured by citation counts

# Design

A scatter plot with tooltips, search and filters to find patterns. Full-abstracts are not included as these are distracting.

# Data Storage

The [COVID-19 Open Research Dataset](https://allenai.org/data/cord-19) hosted on Kaggle forms the input data. After clustering, the final interactive plot is saves to `html`. Through a GitHub connection, the plot is saved and displayed from **GitHub Pages**.

# Degree of Constraints

Ram size was a significant consideration when creating paper clusters. A subset of papers was used due to ram limitations, despite taking several hours.

> OpenAI's GPT-4 Embeddings model would likely provide a far better set of embeddings, creating potentially a far more representative plot.

# Alternatives Considered

Creating a citation-exploration program similar to [Maltego](https://www.maltego.com) was considered. However, impact data was not a sufficiently different experience as to require a new tool.

# Cross-cutting concerns

Often, research tools are limited by integration with existing practice. Without integration with existing tools such as [Zoltero](https://www.zotero.org), [Roam Research](https://roamresearch.com), [Google Scholar](https://scholar.google.com) and more, adoption of a new tool would be limited.

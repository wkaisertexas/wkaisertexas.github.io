---
title: "Why are top science fair projects different? An analysis of 13,000+ projects"
description: "Science fair is likely to evoke youthful memories of creation and discovery. These formative experiences are designed to cultivate students’ interest in science, technology, engineering and mathematics (STEM). However, top-tier science fair projects are incredibly competitive. In this article, the tips and lore surrounding projects will be explored and visualized with data."
pubDate: "May 23 2023"
heroImage: "hero.png"
kaggle: wkaisertexas/international-science-fair-analysis
display: true
---

Science fair is likely to evoke youthful memories of creation and discovery. These formative experiences are designed to cultivate students’ interest in science, technology, engineering and mathematics. However, top-tier science fair projects are incredibly competitive. This article will look at more than 13,000 projects and:

- Analyze competition background
- Investigate six common pieces of competition advice
- Create a interactive project visualization and search website

There are many science fair competitions, but by far the most prestigious is the International Science and Engineering Fair (ISEF). Students from over 40 countries compete to win over $9,000,000 in prize money every year.

In 2023, the top three winners won a total of $575,000. In addition to cash awards and scholarships, ISEF is also a recruiting pool for top universities like Harvard, Stanford and MIT.

<figure>
<img alt="Grand Awards Ceremony at the International Science and Engineering Fair" src="https://media.licdn.com/dms/image/D4D12AQGtIzrx9WX4Bw/article-inline_image-shrink_1500_2232/0/1684810843997?e=1707955200&v=beta&t=vRPexq_M2Ll1KCg8H5X825Da3umfhUTgdDYa4jwDpQ4" />
<figcaption>ISEF's grand awards ceremony in 2021 where more than 9 million dollars was given out.</figcaption>
</figure>

The drama and suspense of ISEF was even turned into a [National Geographic Documentary Film.](https://www.youtube.com/watch?v=bkzPBm-WznU)

Given the impact ISEF can have on a student's academic career, competition is intense. ISEF presentations mirror those of professional conferences rather than local elementary school science fairs.

## Qualifying for ISEF

Like other extracurricular competitions, four tiers of competition exist: district, regional, state and international. In the United States, two main ISEF qualification routes exist: regional and state competition.

There are three levels of competition prior to ISEF: District, Regional and State. Projects can advance to ISEF by being a Grand Award winner at either a Regional or State Competition.

Winning your regional category places allows you to advance to grand award judging. The Science and Engineering Fair of Houston (SEFH) advances fourteen of eighteen projects who won their category to ISEF. Texas State Science and Engineering Fair (TXSEF) is similar advancing projects to ISEF. Because regional fairs advance a larger portion, regional qualification is preferred and generally considered to be less difficult than through a state fair.

---

## Dissecting Common ISEF Project Advice

Because of ISEF's prestige and high visibility, there is a plethera of advice regarding how to gain an edge in competition. Often advice is overly general and based on one's limited competitive experience. Beliefs surrounding success in science fair can contribute to a distorted sense of attribution of which factors are vital to project success.

This analysis explores ISEF in two parts: Exploration and Visualization. The Exploration section analyzed six specific pieces of common project advice. Advice both from personal experience as well as others familiar with science fair. The Visualization section seeks to present a broad understanding of papers, categories and success factors. Finally, an interactive webpage which displays a scatterplot-representation of all projects is presented to allow researching past projects to be conducted visually.

## Data Analyzed

_Society for Science,_ ISEF's organizing body, keeps publicly accessible records on ISEF projects through the search portal [abstracts.societyforscience.org](https://abstracts.societyforscience.org/). The portal contains 13,543 science fair project titles, categories, countries, provinces, schools, contestants and abstracts from 2014 through 2023.

## Dataset Primers

To gain a broader foundation to contextualize findings, exploratory data analysis is a crucial, but often overlooked step towards understanding.

First, the name International Science and Engineering Fair is misleading as the United States comprises 59% of projects despite being 4% of global population.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQEw7RMcv82C4g/article-inline_image-shrink_1500_2232/0/1684604190570?e=1707955200&v=beta&t=nkIKGf2Omfoix3N-kg8iYMy65tC7xcUS8yyQQOLHsgE)" alt="Tree plot of countries participating in the International Science and Engineering Fair" />
<figcaption>Despite being an International Fair, the USA is significantly overrepresented.</figcaption>
</figure>

From the United States, Florida sends 10% of entries from the United States. However, states send projects to ISEF at rates approximately proportional to their population.

<figure>
<img alt="us representation at ISEF Broken down by State" src="https://media.licdn.com/dms/image/D5612AQGrdiwE5AhPGg/article-inline_image-shrink_1500_2232/0/1684604276962?e=1707955200&v=beta&t=SW8pAS4YsHYcs4Jb8ufEMYkzRXMwF_IfpYe0mPbFt6c" />
<figcaption>United States Representation at ISEF Broken Down by State</figcaption>
</figure>

Second, structural ISEF changes have taken place in recent years. Significant category changes took place from 2014 to 2023. Far fewer project categories were present in 2014 when compared with 2023. The categories of _Engineering: Physical_ and _Engineering: Chemical_ were removed entirely. New categories introduced include _Energy: Sustainable Materials and Design, Animal Sciences, Engineering Technology: Statics & Dynamics, Biochemistry_ and _Translational Medical Science_. Newer categories represent a significant portion of projects. Consequently, existing categories such as _Mathematics_ and _Plant Sciences_ represent a historically smaller fraction of projects.

<figure>
<img alt="Category Distribution at the International Science and Engineering Fair in 2014" src="https://media.licdn.com/dms/image/D5612AQGlNThGXiG0JA/article-inline_image-shrink_1500_2232/0/1684723371039?e=1707955200&v=beta&t=HGysl_qi_8QwYFOY1EkFtBUJnULYLnIkPTHXy_HRa5U" />
<figcaption>Category Distribution in 2014 at the International Science and Engineering Fair</figcaption>
</figure>

<figure>
<img alt="Category Distribution at the International Science and Engineering Fair in 2022" src="https://media.licdn.com/dms/image/D5612AQGjOAFkf8KwEQ/article-inline_image-shrink_1500_2232/0/1684723424102?e=1707955200&v=beta&t=k4dWdUIjgPjMcL17zUzmDsTxmC2BCsHvbUtg1mFGJyE" />
<figcaption>Category Distribution in 2023 at the International Science and Engineering Fair</figcaption>
</figure>

Consistent project and award growth has taken place since 2014. However, the COVID19 pandemic caused most awards to not be granted in 2020. Due to a lack of awards, 2020 was omitted from analysis.

<figure>
<img alt="project growth since 2014 src="https://media.licdn.com/dms/image/D5612AQELgAQWHb-0TA/article-inline_image-shrink_1500_2232/0/1695520376953?e=1707955200&v=beta&t=zgu7u9sDmURv7xiXljrUI5EnvcwKwuLCzRSSfd3_55U" />
<figcaption>Project growth at the International Science and Engineering Fair from 2014 through 2023</figcaption>
</figure>

<figure>
<img alt="awards growth" src="https://media.licdn.com/dms/image/D5612AQGmTfmdXNTsdw/article-inline_image-shrink_1500_2232/0/1695520411790?e=1707955200&v=beta&t=8OdbprSVGw143WqUEyRDihhIy1Xhi9HusIEA51mzBg4" />
<figcaption>Awards growth at the International Science and Engineering Fair from 2014 through 2023</figcaption>
</figure>

Winning awards at ISEF is difficult. Merely 29% of projects win any award. On average, projects win 0.4 awards. However, certain "star" project exists which win six or more awards. Out of the entire dataset, they "star" projects which win six or more awards only represent 0.2% of ISEF projects.

## Analyzing Common Science Fair Advice

Drawing upon both my own experience as well as consultation with others familiar with science fair, the following factors traditionally believed to lead to a more successful projects were investigated:

- Two-Pronged Titles (non-technical title + colon + technical title) and the impact on performance
- Machine Learning Projects
- Novel Bias
- Curing Cancer
- Platform Proposals
- Strategic Category Selection

### Two-Pronged Titles: A Statistical Advantage for Projects at The International Science and Engineering Fair

The non-technical title plus technical title was suggested by multiple people asked. Most commonly, the format uses a colon to distinguish between the two title types.

In most academic research, the non-technical project portion would be omitted. However, a dual title format allows contestants to create a humanizing, memorable moment through their title.

Many consider a two-format title to be a scourge on the science fair success. Non-technical titles have a tendency to devolve to be meaningless. Here are some illustrative examples:

> _Cancer is Dead: A Review of Chemotherapy Methods_

> _What's for Dinner: Using Soil Moisture Data for Crop Yield Forecasting_

Despite the sentiment held by some science fair community members, a two-segment title can be an effective strategy for improving project communication. Projects with titles separated by a colon won 33% more awards in 2023, a substantial increase.

<figure>
<img alt="" src="https://media.licdn.com/dms/image/D5612AQFdG9ObAXofRQ/article-inline_image-shrink_1500_2232/0/1695520548707?e=1707955200&v=beta&t=C-Qy8d_EF2bgSD-XJqxx4wemsMkCqOLm4VHKxA2X_i4" />
<figcaption>In 2023, projects using a two-pronged colon format represented 23% of entries and won 21% more awards than average.</figcaption>
</figure>

Using a two-pronged title, may be seen as improving a project's competitive success without requiring an underlying change in topic or methodology.

### Machine Learning Projects

In recent years, ISEF projects which used artificial intelligence (AI) or machine learning (ML) benefit from greater public interest and logistical simplicity.

While the public awareness of AI has been relatively recent, a sustained interest in artificial intelligence and machine learning has been taking place at ISEF since 2014. AI is seen by many contestants as a differentiator from competitors in categories which may not be traditionally dominated by AI and ML.

ML projects also tend to be logistically easier than physical experiments. ML projects typically consist of data selection, exploration, model construction and model evaluation. While data set sourcing can be difficult, especially with proprietary medical data, many resources exist for dataset selection including: [Google Dataset Search](https://datasetsearch.research.google.com/) and [Kaggle](https://kaggle.com/).

The number of times the terms "artificial intelligence" or "machine learning" are mentioned show a considerable rise is observed from 1% to 8% of projects from 2014 through 2023. A growth in machine-learning mentioning projects is logical given that projects mentioning machine learning win between 38% and 274% more awards. However, the benefit of mentioning AI or ML has decreased over time.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQH9fFK9XotTQw/article-inline_image-shrink_1500_2232/0/1695520674757?e=1707955200&v=beta&t=ag38DSmpN4CG7xd7kBGtzRDdh0AMyAULPF80wXUoQR8" alt="Since 2014, considerable growth in machine learning projects occurred with diminished statistical benefit as time goes on." />
<figcaption>Since 2014, considerable growth in machine learning projects occurred with diminished statistical benefit as time goes on.</figure>
</figure>

In addition, a recent trend has been the use of machine-learning in non-traditional categories for ML such as Animal Science or Behavioral and Social Science. To compare this trend, the average number of awards of ML projects was plotted against percentage of projects mentioning ML. A clear inverse correlation exists between the average number of awards won and density of ML projects.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQGA9MWgbbFEbA/article-inline_image-shrink_1500_2232/0/1695520702174?e=1707955200&v=beta&t=6DYoub_a7fwIKVJpb6EyLOOJkLjKIl_GQX-FtgCNY4s" alt="There is a the significant benefit to awards won and the percentage of projects with machine learning mentions in categories." />
<figcaption>There is a the significant benefit to awards won and the percentage of projects with machine learning mentions in categories.</figcaption>
</figure>

Correlation here suggests that augmenting projects with AI provides a clear mechanism for differentiation in non-traditional categories. Certain categories, however, including _Chemistry, Biochemistry and Plant Sciences_ see machine-learning projects winning awards. This suggests that machine learning projects are not well-received in some categories.

### Novelty Bias

Projects considered to be new, groundbreaking or novel are likely to pique the interest of judges. A fixation on novelty can be problematic and marks a distinction between academia and science fair: repeatable, methodical work is unlikely to be interesting.

Academia itself faces this problem, albeit in a less obvious way than ISEF. Solid research practices do not necessarily lead to winning science fair projects.

Projects which use "Novel" or "New" in their titles are common at ISEF. Novel projects represent 29-34% of total projects. A novel mention results in a 20-70% increase in awards won depending on the year.

<figure>

<img src="https://media.licdn.com/dms/image/D5612AQHQDpPlZOUxjQ/article-inline_image-shrink_1500_2232/0/1695520734368?e=1707955200&v=beta&t=_dLzcYXTVqKzf9LdGxayI2u6W_hc7LkI97TrMq5bO7I" alt="Novel projects represent between 30-35% of projects experience a significant advantage to the number of awards won." />
<figcaption>Novel projects represent between 30-35% of projects experience a significant advantage to the number of awards won.</figcaption>
</figure>

Digging deeper into novel projects, differences between special award judges, judges and grand-award judges should be noted. Generally speaking, there is a respective increasing level of technical sophistication between classes of judges. Consequently, non-special award judges tend to be more critical of projects claiming novelty. Before competition, judges are even known to [Google](https://google.com/) project topics to ensure novelty at ISEF.

When separating place awards (1st, 2nd, 3rd and 4th) from special awards, the advantage to a mention of novel is even more pronounced.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQETfxd0Wz5MpQ/article-inline_image-shrink_1500_2232/0/1695520830826?e=1707955200&v=beta&t=3X7Qf-LF8Uq3IxTrJ0XbkKHwAx1J7Sn7tEWdQhXk95Y" alt="Novel projects win more place awards. Depending on the year, novel projects can win nearly double the number of awards." />
<figcaption>Novel projects win more place awards. Depending on the year, novel projects can win nearly double the number of awards.</figcaption>
</figure>

Seeking novel project topics represent a significant advantage both to place awards and awards in general. A project's mention of novelty shows a constant, durable advantage over other projects.

### Curing Cancer

> "If you are not going to cure cancer, you are going to prevent cancer" -National Geographic ISEF Documentary

A longstanding joke within the science fair community was that "to win ISEF you need to cure cancer". The likely origin of this jokes comes from Jack Andraka winning the ISEF's top*Gordon E Moore Award* as a freshman in 2012.

Jack Andraka claimed to have produced a "novel paper sensor for the detection of pancreatic, ovarian and lung cancer" which was "168 times faster", "over 26,000 times less expensive" and "over 400 times more sensitive" than existing methods. Jack Andraka's win was later mired in controversy with a lack of reproducibility with claims made as well as multiple instances of unmentioned prior research in the field.

Finding a replicable and reproducible cure for cancer would likely do well at ISEF, the mere association with cancer is insufficient for success at ISEF. Projects which mentioned cancer or tumors won significantly between 10 and 20% fewer awards in recent years.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQHYRGrX7rtVEw/article-inline_image-shrink_1500_2232/0/1695520859657?e=1707955200&v=beta&t=35Jz7zml4X6mAkAT0b3rp0mbzok6n3TRWCfi3g1qfEw" alt="Projects mentioning cancer represent around 10% of awards and recently, has resulted in fewer awards won." />
<figcaption>Projects mentioning cancer represent around 10% of awards and recently, has resulted in fewer awards won.</figcaption>
</figure>
Cancer is not the silver bullet to a killer ISEF project which some claim. Given the dataset examined went back to 2014, whether or not cancer represents a historical advantage can not be determined with certainty.

### Platform Proposals

A Platform project is one that takes a technology and expands it into a proposal for a platform. Typically these are engineering projects, where hard data is often not required.

Often, a physical mockup or system proof of concept will be build as a demonstration. Broader statements about system applications are typically then made.

Platform projects are unreasonably effective and yield a 176% increase in awards won. Award growth has accompanied a near doubling of projects mentioning platforms from 2% to 4% from 2014 to 2023.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQHASPlOwlIQZQ/article-inline_image-shrink_1500_2232/0/1695520896858?e=1707955200&v=beta&t=UXMC4eB5u-o9yyrV4Z3R_2eBmxrlQbuAG2cNJiUGtY8" alt="Platform projects won nearly three times as many awards than the average in 2015. However, the advantage to mentioning creating a platform or mobile app has decreased significantly." />
<figcaption>Platform projects won nearly three times as many awards than the average in 2015. However, the advantage to mentioning creating a platform or mobile app has decreased significantly.</figcaption>
</figure>

Broad stroke platform proposals are ways to sell the vision for project implementation. Platform proposals are often augmentations of experiments or models. For example, a project may create a skin-cancer cancer-detection model and packages a demonstration to run on smartphone.

### Category Fraud

Category fraud is the act of obviously and intentionally entering into the wrong category. Often, category fraud happens either through human error or a deliberate attempt of differentiation.

Given how similar categories can be, entering into a non-obvious category as a point of differentiation is often cited as a "dirty trick". Proving category fraud is difficult in all by the most obvious of cases. Picking your category allows you to choose your competitors, which is seen as appealing to many.

However, examining the number of awards won based on their distance from the mean of their category, no clear correlation exists between different projects and the number of awards won. The greatest number of awards as well as the greatest number of projects tend to cluster in the medium-ranges.

<figure>
<img alt="Little association between the center location for a category and the number of awards won exists" src="https://media.licdn.com/dms/image/D5612AQGXFkDXljr_3A/article-inline_image-shrink_1500_2232/0/1684726545111?e=1707955200&v=beta&t=Xp1cFDvV1-1JYIuWV4sQGREH9Dpi7q3qhZ89NVfq5Tk" />
<figcaption>Little association exists between how many awards are won and the distance from the center.</figcaption>
</figure>

## Visualization

Gaining insights about each category's topics and techniques, examining inter-category relationships and similarities and creating an interactive scatterplot to explore projects are the main goals of visualization.

<figure>
  <a href="https://wkaisertexas.github.io/all-isef-projects">
    <img alt="Interactive browser-based visualization created to explore ISEF projects with filters for winning projects, project keywords and categories." src="https://media.licdn.com/dms/image/D5612AQHHayf7pZmNwg/article-inline_image-shrink_1000_1488/0/1684727730076?e=1707955200&v=beta&t=_nQR2dsXNas6e4D8iHkLNt1NQlHUqn4v0seAHBxffMQ" />
  </a>
  <figcaption>Interactive browser-based visualization created to explore ISEF projects with filters for winning projects, project keywords and categories.</figcaption>
</figure>

### Background on Embeddings, PCA and t-SNE

Embeddings are conceptually important to understanding how the visualization is produced. Embeddings are a fixed, low dimensional representation of higher-dimensional data, forming a simplified input representation.

In this instance, embeddings were creating using both a project's _title_ and _abstract_ using OpenAI's GPT-3 Ada model.

Alone, embeddings produce little value to both human or machines as they can be quite large. The embeddings produced for this project were vectors with 1536 items. However, by comparing embeddings through either using cosine similarity or Euclidean distance similarity between projects can be determined.

Embeddings can be quite large with the embeddings used for this project being 1536 items in length. t-Distributed Stochastic Neighbor (t-SNE) was used to plot embeddings. t-SNE trains a neural network to compress data to lower dimensions (typically two or three) for visualization.

### Visualizing Categories

Using a project's embedding created using a _title_ and _abstract_, categories of papers can be visualized in a scatter plot. Plotting this reveals a chaotic view of the competitive landscape of projects.

An animated category plot was created which iterates over each category to simplify the view. The resulting animated scatterplot shows clear areas of interest tied to category. Given this plot was created without _category_ consideration, tightly grouped category distributions represent a strong association between text content and category.

<figure>
<img alt="Animated graph showing the locations of projects in each category. Due to GIF color representations, artifacts are present." src="https://media.licdn.com/dms/image/D5612AQFficeZheDczg/article-inline_image-shrink_1500_2232/0/1684606621247?e=1707955200&v=beta&t=Seih9EZNkW5hcGyfs2cHIAh4bWDve1oBDPLoWKPvmxw" />
<figcaption>Animated graph showing the locations of projects in each category. Due to GIF color representations, artifacts are present.</figcaption>
</figure>

### Inter-Category Similarities

In each category, a centroid (multi-dimensional midpoint) represents the average project topic. Award-winning projects were weighted and the centroid average recalculated. The two centroids were then examined.

When comparing the unweighted and weighted average project locations (translucent and opaque, respectively), a significant shift occurs. A difference in average project location suggests a clear textual difference between award winning and non-winning projects.

<figure>
<img alt="" src="https://media.licdn.com/dms/image/D4D12AQHOSePHnBofYQ/article-inline_image-shrink_1500_2232/0/1684807160009?e=1707955200&v=beta&t=jm9__mBLoJYq9CJMnOa8JyaBqN7M9C6gpWxTRvckn1M" />
<figcaption>Opaque and translucent colored markers represent weighted and unweighted category centroids, respectively. Award-winning projects (darker circles) are connected to non-award winning projects (lighter circles).</figcaption>
</figure>

Using the textual averages for each category, similarities between categories were calculated. Inter-category similarity was visualized on a two-dimensional category-category matrix.

On this matrix, a prominent bright diagonal represents categories which are identical to each other. Greater similarity is represented by brighter colors and more distant semantic meanings are represented by darker colors. Given comparison of category centroids being bidirectional, the graph is symmetric (same distance, reverse order).

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQGIZhRfrrw7Ig/article-inline_image-shrink_1500_2232/0/1695520921712?e=1707955200&v=beta&t=P-rmZOYA4xPCV6bPyeJIFvhqSsxW6EYar09ElAE6wIE" alt="2D grid comparing International Science and Engineering Fair Categories. Light intersections represent similar categories, while dark ones represent dissimilar categories." />
<figcaption>2D grid comparing International Science and Engineering Fair Categories. Light intersections represent similar categories, while dark ones represent dissimilar categories.</figcaption>
</figure>

Upon analysis of this graph, _Behavioral and Social Sciences_ has the fewest similar categories, indicating that this category is distinct in terms of the projects contained. However, other categories did turn out to be closely related. _Robotics and Intelligent Machines_ and _Systems Software_ show significant overlap. Finally, _Energy: Chemical_, _Energy: Physical_, _Energy: Sustainable Materials and Design_, _Environmental Engineering_ and _Material Science_ are all closely related.

### Categories and Awards

Some categories have participants win far greater number of special awards.

<figure>
<img src="https://media.licdn.com/dms/image/D5612AQGaehwdrmWA4A/article-inline_image-shrink_1500_2232/0/1684728948555?e=1707955200&v=beta&t=T0-L7_VrfqKuVDlCscuIJ-7tKqqpQq_W7MgVh22OkW4" alt="Categories win dramatically different number of awards." />
<figcaption>Categories win dramatically different number of awards.</figcaption>
</figure>

### Category Topics: What is in each category?

To examine what is talked about in each category, Latent Derelict Allocation (LDA) is performed. LDA is a Bayesian model which seeks to explain why parts are similar.

LDA was used to extract category keywords. The common factor for each category were:

<figure>
<img alt="Keywords for each ISEF category" src="https://media.licdn.com/dms/image/D5612AQFvgDOjfyZItg/article-inline_image-shrink_1500_2232/0/1684727096302?e=1707955200&v=beta&t=X8Ze75FjI8kH8DVEVbDdtMm7MATmgW_1jH5D-6cw8i0" />
<figcaption>Keywords for each ISEF category</figcaption>
</figure>

### Interactive Visualization

Using Bokeh, a [website](https://wkaisertexas.github.io/all-isef-projects/) was created which allows for the visualization and exploration of ISEF projects in a more natural manner than direct searches.

The visualization created allows projects to be filtered and explored through the plot. Clicking any project will lead to the corresponding page on [abstracts.societyforscience.org.](https://abstracts.societyforscience.org/)

The goal for this visualization is to make the dataset presented more approachable and visual for those confused as where to start.

## Summary

Science fair is a competitive environment - likely something characteristically different that what most people imagined as children. Given the stakes, including cash, scholarships and admissions to top universities, science fair has generated a large amount of common project advice.

Some strategies such as:

- use of machine learning
- two pronged title format
- platform projects
- novel projects

However, advice surrounding benefits to cancer projects as well as projects trying to be unique was largely disproven.

After manual investigation, the dataset used OpenAI's _text-embedding-ada-002_ model to generate embeddings which were plotted on a 2D scatter plot using t-SNE dimensionality reduction. Through computation of category centroids, inter-category relationships were determined. LDA was then used to extract keywords for each category. Finally, this data was exported to a Bokeh interactive plot available [here](https://wkaisertexas.github.io/all-isef-projects/).

## Conclusion

While changing how titles are written, topics and categories are selected keywords are used, are likely to improve the success of your project. Alone this is insufficient. ISEF projects represent the top 2-5% of projects. Reliably advancing requires a competitive advantage than fickle trend in projects could provide.

Far more important thank seeking statistical advantages is the project's significance to the presenter. Are passionate about your project's topic and can present it well? Does your project's topic appeal to judges in the area? Do you have the resources at your disposal to complete your project? These are all pertinent questions which are far more difficult to measure from a database of top abstracts.

## Check My Work

If you have any issues, questions, comments or concerns with the work presented today, both the [scraped dataset](https://www.kaggle.com/datasets/wkaisertexas/all-international-science-fair-projects) as well as the [Jupyter notebook](https://www.kaggle.com/code/wkaisertexas/international-science-fair-analysis) are available on Kaggle.

<iframe src="https://www.kaggle.com/embed/wkaisertexas/international-science-fair-analysis?kernelSessionId=143892568" height="800" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="International Science Fair Analysis"></iframe>

## About the Author

My name is William Kaiser and I am a Computer Science student at the University of Virginia. Throughout both middle school and high school, I competed in multiple science fairs, winning a Physical Sciences grand award. I am passionate about data science and data's storytelling ability and ability to drive informed decision-making.

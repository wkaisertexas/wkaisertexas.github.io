---
title: "Behind The Innovation: Insights from the International Science and Engineering Fair"
description: "Science fair is likely to evoke youthful memories of creation and discovery. These formative experiences are designed to cultivate students’ interest in science, technology, engineering and mathematics (STEM). However, top-tier science fair projects are incredibly competitive. In this article, the tips and lore surrounding projects will be explored and visualized with data."
pubDate: "May 23 2023"
heroImage: "/blog/isef-analysis/hero.png"
display: false
---

Science fair is likely to evoke youthful memories of creation and discovery. These formative experiences are designed to cultivate students’ interest in science, technology, engineering and mathematics (STEM). However, top-tier science fair projects are incredibly competitive. In this article, the tips and lore surrounding projects will be explored and visualized with data.

Science Fair has an Olympics, though. The International Science and Engineering Fair (ISEF) sees students compete from over 40 different countries to win millions of dollars in prize money every year.  The drama and suspense of ISEF was even turned into a [National Geographic Documentary Film](https://www.youtube.com/watch?v=bkzPBm-WznU)

The top three winners won a total of $575,000 in 2023, a sum more than eight times the median American salary. In addition to money and scholarships, ISEF is also a recruiting pool for top universities like Stanford, Harvard, and MIT.

![Grand Awards Ceremony at the International Science and Engineering Fair](/blog/isef-analysis/grand.jpeg)

ISEF's grand awards ceremony where more than 9 million dollars was given out.

Given the impact ISEF can have, student competition is intense with projects taking on a likeness more akin to poster-board presentations at conferences than elementary school science fairs.

## Qualifying

Like other extracurriculars, four tiers of competition exist: district, regional, state and international. Two main ISEF qualification routes exist: regional and state competition.

Winning your regional category places allows you to advance to grand award judging. The Science and Engineering Fair of Houston (SEFH) advances fourteen of eighteen projects who won their category to ISEF. Texas State Science and Engineering Fair (TXSEF) is similar advancing projects to ISEF. Because regional fairs advance a larger portion, regional qualification is preferred.

Competition before ISEF is an important caveat for data later presented. Personally, I believe the trends presented to still be significant at earlier levels of competition. However, earlier stages of competitions tend to be more variable from my personal experience.

---

## Dissecting Science Fair

ISEF generates significant colloquial project advice. Often, overly general advice will be given based on limited competitive experience. Lore surrounding success in science fair contributes to a distorted sense factors contributing to project success. Ambiguity can too often serve gate keep ISEF for outsiders.

Analysis had two parts: exploration and visualization. Exploration analyzed specific pieces of colloquial passed advice. Advice both from personal experience as well as others familiar with science fair. Visualization seeks to present a broad understanding of papers, categories and success factors. Finally, an interactive webpage displaying a dimensionality-reduced scatter-plot will allow for a spatial representation of projects.

## Data Analyzed

*Society for Science,* ISEF's organizing body, keeps public science fair project records. [abstracts.societyforscience.org](https://abstracts.societyforscience.org/) contains 12,221 project titles, categories, countries, provinces, schools, contestants and abstracts from 2014 through 2022.

## Dataset Primers

To gain a broader foundation to contextualize findings, exploratory data analysis is a crucial, but often overlooked step towards understanding.

First, the name International Science and Engineering Fair is misleading as the United States comprises 59% of projects despite being 4% of global population.

![Tree plot of countries participating in the International Science and Engineering Fair](https://media.licdn.com/dms/image/D5612AQEw7RMcv82C4g/article-inline_image-shrink_1500_2232/0/1684604190570?e=1692835200&v=beta&t=6xSS6EQh99SB7EEbPR_GMPC9B1Q9aUUHXolk3JyVmxY)

Despite being an International Fair, the USA is significantly overrepresented.

Of the states represented, Florida sends the greatest number of projects at 10%. However, states send a representative distribution to ISEF.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQGrdiwE5AhPGg/article-inline_image-shrink_1500_2232/0/1684604276962?e=1692835200&v=beta&t=WzqRReICEVQnhXoYt3jeTUjVMWI3G0YQ9ugU-m_yLxw)

Representation of States at ISEF

Second, structural ISEF changes have taken place. Significant category changes took place from 2014 to 2023. Far fewer project categories were present in 2014 when compared with 2023. *Engineering: Physical* and *Engineering: Chemical* were removed entirely. New categories introduced include *Energy: Sustainable Materials and Design, Animal Sciences, Engineering Technology: Statics & Dynamics, Biochemistry* and *Translational Medical Science*. Newer categories represent a significant portion of projects. Consequently, existing categories such as *Mathematics* and *Plant Sciences* represent a historically smaller fraction of projects.

![Category Distribution at the International Science and Engineering Fair in 2014](https://media.licdn.com/dms/image/D5612AQGlNThGXiG0JA/article-inline_image-shrink_1500_2232/0/1684723371039?e=1692835200&v=beta&t=RBANd9OFFZnUhvyUg1c9gA1XOmIFUnG1gA-axNNbgxM)

Category Distribution in 2014 at ISEF

![Category Distribution at the International Science and Engineering Fair in 2022](https://media.licdn.com/dms/image/D5612AQGjOAFkf8KwEQ/article-inline_image-shrink_1500_2232/0/1684723424102?e=1692835200&v=beta&t=Ry5qT75W1g1vVV_MG2Qa8LSfwGFyv-CyyA_BoNISvy4)

Category Distribution in 2022 at ISEF

Consistent project and award growth has taken place since 2014. However, the COVID19 pandemic caused most awards to not be granted in 2020. Due to a lack of awards, 2020 was omitted from analysis.

![Project Growth over time](https://media.licdn.com/dms/image/D5612AQHfzaJOWXMR7g/article-inline_image-shrink_1500_2232/0/1684723767880?e=1692835200&v=beta&t=agq7xPcf16qefGwIdDZ7K8WnDZIGt3rX9yMare9cFWE)

Project Growth at the ISEF

![Award Growth over time](https://media.licdn.com/dms/image/D5612AQEwdp6pdNloWA/article-inline_image-shrink_1500_2232/0/1684723664074?e=1692835200&v=beta&t=fyRkRCtZXZxHX_zeRcLmTfKRK3yb9urc1_N-oJpELPc)

Awards growth over time at ISEF. The year 2020 represents a point of discontinuity with near-zero awards won during this year.

Winning awards at ISEF is difficult. Merely 29% of projects win any award. On average, projects win 0.4 awards. However, certain "star" project exists which win six or more awards. Out of the entire dataset, they "star" projects which win six or more awards only represent 0.2% of ISEF projects.

## Analyzing Colloquial Science Fair Lore

Drawing upon both my own experience as well as consultation with others familiar with science fair, the following ideas rumored to improve performance were investigated:

- Two-Pronged Titles (non-technical title + colon + technical title) and the impact on performance
- Machine Learning Projects
- Novel Bias
- Curing Cancer
- Platform Proposals
- Watered-down Category Fraud

### Two-Pronged Titles: A Statistical Advantage for Projects at The International Science and Engineering Fair

The non-technical title plus technical title was suggested by multiple people asked. Most commonly, the format uses a colon to distinguish between the two title types.

In most academic research, the non-technical project portion would be omitted. However, a dual title format allows contestants to create a humanizing, memorable moment through their title.

Anecdotally, many in consider a two-format title to be a source on the science fair community. Non-technical titles have a tendency to devolve, leading to some interesting titles. To avoid calling specific projects out, here are some illustrative examples:

> _Cancer is Dead: A Review of Chemotherapy Methods_

> _What's for Dinner: Using Soil Moisture Data for Crop Yield Forecasting_

Despite the sentiment held by some members of the science fair community, a two-segment title is an effective strategy for improving project communication. Projects with titles separated by a colon won 33% more awards in 2022, a substantial increase.

![2014 to 2022 awards won using a two-pronged colon title format](https://media.licdn.com/dms/image/D5612AQEHajAkWIW_vQ/article-inline_image-shrink_1500_2232/0/1684724290649?e=1692835200&v=beta&t=RnZBbsDVACsL7HJ-62R7CgsVulft4dMVME3kCDaMpq0)

In 2022, projects using a two-pronged colon format represented 26% of entires and won 32% more awards than average.

Of the advice examined, using a two-pronged title represents the most significant change to improve project performance without requiring underlying topic change.

### Machine Learning Projects

ISEF projects using artificial intelligence (AI) or machine learning (ML) benefit from greater public interest and logistical simplicity.

While AI's movement into the zeitgeist was relatively recent, a sustained interest in artificial intelligence and machine learning has been taking place at ISEF since 2014. AI is seen by many contestants to differentiate from competitors in categories which may not be traditionally dominated by AI / ML.

Machine learning projects also tend to be logistically easier than physical experiments. Machine learning projects typically consist of data selection, exploration, model construction and model evaluation. While data set sourcing can be difficult, especially with proprietary medical data, many resources exist for dataset selection including: [Google Dataset Search](https://datasetsearch.research.google.com/) and [Kaggle](https://kaggle.com/).

Examine "artificial intelligence" or "machine learning" mentions show a considerable rise is observed from 1% to 8% of projects from 2014 through 2022. A growth in machine-learning mentioning projects is logical given that projects mentioning machine learning win between 38% and 274% more awards. However, the benefit of mentioning AI / ML has decreased over time.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQGb0YvYVarrZg/article-inline_image-shrink_1500_2232/0/1684725226671?e=1692835200&v=beta&t=o4c1zwS54xsszxSrLE2IbXFgZ4hXrrrOkM7lN05Wy34)

Since 2014, considerable growth in machine learning projects occurred with diminished statistical benefit as time goes on.

In addition, a recent trend has been the use of machine-learning in non-traditional categories for ML such as Animal Science or Behavioral and Social Science. To compare this trend, the average number of awards of machine learning projects was plotted against percentage of projects mentioning machine leaning. A clear inverse correlation exists between the average number of awards won and density of machine learning projects.

![Machine learning benefit by Category](https://media.licdn.com/dms/image/D5612AQG7gN--rPIlFQ/article-inline_image-shrink_1500_2232/0/1684725167923?e=1692835200&v=beta&t=nR2kEbw6rxVOOPqTtF2iP85ou0aLrSgSX6-0cFFBFJ8)

An inverse relationship between the statical benefit to awards won and the percentage of projects with machine learning mentions in catagories.

Correlation here suggests that augmenting projects with AI provides a clear mechanism for differentiation in non-traditional categories. However, certain categories including _Chemistry, Biochemistry and Plant Sciences_ see machine-learning projects winning fewer awards. This suggests that some categories are hostile to the notion of increasing machine learning projects.

### Novelty Bias

Projects considered to be new, groundbreaking or novel are likely to pique the interest of judges. A fixation on novelty can be problematic and marks a distinction between scholarship and science fair: repeatable, methodical work is unlikely to be interesting.

Academia itself faces this problem, albeit less obvious than ISEF. However, good scholarship does not necessarily yield a good project.

Projects which claim novel outcomes are common. Novel projects represent 29-34% of total projects. A novel mention results in a 20-70% increase in awards won depending on the year.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQELh8QFWTf26Q/article-inline_image-shrink_1500_2232/0/1684725888076?e=1692835200&v=beta&t=WP3YbqBlZjmP7tSH0dk_-GxtA_Lkumh_zP3mPrUzgo8)

Novel projects represent between 30-35% of projects experience a significant advantage to the number of awards won.

Digging deeper into novel projects, differences between special award judges, judges and grand-award judges should be noted. Generally speaking, there is a respective increasing level of technical sophistication between classes of judges. Consequently, non-special award judges tend to be more critical of projects claiming novelty. Before competition, judges are even known to [Google](https://google.com/) project topics to ensure novelty at ISEF.

Segmenting place awards (1st, 2nd, 3rd and 4th) from special awards is necessary. After separating, an even more pronounced advantage to mentioning project novelty is observed.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQFZPCT1cT2jJg/article-inline_image-shrink_1500_2232/0/1684725971698?e=1692835200&v=beta&t=KfElHTmvCwhc8mfVcYSmwYv8zqUiiVig2vv2kS9A6lI)

Novel projects win more place awards. Depending on the year, novel projects can win nearly double the number of awards.

Seeking novel project topics represent a significant advantage both to place awards and awards in general. Novelty's advantage is variable, yet nearly constant.

### Curing Cancer

> "If you are not going to cure cancer, you are going to prevent cancer" -National Geographic ISEF Trailer

A longstanding joke within the science fair community was that "to win ISEF you need to cure cancer". The likely origin of this jokes comes from Jack Andraka winning the ISEF's top*Gordon E Moore Award* as a freshman in 2012.

Jack Andraka claimed to have produced a "novel paper sensor for the detection of pancreatic, ovarian and lung cancer" which was "168 times faster", "over 26,000 times less expensive" and "over 400 times more sensitive" than existing methods. Jack Andraka's win was later mired in controversy with a lack of reproducibility with claims made as well as multiple instances of unmentioned prior research in the field.

While finding a replicable and reproducible cure for cancer would likely do well at ISEF, mere association with cancer is insufficient for success at ISEF. Projects which mentioned cancer or tumors won significantly between 10 and 20% fewer awards more recently.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQEezdZ7qpn8Xg/article-inline_image-shrink_1500_2232/0/1684726179578?e=1692835200&v=beta&t=E1GsKzHJjwU-do4cP67A5LX3UMW82DhzkLWqs_sNSXo)

Projects mentioning cancer represent around 10% of project and more recently, have resulted in fewer awards won.

Cancer is not the silver bullet to a killer ISEF project which some claim. Given data only back to 2014, whether or not cancer represented a historical advantage is unknown.

### Platform Proposals

A platform project is one that takes a technology and expands this into a proposal for a platform. Typically these are engineering projects, so hard data is often not required.

Often, a physical mockup or system proof of concept will be build as a demonstration. Broader statements about system applications are typically then made.

Platform projects are unreasonably effective and yield a 176% increase in awards won. Award growth has accompanied a near doubling of projects mentioning platforms from 2% to 4% from 2014 to 2022.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQFYpyj7XLOnIg/article-inline_image-shrink_1500_2232/0/1684726395321?e=1692835200&v=beta&t=saHPNI5wA_VBjWICQ4Gcw6d5Hc3ekoW5e8EU67erZTM)

Platform projects won nearly three times as many awards than the average in 2015. However, the advantage to mentioning creating a platform or mobile app has decreased significantly.

Broad-stokes platform proposals are ways to sell the vision for project implementation. Platform proposals are often augmentations of experiments or models (ie. a project creates a cancer-detection model and packages a demonstration to run on smartphone).

### Category Fraud

Category fraud is the act of obviously and intentionally entering into the wrong category. Often, category fraud happens either through human error or a deliberate attempt of differentiation.

Given how similar categories can be, entering into a non-obvious category as a point of differentiation is often cited as a "dirty trick". Proving category fraud is difficult in all by the most obvious of cases. Picking your category to choose competitors is seen as appealing to many.

However, examining the number of awards won based on their distance from the mean of their category, no clear correlation exists between different projects and the number of awards won. The greatest number of awards as well as the greatest number of projects tend to cluster in the medium-ranges.

![Little association between the center location for a category and the number of awards won exists](https://media.licdn.com/dms/image/D5612AQGXFkDXljr_3A/article-inline_image-shrink_1500_2232/0/1684726545111?e=1692835200&v=beta&t=QHa_5A6daBAQaX_tVmy41efOJf9KZHYkYBh2uJGQuI0)

Little association exists between how many awards are won and the distance from the center.

## Visualization

Gaining insights about each category's topics and techniques, examining inter-category relationships and similarities and creating an interactive scatterplot to explore projects are the main goals of visualization.

![Screenshot of visualization created](/blog/isef-analysis/vis-screenshot.png)

Interactive browser-based visualization created to explore ISEF projects with filters for winning projects, project keywords and categories.

### Background on Embeddings, PCA and t-SNE

Embeddings are conceptually important to understanding how the visualization is produced. Embeddings are a fixed-low dimensional representational of higher-dimensional data, forming a simplified input representation.

In this instance, embeddings were creating using both a project's _title_ and _abstract_ using OpenAI's GPT-3 Ada model.

Alone, embeddings produce little value to both human or machines. However, by comparing embeddings through either using cosine similarity or Euclidean distance similarity between projects can be determined.

Embeddings can be quite large with the embeddings used for this project being 1536 items in length. T-Distributed Stochastic Neighbor (t-SNE) was used to plot embeddings. t-SNE trains a neural network to compress data to lower dimensions (typically two or three) for visualization.

### Visualizing Categories

Using a project's embedding created using a _title_ and _abstract_, categories of papers can be visualized in a scatter plot. Plotting this reveals a chaotic view of the competitive landscape of projects.

To simplify, an animated graph of categories was created which iterates over each category. The animated scatterplot shows clear areas of interest tied to category. Given this plot was created without _category_ consideration, tightly grouped category distributions represent a strong association between text content and category.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQFficeZheDczg/article-inline_image-shrink_1500_2232/0/1684606621247?e=1692835200&v=beta&t=e-Cao0uCky4doNtyA9oYjWEhKnjQxjK8HcbLFcPbZS8)

Animated graph showing the locations of projects in each category. Due to GIF color representations, artifacts are present.

### Inter-category Similarities

In each category, a centroid (multi-dimensional midpoint) represents the average project topic in each category. Trying to determine if winning projects are Attempting to associate determine the relationship between winning and losing projects, an average weighted by awards was also plotted.

When comparing the unweighted and weighted average project locations (translucent and opaque, respectively), a significant shift occurs. A difference in average project location suggests a clear textual difference between projects which win and do not win awards.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4D12AQHOSePHnBofYQ/article-inline_image-shrink_1500_2232/0/1684807160009?e=1692835200&v=beta&t=Ob2p9kRkJQNAE8SVVc496S2RmymNgapuwf2MtE6zNkU)

Opaque and translucent colored markets represent weighted and unweighted category centroids, respectively.

Using the textual averages for each category, similarities between categories were calculated. Inter-category similarity was visualized on a two-dimensional category-category matrix.

On this matrix, a prominent bright diagonal represents categories which are identical to each other. Greater similarity is represented by brighter colors and more distant semantic meanings are represented by darker colors. Given comparison of category centroids being bidirectional, the graph is symmetric (same distance, reverse order).

![Category x Category image graph showing similarity as a heatmap](https://media.licdn.com/dms/image/D5612AQFKnd8JQfdliw/article-inline_image-shrink_1500_2232/0/1684729317320?e=1692835200&v=beta&t=yv1IrrvWMwsjampF9f3B172OvJOnNv5z8igWo4avUv8)

2D grid comparing ISEF Categories

Upon analysis of this graph, _Behavioral and Social Sciences_ has the fewest similar categories, indicating that this category is distinct in terms of the projects contained. However, other categories are closely related. _Robotics and Intelligent Machines_ and _Systems Software_ show significant overlap. Finally, _Energy: Chemical_, _Energy: Physical_, _Energy: Sustainable Materials and Design_, _Environmental Engineering_ and _Material Science_ are all closely related.

### Categories and Awards

Some categories have participants win far greater number of special awards.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQGaehwdrmWA4A/article-inline_image-shrink_1500_2232/0/1684728948555?e=1692835200&v=beta&t=yMYwkDVXErcG5hPiE3Hp0BDkLkoRv8Bh8AApZ_akKuk)

Categories win dramatically different number of awards.

### Category Topics: What is in each category?

To examine what is talked about in each category, Latent Derelict Allocation (LDA) is performed. LDA is a Bayesian model which seeks to explain why parts are similar.

LDA was used to extract category keywords. The common factor for each category were:

![Keywords for each ISEF category](https://media.licdn.com/dms/image/D5612AQFvgDOjfyZItg/article-inline_image-shrink_1500_2232/0/1684727096302?e=1692835200&v=beta&t=4pWTtpA9Rw6nucJ59aS5U_dFYZrrr5WiElJh5Rmse-s)

Keywords for each category at ISEF

### Interactive Visualization

Using Bokeh, a [website](https://wkaisertexas.github.io/all-isef-projects/) was created which allows for the visualization and exploration of ISEF projects in a more natural manner than direct searches.

The visualization created allows projects to be filtered and explored through the plot. Clicking any project will lead to the corresponding page on [abstracts.societyforscience.org.](https://abstracts.societyforscience.org/)

The goal for this visualization is to make the dataset presented more approachable and visual for those confused as where to start.

## Summary

Science fair is a competitive environment - likely something characteristically different that what most people imagined as children. Given the stakes, including cash, scholarships and admissions to top universities, science fair has cultivated a tremendous amount of lore.

Some strategies such as:

- use of machine learning
- two pronged title format
- platform projects
- novel projects

However, lore surrounding cancer projects as well as projects trying to be unique was largely disproven.

After manual investigation, the dataset used OpenAI's _text-embedding-ada-002_ model to generate embeddings which were plotted on a 2D scatter plot using t-SNE dimensionality reduction. Through computation of category centroids, inter-category relationships were determined. LDA was then used to extract keywords for each category. Finally, this data was exported to a Bokeh interactive plot available [here](https://wkaisertexas.github.io/all-isef-projects/).

## Conclusion

While changing how titles are written, topics and categories are selected keywords are used, are likely to improve the success of your project. Alone this is insufficient. ISEF projects represent the top 2-5% of projects. Reliably advancing requires a competitive advantage than fickle trend in projects could provide.

Far more important thank seeking statistical advantages is the project's significance to the presenter. Are passionate about your project's topic and can present it well? Does your project's topic appeal to judges in the area? Do you have the resources at your disposal to complete your project? These are all pertinent questions which are far more difficult to measure from a database of top abstracts.

However, I believe the advice to _[Adjust your packaging](https://www.youtube.com/watch?v=R5tkpqW-1BY)_ by Jack Conte, the CEO of Patreon, to be a worthwhile framework. Do not compromise on your core project. However, be flexible to change how the project is packaged to be effective. However, too much of an emphasis before a project that is selected which is a good fit for you and your learning and exploration. Generally speaking, maximizing the number of awards won is a terrible personal goal. Be cautious in implementation.

## Check My Work

If you have any issues, questions, comments or concerns with the work presented today, both the [scraped dataset](https://www.kaggle.com/datasets/wkaisertexas/all-international-science-fair-projects) as well as the [Jupyter notebook](https://www.kaggle.com/code/wkaisertexas/international-science-fair-analysis) are available on Kaggle.

## About the Author

Hello, my name is William Kaiser and I am a computer science student at the University of Virginia. Throughout both middle school and high school, I competed in science fair and winning a physical sciences grand award. I am passionate about data science and data's storytelling ability and ability to drive informed decision-making.

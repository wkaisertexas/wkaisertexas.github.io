---
title: "5 ways to level up your Jupyter Notebook game"
description: "Get speedy analysis, visualizations and debugging to avoid pulling your hair out"
pubDate: "Dec 11 2023"
heroImage: "hero.png"
display: true
---

## What is a Jupyter Notebook?

JuPyter Notebooks are the most popular tool for data scientists and analysts to explore data. Notebooks are a web-based interactive environment which merges code, visualizations and markdown annotations into a single document. Notebooks are shareable, reproducible and a great platform of data exploration. Online platforms like [Kaggle](https://kaggle.com) and [Google Colab](https://colab.research.google.com) make it easy to share and collaborate on notebooks.


![Jupyter Notebook on Kaggle](../../blog/five-tips-to-improve-your-jupyter-notebook-game/jupyter-notebook.png)

## 1. Use Markdown

Markdown is a simple language for text formatting. If you would like a formal guide on using markdown, check out [Take 15 minutes to become a Markdown great](./great-markdown). Adding context, references, and explanations to your code is a great way to share your work with others and your future self.

## 2. Use Type Hints

Type hints are a general python tip but are especially useful in notebooks. Type hints are a way to keep yourself organized when writing your code. Though some may argue that type hints are ugly and unnecessary for data science project, using type hints is a habit which will pay dividends in the long run.

```python
def convert_string_to_date(string: str) -> pd.datetime:
    return pd.to_datetime(string) if str(string) else None
```

## 3. Sample Your Data

When working with large and medium-size datasets, sampling your data is a great way to keep your notebook responsive. When doing any lengthy analysis, the a 10 - 20 second wait and a couple seconds can be the difference between a productive session and a frustrating one. 

```python
df = pd.read_csv('data.csv')

df = df.sample(frac=1_000) # sample 1,000 rows

# or 

df = df.sample(frac=0.01) # sample 1% of the rows
```

## 4. Don't Do Shit Twice

Expensive operations such as data loading should only be run once. While you may try to not re-run the expensive load the several gigabyte comma separated values (CSV) file, odds are you will (you probably should be using a more modern data format like parquet anyways).


```python
df = pd.read_csv("imdb_movie_reviews.csv")
```

A blind call can have redundancy protection simply by referencing `locals()`, a dictionary of all local variables.

```python
if 'df' not in locals():
  df = pdf.read_csv("imdb_movie_reviews.csv")
```

## 5. Do not mess up your original dataset

> A cell should always be able to be run multiple times

What does this mean? Why is this a guiding principle for notebook design? Simply put: you are going to have to run your code multiple times. Structuring code which is durable enough to handle notebook re-runs helps you avoid hard resets. 

Suppose we are given a dataframe which has the years as strings for some reason, making sure the code does not depend on the data type that is going to be replaced is super important. 

```python
df = pd.read_csv("imdb_movie_reviews.csv")

df['year'] = df['year'].apply(lambda x: convert_string_to_date(x))
```

If we were to run this cell twice, we would get an error because the `year` column is now a datetime object and the `convert_string_to_date` function expects a string. 

```python
df = pd.read_csv("imdb_movie_reviews.csv")

df['year'] = df['year'].apply(lambda x: convert_string_to_date(str(x)))
```

This is a simple fix, but it is a good example of how to avoid errors when re-running cells.

## Conclusion

A Jupyter Notebook is a great tool, but it should be thought of as having two modes: interactive and compiled. When crafting your analysis interactively, speed is king. Learning simple tricks like sampling your data, not re-running code and using the right data types can make a huge difference in your productivity. 

When performing analysis, you generally write code, run it, write code, run it. If you are not careful and your code has to re-run every time and is generally slow, you will be waiting a lot. In fact, a first-year computer science student may suggest that you are debugging in `O(n^2)` time. Try and avoid that. 


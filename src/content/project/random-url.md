---
title: "🎲 Random URL Generator"
description: "Generate shortened URLs with multiple destinations. Integrated tracking"
repository: "https://github.com/wkaisertexas/RandomURL"
builtWith: ["python", "django"]
---

# Context and scope

While running _College Park High School_'s Science Bowl team. I wanted to A / B test a Remind and website to determine the most effective club landing page. A great article by _Teaching Statistics is Awesome_ on creating a [Random Redirector](https://teaching.statistics-is-awesome.org/tools/random-redirector/) using Google Apps Script already existed. However, Apps Script redirects would not work on most mobile devices.

Open-source link-shorteners like [Polr](https://polrproject.org) exist. I was learning Django when I created this project and was looking for a project to tinker with and be my own customer.

# Goals and non-goals

_RandomURL_ was to be a URL shortener which allows the user to define a one-to-many relationship between a single input and multiple outputs.

The number of people sent to each destination will be recorded.

**Example:**

- `50%` remind.com/mylink -> Remind page -> 245 views
- `50%` sites.google.com/mylink -> Google Sites -> 224 views

# Design

**RandomURL** is a minimalistic design with three differentiable pages: a landing page, home page, view of active shortened urls and url editing views where the list of destinations and the probability of being sent to each can be seen. Sliders which update probabilities on drag are how destinations are set.

# APIs

```
/abcdefg/ -> GET -> 404 Redirect
/create/ -> POST -> Confirmation
/update/ -> POST -> Confirmation
```

# Data Storage

Data is stored on a _Postgres_ instance which the Python server interfaces with through Django's ORM.

# Code / Pseudo Code

```python
def get_destination(self):
  """Randomly picks a destination"""
  rand = random() * self.get_cum_probability()
  for dest in self.destinations.all():
    rand -= float(dest.prob)
    if rand <= 0:
      dest.views += 1
      dest.save()
      return dest.url
  dest = self.destinations.last()
  dest.views += 1
  dest.save()
  return dest
```

# Degree of Constraints

Use of a _Postgres_ database and a python Heroku dyno can create cold starts which can lead to 5 + second initial load times.

# Alternatives Considered

A system where urls could be programmatically created through an API was considered. In addition, using an in-memory database to get sub-millisecond response times for urls was also considered. However, not enough traction existed to justify and of these decisions.

# Cross-cutting concerns

Google Analytics' ability to track prior destinations reduces the need for a "smart" redirectior with analytics built-in.

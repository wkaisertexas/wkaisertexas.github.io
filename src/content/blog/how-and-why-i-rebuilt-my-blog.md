---
title: "10 reasons I rebuilt my blog in Astro"
description: "Recently, I rebuilt my blog in Astro and deployed to GitHub pages. Reflecting on this process, I wanted to share some of the reasons why I think this setup is a great combination for me."
pubDate: "July 11 2023"
heroImage: "hero.png"
display: true
---

Recently, I rebuilt my blog in [Astro](https://astro.build) and deployed it to [GitHub pages](https://pages.github.com/). Reflecting on this process, I wanted to share some of the reasons why I think this setup is a great combination for me.

## Why write?

Writing is a deceptively egalitarian pursuit. Anyone can do it. Few do it well, yet good writing and the power in it is undeniable -- a great skill for life.

There is an extent to which school has failed writers. When grading the immense amounts of papers, the heuristic that longer tends to be better generally holds. The SAT Essay section found this when [MIT's Dr. Les Perelman found longer essays predictive of higher scores](https://www.nytimes.com/2005/05/04/education/sat-essay-test-rewards-length-and-ignores-errors.html). As a result, brevity is not emphasized. Formal education has little alternative, so rather than being a critique, becoming a better conveyer of information is something of which we should all be cognizant.

> If I had more time, I would have written a shorter letter
>
> - Lincoln

## Why not use a prebuilt solution?

In a world where Wordpress and other Content-Management Systems dominate, why built something custom? If any website design is too difficult, platforms like [Substack](https://substack.com) and [Medium](https://medium.com) are tailor-made for blogging. Practically speaking, blogging is a solved problem technically.

The truth is a custom solution is unnecessary for the vast majority of use cases. However, the enthusiast may find several advantages to a custom solution.

### 1. Custom Code Enables New Experiences

Blogging-specific platforms are often considerably locked-down. Custom styles and code are often not supported. For most articles, anything beyond images is likely unnecessary. However, custom-code can create differentiated experiences. A couple I have enjoyed recently include:

- [FiveThirtyEight's Breakdown on Partisan Gerrymandering](https://projects.fivethirtyeight.com/partisan-gerrymandering-north-carolina/) which uses [D3.js](https://d3js.org) to create an interactive map of a state's political landscape
- [Astro's Documentation](https://docs.astro.build/en/getting-started/) uses in-documentation quizzes to foster active learning.
- [Vinay Bhaip's COVID Spotify Analysis](https://vinaybhaip.com/blog/2020/08/22/spotify-artist-viz)

### 2. Domain-Value Building

While some may claim the game of back link building is dead in the age of bots like [ChatGPT](https://chat.openai.com) and [Bard](https://bard.google.com), writing good, informed articles can help build up your personal brand's value. Sites in competitive categories such as the CMS [Builder.io](https://builder.io) maintain large open-source contributions and informative blogs, in part, to build domain value.

### 3. Quality Assurance

While writing high-quality content is hard, updating and ensuring accuracy over time is far harder. Is the information still up to date? If someone follows your tutorial, will they get the same result? Building your own site allows simple, customizable tools for ensuring quality.

A link checker is a prime example. Though many open-source options for link-checking exist, I currently use and have had success with [Gaurav Nelson's Markdown Link Checker](https://github.com/marketplace/actions/markdown-link-check). Every two weeks, the link-checker goes to each link to ensure it works. If a link does not work, the action fails and an email with all failing links is automatically sent to me.

Simple tools like this can help ensure quality over time and prevent information decay. While other platforms may have similar tools or plugins, the depth of pre-built &mdash; and ease of building custom &mdash; solutions ones is a major advantage.

> Put out high quality content
>
> - Every content creator when asked for advice

### 4. Markdown is Mine

The Markdown file format, `.md` and it's younger brother, `.mdx` are perhaps the most elegant way to write content for the internet. Put simply, Markdown is just a file, a file where text, links, images, headings and a bit of styling can be added. Because of how simple primitives are, markdown can be re-rendered if styles change.

Because markdown is just a file, it can be easily converted to other formats. For example, [Pandoc](https://pandoc.org) can convert markdown to PDF, Word, HTML and more. This is a great way to ensure that your content is not locked into a single format. Though other platforms may have features to try and spice up the writing experience, markdown is really all you need.

### 5. Centralized Analytics

Perhaps a niche concern for some, centralized analytics is a large concern for me. Multi-platform publishing on the internet is chaotic and figuring out what projects are doing well is incredibly hard to keep organized.

I use Google's [Looker Studio](https://lookerstudio.google.com) to have a weekly scheduled report sent to me about anything I have published. Though Looker supports integrations, such as YouTube analytics, most blogging sites (i.e. Medium and Substack) do not have easy analytics connectors. Going all-in on Google Analytics for my personal site gives a centralized map to learn about the impact of your writing.

![Looker studio setup monitoring personal report](../../blog/how-and-why-i-rebuilt-my-blog/looker-studio.png)

---

<!--TODO: Finish editing here -->

## Why Astro.js?

[Astro.js](https://astro.build/) is one million static site generators. Competitors like [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/) and [Gatsby](https://www.gatsbyjs.com/) all convert websites into a folder. In the folder, each page is a HTML file. The simplicity of static sites, paired with Astro's flexibility, make me think it was the perfect choice for me.

### 6. Deep JSX Integration

Markdown is alone insufficient to display a website. Each article needs some structured data (title, hero image, published date, etc.) to have enough context to render properly as a webpage. As a result, static site generators have developed proprietary scripting languages for writing custom templates. For instance, [Hugo](https://gohugo.io) uses a double curly brace syntax, `{{}}`, for template variables and functions.

```
{{ .Title }}
{{ add 1 2 }}
```

Astro takes a different approach. A React-like syntax is used to define templates &mdash; allowing for easy adoption &mdash; and making Astro an incredibly transferable skill. Both custom functions and loops feel very familiar to React developers. If a custom function is required, writing is incredibly easy.

```javascript
---
let title = "5 reasons I think Astro + GitHub pages works for me"
let sum = (a, b) => a + b;
---
<main>
  <h1>{title}</h1>
  <p>{sum(1,2)}</p>
</main>
```

While the syntax being nearly identical is great, Astro is not React. For my website, I had to write about 50 lines of disgusting, declarative code for my homepage's project filter functionality. However, I would consider that a small price to pay to avoid a heavy framework like NextJS.

### 7. NPM Ecosystem's Advantages

Astro is fundamentally built on top of the `node` ecosystem. The most important consequence of which is the node package manager (`npm`). The simplicity of publishing an **NPM** package, as well as the growing popularity of the web, made node's community into a force of nature. Never bet against the web. Never bet against the web. Never bet against the web. The javascript ecosystem &mdash; from full stack frameworks to [cli tools](https://github.com/wkaisertexas/tranzlate) &mdash; will always continue to surprise you.

Building this blog, two tools in particular:

- [Three.js](https:/threejs.org) to simplify displaying a stylized version of my desk setup
- [TailwindCSS](https://tailwindcss.com) to avoid having to touch raw CSS

```console
npm install left-pad
```

### 8. Good Enough Build Speeds

Hugo's advertisement of "millisecond build speeds" is incredibly stupid. Astro is fast enough, building my entire blog, including re-encoding images to web-optimized formats takes less than 5 seconds. No one cares. The developer experience is far more important. At the end of the day, all static site generators compile to a folder. There is no recurring cost to build speed.

![Blazing fast build speeds](../../blog/how-and-why-i-rebuilt-my-blog/fast.webp)

### 9. Direct Links to Assets

I recently wrote [Behind the Innovation: Insights Between The International Science and Engineering Fair (ISEF)](/blog/isef-analysis) which uses programmatically created graphs. With my own blog, I can have a direct link exists to each graph created and when a new year brings more projects. In other words, the article can be programmatically updated. On no other platform, can I have a like to an external image which automatically updates. Platforms will cache images natively to a Content Delivery Network for both performance and privacy.

Though minor in nature, tools like this make fighting information decay significantly easier. I try and stand behind everything I write. Especially, when writing about data and statistics, I want to ensure that the data is up to date. Tools like Astro make this much easier to do.

### 10. Avoid Vendor Lock-In

Platform have a tendency to exploit their members. The cycle of venture capitalists burning money to acquire customers with sweet deals up until someone does the math someone does the math and decides that companies _sort of have to make money_. [Rip. Heroku.](https://techcrunch.com/2022/08/25/heroku-announces-plans-to-eliminate-free-plans-blaming-fraud-and-abuse/) You can never put too much trust in a platform. However, you eventually have to trust someone, and I think GitHub pages is a good bet for the foreseeable future.

When looking at alternatives like [Vercel](https://vercel.com) and [Netlify](https://www.netlify.com/), GitHub is far better capitalized to lose money on pages, largely used to host blogs and websites for open-source projects, than Vercel and Netlify which could see pressures similar to those faced by Heroku. Serving a static site (effectively a folder) is the simplest way to host a website. Given the sheer number of open-source projects depending on pages for documentation, page's free tier will likely never go away. Even so, a static site provides near-zero switching costs.

## Conclusion

**Astro JS** was a great choice for my personal blog and portfolio site. Though making your own blogging site is not necessary, greater flexibility and control in terms of code, images, deployment solutions and analytics made this decision right for me. The JSX-like syntax of Astro made the framework easy to pick up. Javascript being at the core of development allowed a leveraging of the NPM ecosystem and things like dynamic linking and more Unlike React, NextJS or other frameworks, **Astro**'s static-site generation, the most atomic form of deployment providing greater security and durability against platform changes. _People who like to tinker and write would do well to try Astro._

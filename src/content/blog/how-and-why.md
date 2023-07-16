---
title: "10 reasons I rebuilt my blog in astro"
description: "Recently, I rebuilt my blog in Astro and deployed to GitHub pages. Reflecting on this process, I wanted to share some of the reasons why I think this setup is a great combination for me."
pubDate: "July 11 2023"
heroImage: "/blog/how-and-why/hero.png"
display: true
---

Recently, I rebuilt my blog in [Astro](https://astro.build) and deployed it to [GitHub pages](https://pages.github.com/). Reflecting on this process, I wanted to share some of the reasons why I think this setup is a great combination for me.

# Why write?

Writing is a deceptively egalitarian pursuit. Anyone can do it. Few do it well, yet good writing and the power in it is undeniable -- a great skill for life.

There is an extent to which school has failed writers. When grading the immense amounts of papers, the heuristic that longer tends to be better generally holds. The SAT Essay section found this when [MIT's Dr. Les Perelman found shorter essay evaluations predictive of longer scores](https://www.nytimes.com/2005/05/04/education/sat-essay-test-rewards-length-and-ignores-errors.html). As a result, brevity is not emphasized. Formal education has little alternative, so rather than being a critique, becoming a better writer is something we should be cognizant.

> "If I had more time, I would have written a shorter letter" 
> - Lincoln

# Why not use a prebuilt solution?

In a world where Wordpress and other Content-Management Services (CMS) dominate, why built something custom? If any website design is too difficult, blogging-specific platforms like [Substack](https://substack.com) and [Medium](https://medium.com) are tailor-made platforms. Blogging is practically a solved problem. 

The truth is, a custom solution is unnecessary for the vast majority of use cases. However, the enthusiast may find several advantages to a custom solution.

## 1. Custom Code Enabling New Experiences

Blogging-specific platforms are often considerably locked-down. Custom styles and code are often not supported. For most articles, anything beyond images is likely unnecessary. However, custom-code can create differentiated experiences:
- [FiveThirtyEight's Breakdown on Partisan Gerrymandering](https://projects.fivethirtyeight.com/partisan-gerrymandering-north-carolina/) which uses animations tied to scroll position using [D3.js](https://d3js.org) to show how a map affected a state's political landscape
- [Astro's Documentation](https://docs.astro.build/en/getting-started/) uses in-documentation quizzes to foster active learning.
- [Vinay Bhaip's COVID Spotify Analysis](https://vinaybhaip.com/blog/2020/08/22/spotify-artist-viz)

## 2. Domain-Value Building

While some may claim the game of back link building is dead in the age of AI Chatbot like [ChatGPT](https://chat.openai.com) and [Bard](https://bard.google.com), writing good, informed articles can help build up your personal brand value. Sites in competitive categories such as the CMS [Builder.io](https://builder.io) maintain large open-source contributions and informative blogs, in part, to build domain value. Unfortunately, I happen to share the name of a certain European Emperor, who tends to dominate the search results. 

## 3. Quality Assurance

Writing high-quality content is difficult, but managing and ensuring the quality of projects can be considerably difficult. Is the information still up to date? If someone follows your tutorial, will they get the same result. Simple, customizable tools can be built to ensure quality. 

A link checker is a prime example. Though many open-source options for link-checking exist, I currently use and have had success with [Gaurav Nelson's Markdown Link Checker](https://github.com/marketplace/actions/markdown-link-check). Every two week, the link-checker goes to each link to ensure it works. If a link does not work, the action fails and an email with all failing links in sent to me.

> Put out high quality content
>
> - Every content creator when asked for advice

## 4. Markdown is Mine

The Markdown file format (`.md`) and the older brother, `.mdx` are perhaps the most elegant ways to write content for the internet. Few sites need anything more than markdown to represent their content. Put simply, Markdown is just a file, a file which can be rerendered in a new template or style. 

## 5. Centralized Analytics

Perhaps a niche concern for some, centralized analytics is a large concern for me. Multi-platform publishing on the internet is chaotic and figuring out what projects are doing well is incredibly hard to figure out and keep track.

Personally, I use Google's [Looker Studio](https://lookerstudio.google.com) to have a weekly scheduled report to about anything published. Though integrations to YouTube analytics and more exist, most blogging sites do not have easy analytics connections. Going all-in on Google Analytics on the site to have a centralized map of where things are published is a great way to learn more about what you creating and the impact it has (my intention is to write a separate post about how I have setup looker studio and how to make custom integrations).

![Looker studio setup monitoring personal report](/blog/how-and-why/looker-studio.png)

--- 

# Why Astro.js

A million static site generators exist. Hugo, Jekyll, Gatsby and more all serve the same basic purpose of converting a website into a file folder. 

## 6. Deep JSX Integration

Markdown alone is insufficient to display a website. Each article needs some structured data (title, hero image, published date, etc.). As a result, static site generators have developed prop-scripting languages for defining custom templates. [Hugo](https://gohugo.io) uses a `{{}}` double curly brace syntax for variables. 

```
{{ .Title }}
{{ add 1 2 }}
```

Astro uses a React-like syntax to define templates makes learning Astro incredibly transferable as a skill. Custom functions and loops are very familiar in a react-like paradigm. If a custom function is required, writing is incredibly easy. 

```javascript
---
let title = "5 reasons I think Astro + GitHub pages works for me"
let sum = 1 + 2
---

<h1>{title}</h1>
<p>{sum}</p>
```

Astro is not React, however. I did have to write about 50 lines of disgusting, declarative code for my homepage's project filter functionality. 

## 7. NPM Ecosystem's Advantages

The Node Package Manager (`npm`) provides can interesting, custom function

Astro is fundamentally built on top of the `node` ecosystem. The node package manager (`npm`) contains so many tools to make incredible quality of life as a developer. 

Building this blog, two tools in particular:
 - [Three.js](https:/threejs.org) to simplify displaying a stylized version of my desk setup
 - [TailwindCSS](https://tailwindcss.com) to avoid having to touch raw css (raw css is disgusting)

## 8. Good Enough Build Speeds

Hugo's advertizement of "millisecond build speeds" is incredibly stupid. Astro is fast enough, building my entire blog, including reenconding images to web-optimized formats. 


```console
npm install left-pad
```

## 9. Direct Links to Images

I recently wrote [Behind the Innovation: Insights Between The International Science and Engineering Fair (ISEF)](/blog/isef-analysis) which uses programmatically created graphs. On no other platform, can I have a like to an external image not get reuploaded to the native CDN and recompiled to whatever format the platform finds preferable. Instead, a direct link exists to each graph created and when there is a new year, the article can be programatically updated. 

Though minor in nature, tools like this make fighting information decay significantly easier as an individual. 

## 10. Don't get fucked by vendors

Platform changes have a tendency to screw over members, the cycle of venture capitalists burning money trying to get everyone on board at the party until someone does the math and decides that companies sort of have to make money is all too common. Rip. Heroku. 

When looking at alternatives like [Vercel](https://vercel.com) and [Netlify](https://www.netlify.com/), GitHub pages is more solid bet. Serving a static site (effectively a folder) is the simplest way to serve a website. Given the sheer number of open-source projects depending on pages for documentation, page's free tier will likely never go away. Even so, with a static site, switching back is dead-simple. 

# Conclusion 

**Astro JS** is a great choice for a personal blog. Though making your blog is not necessary, greater flexibility and control in terms of code, images, deployment solutions and analytics made this decision right. Unlike React, NextJS or other frameworks, **Astro**'s static-site generation, the most atomic form of deployment providing greater security and durability to platform changes. People who like to tinker and write would do well to try Astro.
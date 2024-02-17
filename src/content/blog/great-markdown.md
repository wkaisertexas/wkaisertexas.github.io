---
title: "Take 15 minutes to become a Markdown great"
description: "On a effort versus payoff matrix, getting good at Markdown is the greatest investment you can make as someone interested in development. I decided to read through the entire Markdown specification and here are the essentials."
pubDate: "May 7 2023"
heroImage: "hero.png"
display: true
---

I decided to read through the entire GitHub-flavored Markdown specification and here are the essentials plus some tips and tricks you should know. Markdown is important because on a effort versus payoff matrix, getting good at Markdown is the greatest investment you can make as an aspiring developer.

Markdown, `.md` is a language for describing the **structure** of documents which bears some similarity to Hyper Text Markup Language (HTML) but is far less verbose. Often, Markdown is an intermediary and eventually rendered down into HTML for display on the web. Markdown’s basic syntax has made it a favorite for documentation of developers and platforms alike. GitHub's adoption of Markdown has made it the de facto standard for documentation.

## Why is markdown important?

Writing documentation is a great way to communicate your impact on development teams. Ideally, each piece of documentation is a lay-parsable guide to what you did and why you did it. This is important because:

- **Documentation is a force multiplier**. The more people who can understand your work, the more people can build on top of it. This is especially important for open source projects.
- **Documentation is a great way to learn**. Writing documentation forces you to think about what you are doing and why you are doing it. While time-consuming, spending the time developing proper documentation is a great way to learn.
- **Documentation is a great way to get hired**. If you are looking for a job, having side projects with good documentation and not just code conveys impact to those who may not necessarily be technical.
- **Documentation is a great way to get promoted**. If you are looking to get promoted, having a portfolio of documentation is a great way to show off your skills in a way that is easy to understand.

Given the importance of documentation, mastering Markdown is a simple way to give yourself the toolbox to write great documentation. Compared to everything else required to be a great developer, Markdown is a low-effort, high-reward investment.

## Markdown Basics

The most common tag you will run across is the header tag (`#`). Functionally, this is identical to a header in a word document. For nested subheadings, multiple `#` s can be used. For those familiar with HTML, the number of tags is equivalent to the number of `#` s

| Markdown |  HTML  |
| :------: | :----: |
|   `#`    | `<h1>` |
|   `##`   | `<h2>` |
|  `###`   | `<h3>` |
|  `####`  | `<h4>` |
| `#####`  | `<h5>` |
| `######` | `<h6>` |

Bolding, italics and strike through are handled using the `*` and `~` keys. Depending on the number of `*`, the text is rendered differently.

|     Markdown Code     |    Rendered Text    |
| :-------------------: | :-----------------: |
|      `*italics*`      |      _italics_      |
|      `**bold**`       |      **bold**       |
|  `***bold+italic***`  | **_bold + italic_** |
| `~~strike through~~ ` | ~~strike through~~  |
|    `x<sup>2</sup>`    |    x<sup>2</sup>    |
|    `x<sub>2</sub>`    |    x<sub>2</sub>    |

## Code blocks

Code blocks are created using the triple backtick syntax. The language of the code block _can_ be specified after the first set of backticks. This is useful for syntax highlighting. For this, markdown separates inline code with `~` (the tilde key). To place code inline, surround your code with a tilde `my code` and place a separate chunk of code with:


<pre>
```python
from random import choice
choices = [1, 2, 3, 4]
print(choice(choices))
```
</pre>

> Putting the language next to the code signals dramatically improves the quality of syntax highlighting. Though the language is optional, it is highly recommended (and often missed).

Lists in markdown can either use `-` , `*` or `+` . Adding `[ ]` and `[*]` creates a completed and uncompleted task in markdown, respectively. Numbers with a trailing period such as `1.` create an ordered, numbered list.

```
- this is a bullet
* this is also a bullet
+ this is also a bullet
1. [ ] this is the first thing I have to do
2. [x] this is the second this that I have to do.
```

## Images

Images can be created using the syntax of `![Alt(ernative) text of the image](./path/to/image.png)`. By default, images are right-aligned. Unfortunately, chaining the alignment is not easy and requires a bit of custom code.

## Links

Creating links uses a similar syntax to images, but omits the `!` . `[Google](https://google.com)` is rendered as [Google](https://google.com/). The text inside the `[]` is displayed to the user and the link is inside the `()` . Of course, you can always have a link display as itself (eg. `[https://google.com](https://google.com)`)

> For external links, the `http` or `https` syntax is required.

**Relative links** are made with the relative path such as `[documents](./docs/my_document.md)`

Section links to specific `#..` tags are very similar. Use `[my section](#my-section` to create the think, replacing non-alphanumeric characters with a dash. However, two dashes can not be in a row.

> There is a bug in Visual Studio code’s most popular markdown extension as of writing. Relative links to a heading with an emoji will not work. The syntax with a leading `#-food` with a leading `—` when the section starts with an emoji is correct and what works on Github.
>
> \# 🍎 food

## Footnotes

Adding more context through footnotes is done by starting a footnote with `[^1]` and then later defining the footnote using:

```markdown
[^1]: The definition of "with" is a preposition which has one meaning of to contain
```

## Math

Most markdown specifications support MathJax which renders [LaTex-Style Math](https://www.overleaf.com/learn/latex/Mathematical_fonts). Using a single `$` will produce an inline mathematic expression, whereas `$$` will produce a separate mathematical block.

```
$$\sum{x}$$
```

$$\sum{x}$$

If you have any formatting that you do not like, you can always escape it with the `\` character.

## Emoji

The right way to use emoji is to contain the code for each emoji with `:` (ex. `:1:` . While this may have some theoretical benefits as systems without emoji fonts installed may have trouble rendering them, no one cares. Just use emoji like regular text. Emoji is much easier.

## More advanced usage

In this section, we will cover adding custom code to increase interactivity.

The [Markdown Guide](https://www.markdownguide.org/) supports adding basically any custom HTML element with the standard tax syntax (`<></>`). However, unrestricted extensions present major cross site scripting and privacy vulnerabilities for sites like GitHub, so custom Javascript or CSS is not allowed. However, basic functionality is still permitted:

```markdown
<div align="center">
  <img alt="Project Logo" src="./logo.svg" />
</div>
```

If displaying all the information about your project could potentially be overwhelming to your user, consider creating a expandable section.

```
<details>
  <summary>Shown when closed</summary>
  <h3>This is the title of what is shown when opened</h3>

  This is the body of what is shown when opened
</details>
```

<details>  
  <summary>Shown when closed</summary>
  <h3>This is the title of what is shown when opened</h3>
  
  This is the body of what is shown when opened
</details>

## Top-tier Markdown

So far, we have converged the basic and intermediate use of Markdown. Going past this, however, requires introduction to Markdown variants. Because when writing documentation, more functionality can be required than the standard syntax.

- **Extension frameworks** like Stripe’s, [MarkDoc](https://markdoc.dev/) allows documentation to have code examples in multiple languages.
- **Custom Plugins** allow new types of elements within the Markdown format.

## Mermaid JS

Mermaid JS allows for diagrams to be created in Markdown. From UML to pie charts to flow charts, Mermaid JS allows these to be created with a minimalistic syntax. Create a code block with the language specified as `mermaid` and GitHub will automatically transform this code into a chart.

Here is a basic UML class diagram described in Markdown:

```mermaid
---
title: Animal Example
---
classDiagram
note "From Duck till Zebra"
Animal <|-- Duck
note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
Animal <|-- Fish
Animal <|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()    Animal: +mate()    class Duck{        +String beakColor        +swim()        +quack()    }    class Fish{        -int sizeInFeet        -canEat()    }    class Zebra{        +bool is_wild        +run()    }
```

<figure>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*tdyb3bIQ-D1tHJopx_PDgw.png" alt="image rendered in browser" />
<figcaption>Mermaid JS Rendered in Browser</figcaption>
</figure>

GitHub also supports [GeoJSON](https://geojson.io/) and it’s topology extension [TopoJSON](https://github.com/topojson/topojson). Creating interactive maps could not have been simpler.

<!-- prettier-ignore -->
```geojson
{
  "type": "Polygon",
  "coordinates": [
    [
      [30, 10],
      [40, 40],
      [20, 40],
      [10, 20],
      [30, 10]
    ]
  ]
}
```

Finally, STL. If you can believe it, GitHub supports embedding **STL FILES directly into your screen!?!**

Adding an STL does not event require a specific code block, add a script tag with the source of STL file and GitHub will automatically render it.

```
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

<iframe height='420' width='620' frameborder='0' src='https://viewscreen.githubusercontent.com/view/solid?url=https%3a%2f%2fraw.githubusercontent.com%2fskalnik%2fsecret-bear-clip%2fmaster%2fstl%2fclip.stl' title='clip.stl'></iframe>

## Why not just use external software?

One may argue that _Google Earth_ is better for creating custom maps and _Figma_ or _Draw.io_ is better suited to creating custom diagrams. These are most certainly fair points, but a few considerations need to be taken into account:

- _Mermaid JS_ and _GeoJSON_ in particular are really powerful and provide for lots of customizability.
- Writing text is just faster somethings
- Integration with version control. The convince of having documentation, GeoGraphic data and more all be integrated within a single repository is a lifesaver for teams. No more, the _Figma_ file is not shared or where did I store that drawing in my Google Drive.

## Summary

Consistently learning and applying these rules likely places you within the top 1% of markdown writers. In the technology world, compared to nearly any other investment on your time, you will not get a gain so great as learning to use markdown effectively.

Aside for communication in repositories, Markdown has now become a popular format for note taking apps like [_Obsidian_](https://obsidian.md/) and a LaTeX replacement, [Typist](https://typist.app/).

> A word of caution. When all you have is a hammer, everything becomes a nail.
> Remember this adage. Use newer markdown features like salt. A bit is good. Too much is disgusting.

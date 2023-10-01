---
title: "Take 15 minutes to become a Markdown great"
description: "On a effort versus payoff matrix, getting good at Markdown is the greatest investment you can make as someone interested in development. I decided to read through the entire Markdown specification and here are the essentials."
pubDate: "May 7 2023"
heroImage: "/blog/great-markdown/hero.png"
display: false
---

On a effort versus payoff matrix, getting good at Markdown is the greatest investment you can make as someone interested in development. I decided to read through the entire Markdown specification and here are the essentials.

Markdown (`.md`) is a language for describing the **structure** of documents. Markdown bears some similarity to HTML but is far less verbose. Markdown is intended to be rendered into HTML. Markdown’s basic syntax has made it a favorite of GitHub for documentation. Even large companies like Stripe use variants of markdown for their documentation.

> Markdown was invented in part the legendary Aaron Swartz who also created RSS and the creative commons license.

## Why is markdown important?

Writing good documentation is one way to make a communicable impact. Creating good work artifacts can help better convey your impact within an organization.

## Markdown Basics

The most common tag you will run across is the header tag (`#`). Functionally, this is identical to a header in a word document. For nested headings, multiple `#` s can be used in series for subheadings. For those familiar with HTML, the number of tags is equivalent to the number of `#` s

| Markdown |  HTML  |
| :------: | :----: |
|   `#`    | `<h1>` |
|   `##`   | `<h2>` |
|  `###`   | `<h3>` |
|  `####`  | `<h4>` |
| `#####`  | `<h5>` |
| `######` | `<h6>` |

Bolding, italics and strike through are handled using the `*` and `~` keys.

|     Markdown Code     |    Rendered Text    |
| :-------------------: | :-----------------: |
|      `*italics*`      |      _italics_      |
|      `**bold**`       |      **bold**       |
|  `***bold+italic***`  | **_bold + italic_** |
| `~~strike through~~ ` | ~~strike through~~  |
|    `x<sup>2</sup>`    |    x<sup>2</sup>    |
|    `x<sub>2</sub>`    |    x<sub>2</sub>    |

## Code blocks

Code is fundamentally different from other forms of text because it often uses the same syntax as other languages. For this, markdown separates inline code with \` (the tilde key). To place code inline, surround your code with a tilde \``my code` \` and place a separate chunk of code with:

```python
from random import choice
choices = [1, 2, 3, 4]
print(choice(choices))
```

> Putting the language next to the code signals is what makes syntax highlighting (colors) work properly. Missing this is one of the most common mistakes I have seen in GitHub documentation.

Lists in markdown can either use `-` , `*` or `+` . Adding `[ ]` and `[*]` creates a completed and uncompleted task in markdown, respectively. Number with a trailing dot, `1.` create an ordered, numbered list

```
- this is a bullet
* this is also a bullet
+ this is also a bullet
1. [ ] this is the first thing I have to do
2. [x] this is the second this that I have to do.
```

## Images

Images can be created using the `![Alt(ernative) text of the image](./path/to/image.png)` syntax. Images are right-aligned by default. Changing this behavior requires a bit of custom code which will be mentioned later.

## Links

Creating links uses a similar syntax to images, but omits the `!` . `[Google](https://google.com)` is rendered as [Google](https://google.com/). The text inside the `[]` is displayed to the user and the link is inside the `()` . Of course, you can always have a link which displays and goes to the same place (eg. `[https://google.com](https://google.com)`

> For external links, the `http` or `https` syntax is required.

**Relative links** use the relative path such as `[documents](./docs/my_document.md)`

Section links to specific `#..` tags are very similar. Use `[my section](#my-section` to create the think, replacing non-alphanumeric characters with a dash. However, two dashes can not be in a row.

> There is a bug in Visual Studio code’s most popular markdown extension as of writing where relative links to a heading with an emoji present will not work. The syntax with a leading `#-food` with a leading `—` when the section starts with an emoji is correct and what works on Github.
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
$\sum{x}$

$$\sum{x}$$
```

If you have any formatting that you do not like, you can always escape it with the `\` character.

## Emoji

The right way to use emoji is to contain the code for each emoji with `:` (ex. `:1:` . While this may have some theoretical benefits as systems without emoji fonts installed may have trouble rendering them, no one cares. Just use emoji like regular text. Emoji is much easier.

## More advanced usage

In this section, we will cover adding custom code to increase interactivity.

The [Markdown Guide](https://www.markdownguide.org/) supports adding basically any custom HTML element with the standard tax syntax (`<></>`). However, unrestricted extensions present major cross site scripting and privacy vulnerabilities for sites like GitHub, so custom Javascript or CSS is not allowed. However, basic functionality is still permitted:

```markdown
<div align="center">
  ![Project Logo](./logo.svg)
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

```geojson
{
  "type": "Polygon",
  "coordinates": [
    [
      [
        30,
        10
      ],
      [
        40,
        40
      ],
      [
        20,
        40
      ],
      [
        10,
        20
      ],
      [
        30,
        10
      ]
    ]
  ]
}
```

Finally, STL. If you can believe it, GitHub supports embedding STL files directly into your screen.

Because manually writing this data, using a script tag can auto-detect the correct formatting method to use for the underlying data, saving you time.

```
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

## Why not just use external software?

One may argue that _Google Earth_ is better for creating custom maps and _Figma_ or _Draw.io_ is better suited to creating custom diagrams. These are most certainly fair points, but a few considerations need to be taken into account:

- _Mermaid JS_ and _GeoJSON_ in particular are really powerful and provide for lots of customizability.
- Writing text is just faster somethings
- Integration with version control. The convince of having documentation, GeoGraphic data and more all be integrated within a single repository is a lifesaver for teams. No more, the _Figma_ file is not shared or where did I store that drawing in my Google Drive.

## Summary

Consistently learning and applying these rules likely places you within the top 1% of markdown writers. In the technology world, compared to nearly any other investment on your time, you will not get a gain so great as learning to use markdown effectively.

Aside for communication in repositories, Markdown has now become a popular format for note taking apps like [_Obsidian_](https://obsidian.md/) and a LaTex replacement called [Typist](https://typist.app/).

> A word of caution. When all you have is a hammer, everything becomes a nail. This adage is also relevant here. Use newer markdown features like salt (ie. too much is bad).

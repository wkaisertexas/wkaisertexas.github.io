# Starter Blog + Portfolio Site

After the unmaintainable train wreck which was my past blog and portfolio website, simplifications were in order to more effectively communicate what I do as a programmer. 

## Technology

**Astro** forms the near-perfect minimalist framework from which to build a blog. Enough customizability exists in `.astro` files through leveraging the `.md` and `npm` ecosystems to create a great blog. Through **GitHub** pages, the site was able to be deployed so easily and assets be managed with a breeze.

Common libraries like **TailWindCSS** were instrumental in getting a common and consistent styling.

## Design-Doc Style

Projects will use the design-document style to provide a consistent way to explain each project. Style comes from *[How to write a good software design doc](https://www.freecodecamp.org/news/how-to-write-a-good-software-design-document-66fcf019569c/)*.

- Context and scope
- Goals and non-goals
- Design
- APIs
- Data Storage
- Code / Pseudo Code
- Degree of Constraints
- Alternatives Considered
- Cross-cutting concerns

## What *Astro* can't provide

While the benefits of *Astro* are numerous in terms of simplicity, the ability to add contact and email-list support is not default. 

- [MailChimp](https://us21.admin.mailchimp.com) is used for mailing-list management using [wkaisertexas@gmail.com](mailto:wkaisertexas@gmail.com)

## Analytics

Because I love tracking things, Google Analytics will be included on every page through PartyTown as per Kevin's [blog](https://www.kevinzunigacuellar.com/blog/google-analytics-in-astro/).

## Cookbook

I was originally going to write our family cookbook in [mdbook](https://rust-lang.github.io/mdBook/) for the memes. However, not wanting to write a custom preprocessor to convert yaml to HTML, the second-best option was building a custom astro converter. 

A pretty basic markup of ingredients and instructions (plus a couple of other things) is rendered into both a standard template as well as [structured data](https://developers.google.com/search/docs/appearance/structured-data/recipe) to be available in Google Search.

## Articles

Articles are important and a key point of differentiation, a way to build repository and more. Adding [structured data](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) would also be interesting. An author is basically all it is. There are also how-to guides which are interesting.

## Theme

A highly-customizable theme is a must and tailwind will play a role in that. However, proper CSS has not been my strongest suit (I use too many div). 

Some ones which I liked: 
- [brutal](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) a brutalist site which i found refreshing and Google-esque.
- [portfolio with a blog](https://demo.maxencewolff.com) was good. However, too minimal for me.

Google's design specification plus notes: 
- Google has some things about variable type interfaces which talk about animation, simplicity of interaction and more. Furthermore, [v-fonts](https://v-fonts.com/tags/C20) has some really interesting demos for variable fonts, particularly Merit Badge.
Font decisions:
- Ysabeau SC is interesting as well
- Helvetica seems like a good choice overall. 

A great [book on type](https://static.googleusercontent.com/media/fonts.google.com/en//knowledge/stop_stealing_sheep.pdf) from Google. Some notes from this book:
- Grids are **unreasonably effective** I really need to exploit these.
- Darker fonts add to the weight of a letter. To be perceived as the same weight, a lighter font must be larger.


[New York Subway font](https://nycsubwayfont.com/#:~:text=HISTORY%20OF%20THE%20SUBWAY%20TILES,enamel%2C%20and%20hand%20painted%20signage.) is something I really like through it's inclusion in the Clarke library. 

Germanic typefaces were legible back in the day, but these have aged less well.


### Stripe's influence

I am really liking Stripe and the influence which stripe can have. The 5-column layout is really nice and will be the basis for the blog setup.



## RSS 

RSS is a great way to get updates, and may not actually be as dead as some people may think.

So, a `.rss` file format is needed. So, the file name will change to `feed.rss` so that this can be recognized.

---

```
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!


![blog](https://user-images.githubusercontent.com/4677417/186189140-4ef17aac-c3c9-4918-a8c2-ce86ba1bb394.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

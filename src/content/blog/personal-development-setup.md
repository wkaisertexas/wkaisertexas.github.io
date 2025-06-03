---
title: Breaking down my personal development setup
description: Go-to references for configurations and custom-build tools. Includes tools for copy-pasting context into large language models. Largely published so I can quickly graph this stuff on my work computer! 
pubDate: June 2 2025
heroImage: hero.png
display: true
---

This blog post covers the tools I use and the configurations that I have found to work well for me personally. For context, most of these come from doing development as part of [Cavalier Autonomous Racing](https://autonomousracing.dev/). Development here is, by and large, more informal than the professional settings where I have worked. Therefore, these tools seek to strike a balance between being effective and strict and onerous.

A good example of this tradeoff is implicit conversions between `float` <-> `double`, `size_t` <-> `uint32_t` and `int32` <-> `long64`. Spamming `static_cast` does not really make your program any better.

With that framing here are my configurations:

- `.clangd` or `~/.config/clangd/config.yml` ([link](https://raw.githubusercontent.com/wkaisertexas/wkaisertexas.github.io/refs/heads/main/src/content/blog/personal-development-setup/.clangd))
- `.clang-format` or `~/.config/clang-format` ([link](https://raw.githubusercontent.com/wkaisertexas/wkaisertexas.github.io/refs/heads/main/src/content/blog/personal-development-setup/.clang-format))
- `.clang-tidy` or `~/.config/clang-tidy` ([link](https://raw.githubusercontent.com/wkaisertexas/wkaisertexas.github.io/refs/heads/main/src/content/blog/personal-development-setup/.clang-tidy))

## Aliases

My helpful aliases for Linux.

```bash
alias pbcopy="xclip -sel clip"
```

## Tools

- [cpp-ctx](https://raw.githubusercontent.com/wkaisertexas/wkaisertexas.github.io/refs/heads/main/src/content/blog/personal-development-setup/cpp-ctx.py) is a uv self-installing script for passing context into large language models about your local development setup. This properly formats everything into markdown block quotes, gives the file's source location and more to give llms more information about your local workspace.
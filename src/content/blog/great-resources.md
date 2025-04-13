---
title: "Great Resources"
description: "A collection of good resources I have found and enjoy on the internet. An ongoing project"
pubDate: "April 19 2024"
heroImage: "hero.png"
display: false
---

This is an ongoing post which represents resources I enjoyed using to learn about new things. I have broken it down by category. Any ordering is unintentional.

## Blogs

- [How to Optimize a CUDA Matmul Kernel for cuBLAS-like Performance: a Worklog](https://siboehm.com/articles/22/CUDA-MMM) covers how to optimize matrix multiplication kernels to perform like CuBlas
- [How to write good prompts: using spaced repetition to create understanding](https://andymatuschak.org/prompts/) goes into techniques for learning. The author actually argues in some of his other posts that tasks which a lay-person may assume are more intellectual in nature are actually highly memory bound tasks, exemplifying the importance of memory.
- [Entropy from First Principles](https://www.nathom.dev/blog/entropy/) finally gave me an intuitive explanation for entropy (a tall order).

## Books

- [Reinforcement Learning by Sutton and Barto](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf) is a classic for machine learning
- [Elements of Statistical Learning](https://www.google.com/search?q=elements+of+statistical+learning&oq=Elements+of+Statistical+Learning) is another classic
- [Any Stripe Press Book](https://press.stripe.com/). I have read a few of these, overall all fantastic reads. Also, everything about these books from the site to the cover to the pages themselves are beautiful.
  - [Working in Public](https://press.stripe.com/working-in-public) helped me articulate open-source, and the complicated incentives at play, to people unfamiliar with the subject
  - [Poor Charlie's Almanack](https://press.stripe.com/poor-charlies-almanack)

## Videos

- [Coffee Before Arch's CUDA Crash Course](https://www.youtube.com/watch?v=cuCWbztXk4Y&list=PLxNPSjHT5qvu4Q2UElj3HUCh2lpSooQWo) goes in-depth for CUDA programming

## Podcasts

- [Dwarkesh Patel Podcast](https://www.dwarkeshpatel.com/podcast) is a "highly, but still underrated" podcast in with the interviewer Dwarkesh, spends an enormous amount of time preparing for interviews as [The future belongs to those who prepare like Dwarkesh Patel](https://meridian.mercury.com/dwarkesh-patel/).

## YouTube Channels

This is broken out because these are channels which are specifically interesting to me. If I miss any obvious ones, like 3Blue1Brown, that is okay, because my goal here is to feature lesser known channels which have differentiated content.

- [Breaking Taps](https://www.youtube.com/@BreakingTaps) is a channel that introduced me to the idea that there are some people out there who build hobby silicon projects.
- [Mutual Information](https://www.youtube.com/@Mutual_Information) has some good videos which I liked. Two in particular were:
  - [Why Do Neural Networks Love the Softmax?](https://www.youtube.com/watch?v=p-6wUOXaVqs)
  - [The Boundary of Computation](https://www.youtube.com/watch?v=kmAc1nDizu0&t=101s) which is on the Busy Beaver numbers
- [Stuff Made Here](https://www.youtube.com/c/StuffMadeHere) is a channel who slowed down a bit in recent years. I remember when they published a video every two weeks of a high-quality project which would have taken hundreds of hours. Insane work ethic and this kind of paints an aspirational picture of what an engineer can be and accomplish in my mind.

## Tools

Well-tested tools often overlooked in the LLM-powered ai code generator madness.

- [GitHub Code Search](https://github.com/features/code-search), cleverly used, can be used to find code examples for niche problems. Often, I have found `".method_name("` to search for method invocations, then language filtering, plus adding some keyword loosely associated with the project is enough to filter down to a couple of relevant results. This works because there are orders of magnitude more uploaded code than articles or Stack Overflow issues. In my experience, if a relevant snippet can found, trying it yourself works 90%+ of the time. Code search is the first thing I turn to break through a plateau in a software project.
  - Finding out how to [collect LTTNG traces in Docker](https://github.com/wkaisertexas/ros2_tracing_cpp?tab=readme-ov-file#collecting-traces-in-docker) was a recent example where code-search (specifically one-result) saved me and let me figure out how to make tracing working in out Docker-based testing environment as part of [Cavalier Autonomous Racing](https://autonomousracing.dev/)
- [LLVM Toolchain](https://llvm.org/) is the closest thing I have found to a free lunch for C / C++ development I have found in a while.
  - [clang](https://clang.llvm.org/) is faster than GCC and produces faster binaries. Unless you have a legacy project or some very special use cases, there is no reason to *not* use it.
  - [clangd](https://clangd.llvm.org/) is the best LSP for C / C++ projects
  - [clang-tidy](https://clang.llvm.org/extra/clang-tidy/) is useful for cleaning up large-scale software projects so you do not see so many issues in clangd (lol).
  - [clang-format](https://clang.llvm.org/docs/ClangFormat.html)
  - [lld](https://lld.llvm.org/) is just a faster-linker and support thin lto which is a godsend for maintaining build speed which still enabling [Link time optimization](https://www.llvm.org/docs/LinkTimeOptimization.html)
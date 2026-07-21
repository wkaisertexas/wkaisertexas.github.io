---
layout: ../layouts/UserGuide.astro
title: "Will Kaiser — A User’s Guide"
description: "How I work and how to work effectively with me."
---

# Will Kaiser — A User’s Guide

How I work and suggestions for working effectively.

## Where I usually add value

- *Asking dumb questions* — Asking potentially “stupid” questions to understand a problem more clearly.
- *Technical communication* — Documentation should be unambiguous. The iterative process of writing, revising, and seeking feedback is a core requirement rather than an afterthought.
- *Understanding speed = simplicity* — If a system is fast, you can avoid complexity. Caching, distributed computing, and thread synchronization can all be avoided if the system is simply fast.[^speed] Speed is a feature; put effort into writing fast code.

> "Adding power makes you faster on the straights. Subtracting weight makes you faster everywhere."
> - Colin Chapman, Founder, Lotus Cars

## Where I need the most support

- *DX / workflows* — Small, pragmatic tips about how to be productive in a codebase often have an outsized impact. Comments like “use *direnv*” or “run *mypy* before SITL runs” can save hours, especially when using coding agents.[^workflows]
- *Government buying processes* — I have a weak intuition for customer values. Understanding how government programs are formed, funded, and executed is non-core, but something I want to better understand over time.
- *Feedback on judgment and taste* — I value direct, specific feedback. Err on the side of blunt over diplomatic.[^feedback]

## What impresses me most in a manager

- *Pricing work* — Understanding whether a change is net-positive is not that difficult. Saying that a particular change is worth its associated engineering hours is much harder. Ensuring that you are paying the “right” price for work is difficult, especially when benefits may not show up immediately and government feedback lags.
- *Performance management* — Enabling people to do work and intervening successfully is hard. It is a non-technical problem that requires a lot of judgment.
- *Strategy* — Building confidence in opinions about direction is hard. You can be uncertain about the future and more often right, or have a clear picture of the future that is more useful to build toward even if it is imperfect. Choosing and cultivating that strategy is impressive.

## What I value in peers

- *Principled approaches* — Well-thought-out, opinionated beliefs on software design. Anduril’s use of Nix, especially.

## About me

My name is Will Kaiser. I am from Houston, Texas. Growing up, I was a big poker player. Since my dad frequently hosted games, I could tag along. Being able to play against adults as a ten-year-old was a unique experience and a fun source of spending money.

I got a computer at age twelve and used it to make Minecraft mods, first in Java and then switching to Python for convenience.

For high school, I went to the Academy of Science and Technology, a place where science fair is a way of life. Using open data, I calculated that we had sent more people to the International Science and Engineering Fair than anywhere else. I have an innate curiosity and use my current skill set to understand the world more deeply. In this case, that meant taking assumptions and common advice about science fair and using concrete data to prove or disprove them.

<!-- I am a self-taught Figma and Figma Slides user. Though I am bad at it, I am trying to get better at design. My portfolio site was developed from scratch using the Stripe blog as heavy inspiration. -->

I am a lifelong learner and believe strongly in taking classes simply for the pleasure of it, whether through edX or similar sites.

I went to the University of Virginia, where I majored in Computer Science.

I have many open-source projects. TimeLapze is a macOS utility for creating time-lapses of your screen. TikTok Uploader is a Playwright browser automation project that was turned into a PyPI project. ROS 2 Tracing C++ is a set of analysis sinks for LTTng trace-statistics collection from ROS 2 nodes.

In college, I primarily worked on Cavalier Autonomous Racing, where I worked on perception on track, integrating a new radar-detection pipeline and cameras. Outside of track, I set up the CI/CD process; ensured no memory leaks occurred on track; kept build times manageable; created open-loop validation pipelines for vehicle models; built visualization libraries for overlaying data on social media; wrote camera drivers to collect PCAPs on track; set up a Sphinx documentation site; improved performance by swapping the allocator for jemalloc; and worked on toolchain optimization, address sanitizers, and code coverage. This was the necessary legwork to ensure reliable software operation.

In my last semester, Charlie Meyer and I built an autonomous couch using eleven kilowatts of BLDC motors, a Jetson Nano, a five-dollar couch, a battery large enough to get seized at customs, and an iPhone 16 Pro.

I am currently a software engineer at Anduril, joining after an internship during the summer of my junior year. During my internship, I worked on a validation suite for the Platform in a Box (PIAB) representation of Anduril and other Group 5 autonomous vehicles. Beyond this initial project, I built a command-line interface for the easy manipulation of trajectory specifications, which helped augment motion-planning test-case generation workloads. Finally, I stayed on for a few months after the summer to work on the software verification and validation (V&V) team in preparation for Fury’s first flight.

*Fun fact:* I was held back in Pre-K.[^prek]

## Credits

I was inspired to write this by [*Scaling People* by Claire Hughes Johnson](https://www.scalingpeople.com/) and the [Gopal User Guide](https://www.linkedin.com/in/gkvthoughts/).

[^workflows]: I once wrote “clone the repo into your home directory (*~*)” at Cavalier Autonomous Racing because several scripts assumed that location. When someone’s scripts broke because it was not in their home directory, I asked them about it. They said, “I cloned it into my home directory, but then I copied it.”

[^speed]: My favorite example is Jane Street writing [an exchange which relies on a single x86 thread](https://www.janestreet.com/tech-talks/building-an-exchange/).

[^feedback]: From the global *CLAUDE.md*: “Explain things with the in-your-face style of a C++ developer on a forum.”

[^prek]: I remain bitter about this: while I was undoubtedly a dumbass in Pre-K, being singled out as more of a dumbass than every other student is still perplexing.

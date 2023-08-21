---
title: "⚡️ Millennium Power"
description: "HooHacks 2023 Submission -- Environmentally focused game designed to explain power complexity management"
repository: "https://github.com/wkaisertexas/HooHacks2023"
builtWith: ['nextjs', 'react', 'firebase']
display: false
---

# Context and scope

Millennium Power was our HooHacks 2023 submission in the Sustainability track. Of interest to us was:

> As the world adapts to newer technologies, how can we prevent efforts against sustainability?

As a team, we were concerned with uniformed, often politicized opinions on the use of renewable energy in the electricity grid. Someone which has lead to significant backlash.

This, combined with an inspiration from Bloomberg's American Mall lead us to come up with Millennium Power.

# Goals and non-goals

The goal of Millennium Power was to teach two things: the difficulty of power grid management and the value a diverse range of renewable energies can have on stabilizing the power grid. Doing so through an interactive experience.

Creating a re-playable game was a non-goal of this project.

# Design

You are the grid manager of tinyville, a small town challenged with managing the power grid for a rapidly growing town at the start of the new millennium (2000 CE) to the present.

This town wants many things: cheap, reliable power and a high quality of life through low pollution.

You are given a vast array of technologies at your disposal: solar, wind, nuclear, coal, natural gas, hydro-eletric and geothermal.What you decide to use is up to you.

In total, the game is expected to take 15 minutes for a complete play through. This could be significantly shorter depending on whether or not you are able to effectively manage power usage.

A crippling number of choices to make. An unending stream of citizens all too eager to make complaints. A growing town with rapidly changing energy needs all serve to make the game chaotic. A clear parallel to the intentionally depressing outcome of American mall: Amazon's takeover.

This hopefulness is integration to both American Mall and Millennium Power. Upon this, the foundational lesson that: structural economic reasons are the primary driver behind decisions made.

# APIs

The game is built using **React** with a **NextJS** framework hosted on **Firebase**. *Styling is done through **TailwindCSS** and the game is rendered in a CSS grid.

# Data Storage

No persistent data is stored of the user's device. Replay-ability is a non-goal of this project.

# Code / Pseudo Code

```python

calculate_power_demand()
calculate_power_supply()

calculate_effect_of_unhappy_power_supply_on_citizens()
```

# Degree of Constraints

This project took place over a two-hour hackathon. As a result, the game's performance suffered (this eats ram) and the group's lack of intimate knowledge with WebGL and drawing sprites on canvases did not help. All in all, we though the art style and progress made during this time represented an interesting exploration about explaining the challenges and complexities to grid management.

# Alternatives Considered

Using Unity in a sprite-based system was considered. However, difficulties in creating a team environment and project setup lead to the team choosing a React-Firebase solution for ease of deploy

# Cross-cutting concerns

Ensuring information accuracy while trying to create a game which is engaging enough is of significant concern. Especially since misconceptions created, unintentional or otherwise could play into user's beliefs.

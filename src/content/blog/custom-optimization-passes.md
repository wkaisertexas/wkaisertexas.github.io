---
title: Optimization Passes for Your Repo
description: In the age of LLMs, standardized repos for your codebases can really affect performance. Luckily, ChatGPT can one-shot generating these which is why the code is not provided.
pubDate: Jun 26 2025
heroImage: hero.png
display: true
---

In the age of LLMs, standardized repos for your codebases can really affect performance. Luckily, ChatGPT can one-shot generating these which is why the code is not provided. This is a public list of ideas to help brainstorm things you can do to standardize your repository format.

Imagine you were dropped in a huge repo which you now have to take ownership of the code. When you first do that, you can do as many small refactors as possible to clean up the code to a better state and then going into the refactors of substance.

If you think something **should** be on this list, please submit a PR to add it!

> "You can not pay people enough to accurately review verbose code, and believe me we have tried"
> - Some due who worked at Jane Street

## Linters

- `clang-tidy` to lint your repos and automatically fix them
- `clang-format` to ensure code is formatted properly
- `ruff format` to format python code
- `ruff check --fix` to run a linter over your python code
- use [pyupgrade](https://github.com/asottile/pyupgrade) to modernize python definitions. This is something I would personally run manually, though

## Python

- Replacing `os.path.join(os.path.dirname(__file__), "../param/State_Machine.yaml")` with pathlib (need to ask ChatGPT to make a custom script for this one)
- Use `vermin` to determine if the minimum python version listed makes sense

## C++

- Replacing `#ifndef` with `#pragma once` in all header file (yes, I know `#pragma once` is non-standard)

## ROS Specific Advice

- Ensure a ROS packages's name (defined in the `package.xml`) is the same as the folder name.
- Ensure all of your gtest test cases are  of the format `test_<test_case_name>` instead of `<test_case_name>_test`.
- Ensure if a file contains `class MyNode : public rclcpp::Node` that it must end in `_node`
- Replacing `this->` for the rclcpp core functions with a regex
  - `create_subscription`
  - `create_publisher`
  - `get_clock`
  - `create_timer`
  - `get_logger`
  - `declare_parameter`
- Use a CMakeLists toolchain instead of using `--cmake-args` for colcon
- Using the `seconds` utility function instead of doing `bestpos_msg.header.stamp.sec + bestpos_msg.header.stamp.nanosec * 1e-9` you do `rclcpp::Time(bestpos_msg.header.stamp).seconds();`
- Replacing `get_clock().now()` with `now()`
- Replacing the `.set__<var_name>()` with `=` syntax
- Move inline definitions to out of line definitions

## Bash

- Use `set -euo pipefail` in all your bash scripts
- Run `find . -name '*.sh' -exec chmod +x {} +` to ensure all bash scripts are executable in your git repo. Asking Chat to ensure they have a shebang before running the find command would also work

## Docker

- Use a builder Dockerfile to minimize package size runtimes
- Use read-only services when using Dockerfiles

## General Code Cleanliness

- Make sure it is `README.md` instead of `readme.md` or something derivative
- Specify the language ```python` in markdown code blocks

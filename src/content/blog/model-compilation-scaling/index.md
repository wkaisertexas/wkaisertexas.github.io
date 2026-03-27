---
title: "Benchmarking Hugging Face Models"
description: "From 1080s to A100s to H100s to Grace Hopper superchips, how has the performance of AI models increased"
pubDate: "September 27 2024"
heroImage: "hero.png"
display: false
---

- Introduction: aI compilers and hardware changes which makes something like this
  - Something about AI compilers
  - Something about hardware changes and how the way we deploy ai models have become radically different
- Benchmarking hugging-face models
- Compilers and more
- Conclusion


The way AI models are deployed has changed radically over the past four years. To put things into context, the cost of the same model, GPT-3.5 has decreased from $2 to $0.70 per million tokens in two years. 

However, hardware improvements are only part of the reason why inference has gotten less experensive on these cards. One emerging technology is model compilation with tools like [TensorRT](). 

Model compilation will restructure and fuse parts of the model to eliminate bottlenecks inside a model. Running AI models is largely a memory bound operation. Reading data in and out of the model is where the majority of time is spent. 

A common pattern is doing a matrix multiply and then applying an activation function. These two steps can be merged to where the only the data to make the multiplication needs to be read. Following this, the activation function can be applied in the same step.

This is the most basic kind of optimization that these compilers can make. However, how far can optimizations be taken? How does the gap between newer and older hardware change when these optimizations are implemented. 

In this article, I will be testing common hugging-face models to break down the scaling of performance improvement from models compilers.

## Benchmark Selection

[Hugging Face](https://huggingface.co/) was used as the model repository for this project and used to easily pull and test these models. The models chosen were based on Hugging Face's [Model Downloads Page](https://huggingface.co/models?sort=likes) ranking by popularity. 

Creating a diverse set of model sizes and functions was the primary selection criteria. With that in mind, these models being something that I personally found interesting is the primary reason for their inclusion.

| Model Name | Type | Description | Date Published | Model Size |
| :===: | :===: | :===: | :===: | :===: |
| [Phi2](https://huggingface.co/microsoft/phi-2) | Transformer | Phi2 is a small language model trained on textbooks | December 12th, 2023 | 2.7 Billion |
| [Phi3.5 MoE Instruct](https://huggingface.co/microsoft/Phi-3.5-MoE-instruct) | Transformer | Phi3.5 is 16 combined models | August 22nd, 2024 | 16x3.8 Billion |
| [CogVideoX-5b](https://huggingface.co/THUDM/CogVideoX-5b) | Diffusion + Transformer | A text-to-video model | August 12th, 2024 | 5 Billion |
| [LLama 3 70b](https://huggingface.co/meta-llama/Meta-Llama-3-70B) | Transformer | General purpose chat model | April 18th, 2024 | 70b |


<!-- ![alt text](image.png) -->
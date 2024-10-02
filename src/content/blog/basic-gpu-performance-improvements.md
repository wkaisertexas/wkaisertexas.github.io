---
title: "Profiling the Improvement in GPU Performance"
description: "Benchmarking GPU hardware from the 1000s series to the H100 series of cards on workloads from vector addition to machine learning."
pubDate: "September 27 2024"
heroImage: "hero.png"
display: false
---

- Introduction: NVIDIA has had a prolific rise, marketing vs recognizing the TreeNode. breaking the wake
- Motivation : NVIdia publishes their own benchmarks, hard to compute the differences between findComponentHighDownDispatchers, show an image from 
- Breaking down the benchmarks selected
- One-plus-one is not equal to two
- Conclusion


NVIDIA has experienced a prolific rise in recent years. While booms from crypto to artificial intelligence and nothing new to the historically cyclical company, this time it is different. Just how much have graphical processing units (GPUs) gotten better in recent years to justify this explosion in demand for chips which can cost as much as $40,000 a piece.

Despite being an engineering-heavy organization, NVIDIA's public statements often overeggarderate and fail to properly contextualize the claims made.

For example, NVENC makes speed claims about how parallel encoding of H.264 video is ___x faster than CPU based encoding. What is often left out is the approximations used to parallize video encoding and how NVENC encoded video can potentially be twice the size of CPU-encoded video. The tradeoffs present are not always properly contextualized

Another fun example is the recent blackwell launch, where massive claims like [4x faster than Hopper were made](https://www.tomshardware.com/pc-components/gpus/nvidias-next-gen-ai-gpu-revealed-blackwell-b200-gpu-delivers-up-to-20-petaflops-of-compute-and-massive-improvements-over-hopper-h100). What really happened is NVIDIA added support for 4-bit computation instead of 8-bit so it could go twice as fast and then they glued two hopper chips together for another double to 4x. This is still and incredibly impressive feat, and a big improvement for those looking to **train** ai models, the improvement is not necessarily contextualized in the way that someone may think.

Because of the conflation between marketing and benchmarking, I wanted to run some fairly basic reference workloads on a variety of chips to compare their performance. 

## What to Run?

Modern GPUs are compilicated that to even adequately test them requires a knoweledge of their limitations. Hardware designers and academics have constructed benchmarks for these tasks with open-source benchmark suites such as [Rodninia](https://github.com/yuhc/gpu-rodinia) to serve as reference implemenations. 

I wanted to take a more simplistic approach and work my way forward through the basics of GPU programming up-to more complex topics. 

- [Vector Addition](#vector-addition) takes two vectors and adds their elements, often though of as the "Hello World" of GPU programming
- [Matrix Multiplication](#matrix-multiplication)


## Vector Addition

## Matrix Multiplication


## Resources to look at when writing this

- [Hugging-Face Benchmarks](https://huggingface.co/docs/transformers/en/benchmarks) which is now depricated but looks at benchmarking models

Ideas, I could use TensorRT in an apptainer image to run these models faster. 
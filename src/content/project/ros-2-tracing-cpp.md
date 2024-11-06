---
title: "✏️ ROS 2 Tracing C++"
description: "A C++ babeltrace2 plugin which replaces ROS 2 Tracing"
repository: "https://github.com/wkaisertexas/ros2_tracing_cpp"
builtWith: ["c++", "ros"]
---

## Context and Scope

As a part of the Cavalier Autonomous Racing Team, we strive to optimize the performance of our autonomous racing systems. A critical aspect of this optimization is accurately measuring the performance metrics of our ROS 2 nodes, particularly focusing on the execution time of callbacks and memory usage patterns.

Trace analysis is a powerful method for gaining insights into system performance. However, existing tools like ROS 2 Tracing often process traces significantly slower than the actual program execution time, which hampers real-time analysis and rapid iteration.

To address this challenge, we have developed **ROS 2 Tracing C++**, a custom plugin for Babeltrace 2. This plugin accelerates trace processing by 25x to 50x compared to existing tools, enabling real-time trace analysis of ROS 2 C++ nodes. This capability is essential for high-performance applications like autonomous racing, where timely insights can significantly impact system optimization.

## Goals and Non-Goals

### Goals

- **High-Performance Trace Processing**: Achieve significant speed improvements (25x to 50x) in trace processing compared to existing tools.
- **Real-Time Analysis**: Enable near real-time processing of trace data to facilitate immediate performance insights during development and testing.
- **Callback Execution Time Measurement**: Accurately measure and record the execution times of callbacks within ROS 2 nodes.
- **Memory Usage Analysis**: Track and analyze memory allocations and deallocations to identify patterns and potential memory leaks.
- **Seamless Integration**: Ensure compatibility with existing tracing infrastructure (LTTng, Babeltrace 2) without requiring substantial changes to the development workflow.
- **User-Friendly Output**: Provide processed data in accessible formats (e.g., CSV files) for easy analysis and visualization using tools like Jupyter notebooks.

### Non-Goals

- **Multi-Language Support**: The focus is solely on ROS 2 C++ nodes; support for other languages (e.g., Python) is out of scope.
- **Comprehensive Feature Replication**: Not aiming to replicate all features of ROS 2 Tracing but to provide high-performance alternatives for specific analyses.
- **Graphical User Interface Development**: No plans to develop a dedicated GUI; interactions will be through command-line tools and notebooks.

## Design

### Overview

**ROS 2 Tracing C++** is designed as a high-performance Babeltrace 2 plugin that processes LTTng traces collected from ROS 2 C++ nodes. The plugin focuses on two main analyses:

1. **Callback Duration Analysis**: Measures the execution time of callbacks to understand performance bottlenecks.
2. **Memory Usage Analysis**: Tracks memory allocation and deallocation events to identify memory usage patterns and potential leaks.

By processing traces significantly faster than existing tools, the plugin enables developers to perform timely analyses, essential for optimizing high-performance systems.

### Architecture

The system comprises the following components:

- **LTTng Tracing Session**: Collects trace data from ROS 2 nodes using specified tracepoints.
- **Babeltrace 2 Plugin (`libros2_tracing_cpp.so`)**: Processes the collected traces and performs the analyses.
- **Output Data Storage**: Stores processed data in CSV files for easy access and visualization.
- **Analysis Notebooks**: Pre-built Jupyter notebooks for analyzing and visualizing the processed data.

### Data Flow

1. **Trace Collection**: Using `tracetools-launch`, tracepoints relevant to callback duration and memory usage are collected during node execution.
2. **Trace Processing**: The Babeltrace 2 plugin processes the traces, extracting necessary information and storing it in structured CSV files.
3. **Data Analysis**: Users analyze the processed data using provided Jupyter notebooks or other data analysis tools.
4. **Optimization**: Insights from the analysis inform code optimization and performance improvements.

### Key Design Decisions

- **C++ Implementation**: Writing the plugin in C++ leverages performance advantages over Python-based tools.
- **Targeted Tracepoints**: Collecting only necessary tracepoints reduces processing overhead and improves performance.
- **CSV Output Format**: Facilitates easy integration with data analysis tools and quick visualization.

## APIs

### Babeltrace 2 Plugin Interface

The plugin provides two main sink components:

#### 1. `sink.ros2_tracing_cpp.callback_duration`

- **Required Tracepoints**:
  - `ros2:rclcpp_callback_register`
  - `ros2:callback_start`
  - `ros2:callback_end`
- **Functionality**: Collects and calculates the execution duration of each callback invoked in the ROS 2 nodes.
- **Output**: Generates metadata and per-callback CSV files containing execution times.

#### 2. `sink.ros2_tracing_cpp.memory_usage`

- **Required Tracepoints**:
  - `lttng_ust_libc:malloc`
  - `lttng_ust_libc:calloc`
  - `lttng_ust_libc:realloc`
  - `lttng_ust_libc:memalign`
  - `lttng_ust_libc:posix_memalign`
  - `lttng_ust_libc:free`
- **Functionality**: Tracks memory allocation and deallocation events to analyze memory usage patterns.
- **Output**: Produces metadata and per-process CSV files detailing memory events.

### Usage Example

```bash
babeltrace2 --plugin-path . ~/.ros/tracing/ros2_tracing_session/ --component=sink.ros2_tracing_cpp.callback_duration
```

After processing, the plugin generates metadata files and CSV files containing the analyzed data.

## Data Storage

### Format

- **Metadata Files**: Provide summaries and links to detailed data files.
- **Data Files**: Contain detailed trace analysis results in CSV format.

### Rationale

- **Ease of Use**: CSV files are widely supported and easily parsed by data analysis tools.
- **Performance**: While there is some serialization overhead, the overall processing remains efficient due to the optimized plugin.
- **Visualization**: Facilitates quick plotting and analysis using tools like Jupyter notebooks.

### Example Structure

#### Callback Duration Metadata (`callback_duration_metadata.csv`)

| Column       | Description                                           |
|--------------|-------------------------------------------------------|
| `symbol`     | Raw callback symbol                                   |
| `procname`   | Process name                                          |
| `address`    | Address of the callback (serves as an identifier)     |
| `count`      | Number of times the callback was called               |
| `path`       | Relative path to the detailed CSV file                |
| `avg_duration` | Average execution duration of the callback          |

#### Callback Duration Data (`callback_*.csv`)

| Column     | Description                                         |
|------------|-----------------------------------------------------|
| `time`     | Timestamp of the callback execution (nanoseconds)   |
| `duration` | Duration of the callback execution (nanoseconds)    |

## Code / Pseudo Code

### Plugin Initialization

- **Register Components**: The plugin registers the sink components with Babeltrace 2.
- **Setup Data Structures**: Initializes necessary data structures for trace processing.

### Event Processing Loop

```cpp
void process_events() {
    while (Event event = get_next_event()) {
        switch (event.name) {
            /* note: in the actual code, strcmp is used, so it is a bunch of if statements */
            case "ros2:rclcpp_callback_register":
                register_callback(event);
                break;
            case "ros2:callback_start":
                start_callback(event);
                break;
            case "ros2:callback_end":
                end_callback(event);
                break;
            case "lttng_ust_libc:malloc":
            case "lttng_ust_libc:calloc":
            case "lttng_ust_libc:realloc":
            case "lttng_ust_libc:memalign":
            case "lttng_ust_libc:posix_memalign":
                record_allocation(event);
                break;
            case "lttng_ust_libc:free":
                record_deallocation(event);
                break;
            default:
                // Ignore unrelated events
                break;
        }
    }
}
```

### Data Recording Functions

- **`register_callback(event)`**: Stores callback metadata.
- **`start_callback(event)`**: Records the start time of a callback.
- **`end_callback(event)`**: Calculates the duration and stores it.
- **`record_allocation(event)`**: Logs memory allocation events.
- **`record_deallocation(event)`**: Logs memory deallocation events.

### Output Generation

- After processing, the plugin writes the collected data into CSV files, organized per callback or per process.

## Degree of Constraints

### Performance Constraints

- **Processing Speed**: Must achieve at least a 25x speedup over existing tools.
- **Low Overhead**: Minimize additional overhead during trace collection.

### Compatibility Constraints

- **ROS 2 Humble Support**: Compatible with the ROS 2 Humble release.
- **LTTng and Babeltrace 2**: Leverages existing tracing infrastructure.

### Usability Constraints

- **Easy Installation**: Provide pre-built binaries and straightforward installation steps.
- **User-Friendly Output**: Generate data in formats that are easy to consume and analyze.

## Alternatives Considered

### ROS 2 Tracing Analysis

- **Pros**: Integrated with ROS 2, easy to set up.
- **Cons**: Slow processing times, not suitable for real-time analysis.

### LTTng Analyses Scripts

- **Pros**: Flexible, good for learning trace analysis capabilities.
- **Cons**: General-purpose, may require significant customization.

### Custom Python Scripts

- **Pros**: Easier to write and modify.
- **Cons**: Performance limitations due to Python's execution speed.

### Rationale for Current Design

- **Performance Needs**: C++ provides the necessary performance improvements.
- **Integration**: Building on Babeltrace 2 allows seamless integration with existing tools.
- **Specificity**: Tailored analyses meet our specific requirements without unnecessary overhead.

## Cross-Cutting Concerns

### Performance Impact on Nodes

- **Trace Collection Overhead**: Collecting tracepoints introduces some overhead.
  - **Mitigation**: Collect only essential tracepoints to minimize impact.

### Extensibility

- **Future Analyses**: Design allows for adding new analyses as needed.
  - **Implementation**: Modular code structure and clear interfaces.

### User Adoption

- **Learning Curve**: New tools can be a barrier.
  - **Mitigation**: Provide comprehensive documentation and examples.

## Conclusion

**ROS 2 Tracing C++** significantly enhances the ability to perform real-time trace analysis on ROS 2 C++ nodes, crucial for optimizing high-performance systems like autonomous racing vehicles. By focusing on performance and ease of use, the tool integrates seamlessly into existing workflows, providing valuable insights with minimal overhead. This design ensures that developers can rapidly iterate and improve system performance, maintaining a competitive edge in high-stakes environments.
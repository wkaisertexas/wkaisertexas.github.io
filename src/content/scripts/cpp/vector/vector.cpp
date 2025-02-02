#include <cstdlib>
#include <iostream>

namespace william_std {

template <typename T> class Vector {

private:
  T *data;
  size_t capacity;
  size_t size_;

  void expand_capacity() {
    if (capacity == 0) {
      data = static_cast<T *>(malloc(sizeof(T)));
      capacity = 1;
      return;
    }
    capacity *= 2;
    data = static_cast<T *>(realloc(data, capacity * sizeof(T)));
  }

public:
  Vector() {
    data = nullptr;
    capacity = 0;
    size_ = 0;
  }

  ~Vector() {
    if (data != nullptr) {
      free(data);
    }
  }

  void empty() { size_ = 0; }

  void reserve(size_t new_size) {
    if (new_size <= capacity) {
      return;
    }

    data = static_cast<T *>(realloc(data, new_size * sizeof(T)));
    capacity = new_size;
  }

  void push_back(T in) {
    if (size_ + 1 > capacity) {
      expand_capacity();
    }

    data[size_] = in;
    size_++;
  }

  T &operator[](size_t i) { return data[i]; }
  T &operator[](int i) { return data[i]; }


  size_t size() const { return size_; }

  friend std::ostream &operator<<(std::ostream &o, const Vector &rhs) {
    for (size_t i = 0; i < rhs.size(); i++) {
      o << rhs.data[i] << " ";
    }
    
    o << std::endl;

    return o;
  }
};

} // namespace william_std

int main() {
  william_std::Vector<double> dubs;
  william_std::Vector<int> ints;

  dubs.push_back(10);
  dubs.push_back(10);
  dubs.push_back(10);
  dubs.push_back(10);
  dubs.push_back(10);

  ints.push_back(1);
  ints.push_back(2);
  ints.push_back(3);
  ints.push_back(4);
  ints.push_back(5);

  std::cout << dubs;
  std::cerr << ints;
}

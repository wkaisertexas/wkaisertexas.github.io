class SmallestInfiniteSet {
public:
    priority_queue<int, vector<int>, greater<int>> heap;
    int largest = 1;
    SmallestInfiniteSet() {
        
    }
    
    int popSmallest() {
        if(heap.empty() || heap.top() > largest){
            return largest++;
        }

        int top = heap.top();
        heap.pop();

        while(!heap.empty() && heap.top() == top){
            heap.pop(); // duplicate correction
        }

        return top;
    }
    
    void addBack(int num) {
        if(num < largest){
            heap.push(num);
        }
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */

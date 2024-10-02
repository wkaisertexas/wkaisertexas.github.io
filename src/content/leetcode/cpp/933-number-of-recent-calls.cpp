/*
 * Deque is not imported by default in leetcode for some reason
 *
 * Push and pop are the same methods, but they just mean different things here
 */ 
class RecentCounter {
public:
    RecentCounter() {
        
    }
    queue<int> pings;
    
    int ping(int t) {
        while(!pings.empty() && pings.front() < t - 3000){
            pings.pop();
        }
        pings.push(t);
        return pings.size();
    }
};


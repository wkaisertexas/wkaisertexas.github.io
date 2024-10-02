/*
 * This took me ~10 minutes to figure out these conditionals
 *
 * Not difficult, but a bit more time consuming that I would have anticipated
 */
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> counter;

        for(int i = 0; i < asteroids.size(); i++){            
            if(asteroids[i] > 0){
                counter.push(asteroids[i]);
                continue;
            }

            if(counter.empty()){
                counter.push(asteroids[i]);
                continue;
            }

            while(!counter.empty() && counter.top() > 0 && abs(asteroids[i]) > abs(counter.top())){
                counter.pop();
            }

            if((counter.empty() || counter.top() < 0) || abs(counter.top()) < abs(asteroids[i])){
                counter.push(asteroids[i]);
            } else if(abs(counter.top()) == abs(asteroids[i])){
                counter.pop();
            }
        }

        vector<int> counters(counter.size(), 0);

        for(int i = counter.size() - 1; i >= 0; i--){
            counters[i] = counter.top();
            counter.pop();
        }

        return counters;
    }
};

/*
 * This was light work!
 */
class Solution {
public:
    vector<int> dailyTemperatures(const vector<int>& temperatures) {
        vector<int> return_vec(temperatures.size(), 0);
        stack<int> increasing;

        for(int i = 0; i < temperatures.size(); i++){
            while(!increasing.empty() && temperatures[increasing.top()] < temperatures[i]){
                return_vec[increasing.top()] = i - increasing.top();
                increasing.pop();
            }

            increasing.push(i);
        }

        return return_vec;
    }
};

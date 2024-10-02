#pragma optimize(03)

class Solution {
public:
    bool uniqueOccurrences(const vector<int>& arr) {
        map<int, int> counts;

        for(auto c: arr){
            if(counts.count(c)){
                counts[c]++;
            } else {
                counts[c] = 1;
            }
        }

        set<int> unique_counts;
        for(auto pair : counts){
            unique_counts.insert(pair.second);
        }

        return unique_counts.size() == counts.size();
    }
};

class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if(intervals.size() <= 1){
            return 0;
        }
        // thinking about this
        // log n -> you have two pointers to count the number of overlapping 
        sort(intervals.begin(), intervals.end(), [](const vector<int>& first, const vector<int>& second) -> bool {
            if(first[0] > second[0]){
                return false;
            } else if (first[0] < second[0]){
                return true;
            }

            if(first[1] > second[1]){
                return true;
            } else if (first[1] < second[1]){
                return false;
            }

            return false; // they are equal, it does not matter
        });

        // we need to go from back to front??? This is a greedy way to minimize schedule conflicts
        int valid_count = 0;
        int min_val = INT_MAX;

        for(int i = intervals.size() - 1; i >= 0; i--){
            if(intervals[i][0] < min_val && intervals[i][1] <= min_val){
                valid_count++;
                min_val = min(min_val, intervals[i][0]);
            }
        }
        
        return intervals.size() - valid_count;
    }
};

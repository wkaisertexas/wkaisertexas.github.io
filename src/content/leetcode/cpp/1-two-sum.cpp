class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int i = 0;
        int j = nums.size() - 1;

        vector<pair<int, int>> numsWithIndices;
        
        // Store numbers with their original indices
        for(int i = 0; i < nums.size(); ++i) {
            numsWithIndices.push_back({nums[i], i});
        }
        
        // Sort based on the number value
        std::sort(numsWithIndices.begin(), numsWithIndices.end());

        while(true){
            if(i == j){
                ++j;
            }
            int sum = numsWithIndices[i].first + numsWithIndices[j].first;

            if(sum == target){
                int first = numsWithIndices[i].second;
                int second = numsWithIndices[j].second;
                return {first, second};
            } else if(sum < target){
                ++i;
            } else {
                --j;
            }
        }
    }
};

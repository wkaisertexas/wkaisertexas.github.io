class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int diff = 0;
        for(auto n: nums){
            diff ^= n;
        }
        return diff;
    }
};

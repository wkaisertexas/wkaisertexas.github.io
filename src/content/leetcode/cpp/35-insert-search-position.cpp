class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low = 0;
        int high = nums.size() - 1;

        while(low <= high){
            int midpoint = low + (high - low) / 2;

            int val = nums[midpoint];
            if(val == target){
                return midpoint;
            } else if(val < target){
                low = midpoint + 1;
            } else {
                high = midpoint - 1;
            }
        }

        // the not found case;

        return low;
    }
};

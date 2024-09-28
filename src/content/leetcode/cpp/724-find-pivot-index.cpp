/*
 * When finding the pivot, the total sum becomes a valueable piece of information to know
 *
 * The algorithm is still linear, but not the decision boundary is a bit easier to wrap your head around
 */
#pragma GCC optimize("03")

class Solution {
public:
    int pivotIndex(const vector<int>& nums) {
        int total_sum = 0;
        int left_sum = 0;

        for (int num : nums) {
            total_sum += num;
        }

        for (int i = 0; i < nums.size(); i++) {
            if (left_sum == total_sum - left_sum - nums[i]) {
                return i;
            } 

            left_sum += nums[i];
        }

        return -1;
    }
};

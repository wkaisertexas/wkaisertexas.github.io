/*
 * This was strange because you only had to keep track of the smallest and the second smallest
 *
 * Figuring this out was not exactly trivial. I should have worked through my original idea for a dynamic-programming-based solution, and then found that a logical consequence of that was you only care about the min and second max.
 *
 * I think I was natively biased here to think about this problem in terms of (i, k) and then j is whatever it can be in the middle to make the value work. However, I do not necessarily that this has to be the case
 */
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        // O(n) time
        if(nums.size() < 3){
            return false;
        }
        
        int smallest = INT_MAX;
        int middle = INT_MAX;

        // you can solve this with only min and max you do not have to take a two-pointer approach here
        for(auto num:nums){
            if(num > middle){
                return true;
            } 

            if (num <= smallest) {
                smallest = num; 
            } else {
                middle = num;
            }
        }
        return false;
    }
};

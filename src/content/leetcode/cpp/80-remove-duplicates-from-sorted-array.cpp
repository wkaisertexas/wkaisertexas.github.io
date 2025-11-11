/*
 * The key thing here was to compare against the bottom pointer, rather than the ith pointer which has some issues with overwriting
 */
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int bot = 2;

        if(nums.size() <= 2){
            return nums.size();
        }

        for(int i = 2; i < nums.size(); i++){
            if(nums[bot - 2] == nums[i]){
                continue;
            }
            nums[bot] = nums[i];
            bot++;
        }

        return bot;
    }
};

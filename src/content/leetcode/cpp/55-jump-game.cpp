/*
 * I initially though I needed to use a boolean array which represents if you can jump to a location. However, becuase this only specifies the maximum jump distance, you can have a greedy solution where recording the earliest position which can reach the end is all that is required. 
 */
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int last_true = nums.size() - 1;
        for(int i = nums.size() - 2; i >= 0; i--){
            if(nums[i] >= last_true - i){
                last_true = i;
            }
        }

        return last_true == 0;
    }
};

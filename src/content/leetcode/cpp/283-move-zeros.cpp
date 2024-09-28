class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int curr_idx = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] != 0){
                nums[curr_idx++] = nums[i];
            }
        }

        while(curr_idx < nums.size()){
            nums[curr_idx++] = 0;
        }
    }
};

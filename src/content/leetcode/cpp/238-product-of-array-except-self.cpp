class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        bool found_zero = false;

        vector<int> return_vec(nums.size(), 0);

        int product = 1;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == 0){
                if(found_zero){
                    return return_vec;
                }

                found_zero = true;
                continue;
            }

            product *= nums[i];
        }

        for(int i = 0; i < nums.size(); i++){
            if(found_zero){
                return_vec[i] = nums[i] == 0 ? product : 0;
            } else {
                return_vec[i] =  product / nums[i];
            }
        }

        return return_vec;
    }
};

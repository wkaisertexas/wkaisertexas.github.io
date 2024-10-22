/**
 * This passed on the first solution which makes me deeply happy
 */
class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        // getting rid of negative values
        for(int i = 0; i < nums.size(); i++){
            nums[i] = nums[i] <= 0 ? nums.size() + 1 : nums[i];
        }
        
        for(int i = 0; i < nums.size(); i++){
            // if they are a negative value or too large we do not set their index
            if(abs(nums[i]) >= nums.size() + 1){
                continue;
            }

            // we use the sign bit of nums[i] to represent us seeing i + 1
            int index = abs(nums[i]) - 1;
            nums[index] = -1 * abs(nums[index]);
        }

        for(int i = 0; i < nums.size(); i++){
            // this means we have not seen nums[i]
            if(nums[i] > 0){
                return i + 1;
            }
        }

        // at worst one more than the size of the array works
        return nums.size() + 1;
    }
};

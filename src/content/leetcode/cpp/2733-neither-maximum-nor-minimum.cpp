#pragma optimize(O5)

/* 
 * This was fun. Really easy, but fun. 
 */
class Solution {
public:
    int findNonMinOrMax(const vector<int>& nums) {
        int max_num = nums[0];
        int min_num = nums[0];
        for(const auto& n: nums){
            if(max_num != min_num){
                if(n > max_num){
                    return max_num;
                } else if (n < min_num){
                    return min_num;
                } else {
                    return n;
                }
            }

            max_num = max(max_num, n);
            min_num = min(min_num, n);
        }
        
        return -1;
    }
};

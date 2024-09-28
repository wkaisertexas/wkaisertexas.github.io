class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double sum = 0;

        for(int i = 0; i < min(nums.size(), (size_t) k); i++){
            sum += nums[i];
        }

        if(nums.size() <= k){
            return sum / nums.size();
        }

        double max_sum = sum;
        for(int i = k; i < nums.size(); i++){
            sum -= nums[i - k];
            sum += nums[i];

            max_sum = max(max_sum, sum);
        }

        return max_sum / k;
    }
};

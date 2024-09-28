/*
 * Putting compiler directives in leetcode solutions is OP not going to lie
 */
#pragma GCC optimize("03")
#pragma GCC target ("avx")

class Solution {
public:
    int longestOnes(const vector<int>& nums, int k) {
        int left = 0;
        int max_len = 0;
        int zeros_count = 0;

        for (int right = 0; right < nums.size(); right++) {
            if (nums[right] == 0) {
                zeros_count++;
            }

            while (zeros_count > k) {
                if (nums[left] == 0) {
                    zeros_count--;
                }
                left++;
            }

            max_len = max(max_len, right - left + 1);
        }

        return max_len;
    }
};


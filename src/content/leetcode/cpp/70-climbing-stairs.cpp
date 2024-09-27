/*
* Some notes:
* - this is just calculating the fibonaci sequence
* - I should spend more time playing with the solutions instead of directly finding the answers
*/

class Solution {
public:
    int climbStairs(int n) {
        if(n == 0) return 0;
        vector<int> dp(n + 1);

        dp[0] = 1;
        dp[1] = 1;

        for(int i = 2; i < n + 1; i++)
            dp[i] = dp[i - 1] + dp[i - 2];

        return dp[n];
    }
};

/*
 * Can place flowers took me a bit longer than expected ~10 minutes
 *
 * I just kept submitting the wrong base case and the edges for the flowerbed were bad
 */
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        vector<int> dp(flowerbed.size(), 0);

        switch(flowerbed.size()){
            case 0:
                return n == 0;
            case 1:
                return n <= (flowerbed[0] ? 0 : 1);
            case 2:
                return n <= ((!flowerbed[0] && !flowerbed[1]) ? 1 : 0);
            default:
        }

        // base cases
        dp[0] = !flowerbed[0] && !flowerbed[1] ? 1 : 0;
        dp[1] = !flowerbed[0] && !flowerbed[1] && !flowerbed[2] ? 1 : 0;

        for(int j = 2; j < flowerbed.size(); j++){
            if(j == flowerbed.size() - 1){
                if(flowerbed[j-1] || flowerbed[j]){
                    dp[j] = max(dp[j - 1], dp[j - 2]);
                } else {
                    dp[j] = max(dp[j-1], dp[j-2] + 1);    
                }
            } else {
                if (flowerbed[j - 1] || flowerbed[j] || flowerbed[j + 1]){
                    dp[j] = max(dp[j-1], dp[j-2]);
                } else {
                    dp[j] = max(dp[j-1], dp[j-2] + 1);    
                }
            }
        }        

        return dp[flowerbed.size() - 1] >= n;
    }
};

class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        vector<bool> kids(candies.size(), false);

        int max_candies = 0;
        for(auto c : candies){
            max_candies = max(c, max_candies);
        }

        for(int i = 0; i < candies.size(); i++){
            kids[i] = candies[i] + extraCandies >= max_candies;
        }

        return kids;
    }
};

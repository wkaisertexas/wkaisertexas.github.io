class Solution {
public:
    int minCostClimbingStairs(const vector<int>& cost) {
        if(cost.size() <= 1){
            return 0;
        }

        int costs[cost.size()];

        costs[0] = cost[0];
        costs[1] = cost[1];

        for(int i = 2; i < cost.size(); i++){
            costs[i] = cost[i] + min(costs[i - 1], costs[i - 2]);
        }

        return min(costs[cost.size() - 1], costs[cost.size() - 2]);
    }
};

class Solution {
public:
    void dfs(int pos, vector<bool>& seen, const vector<vector<int>>& isConnected){
        seen[pos] = true;

        for(int i = 0; i < isConnected.size(); i++){
            if(seen[i]){
                continue;
            }

            if(!isConnected[pos][i]){
                continue;
            }

            dfs(i, seen, isConnected);
        }
    }

    int findCircleNum(const vector<vector<int>>& isConnected) {
        vector<bool> seen(isConnected.size(), false);
        
        int proviences = 0;
        for(int i = 0; i < isConnected.size(); i++){
            if(seen[i]){
                continue;
            }

            dfs(i, seen, isConnected);
            proviences++;
        }

        return proviences;
    }
};

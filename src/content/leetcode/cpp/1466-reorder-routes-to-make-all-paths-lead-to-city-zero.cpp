/*
 * I did this backwards I think, but n - 1 - dfs(0, 0, seen, connections_map); was a suitable inverse. This was more so something I tried.
 */
class Solution {
public:
    int dfs(int count, int pos, vector<bool>& seen, unordered_map <int, vector<int>>& connections_map){
        seen[pos] = true;

        if(!connections_map.count(pos)){
            return count; // no paths
        }

        // forward
        for(int i = 0; i < connections_map[pos].size(); i++){
            int p = connections_map[pos][i];
            if(p < 0){
                continue;
            }
            if(seen[p]){
                continue;
            }

            count = dfs(count, p, seen, connections_map);
        }

        for(int i = 0; i < connections_map[pos].size(); i++){
            int p = connections_map[pos][i];
            if(p > 0){
                continue;
            }
            if(seen[-p]){
                continue;
            }

            count = dfs(count + 1, -p, seen, connections_map);
        }

        return count;
    }

    int minReorder(int n, vector<vector<int>>& connections) {
        unordered_map <int, vector<int>> connections_map;
        vector<bool> seen(n, false);

        for(auto c: connections){
            connections_map[c[0]].push_back(c[1]);
            connections_map[c[1]].push_back(-c[0]);
        }

        return n - 1 - dfs(0, 0, seen, connections_map);
    }
};

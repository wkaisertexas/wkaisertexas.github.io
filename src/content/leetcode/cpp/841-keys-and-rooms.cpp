#pragma optimize(03)

/*
 * I do not know if this was just because this was my first problem of the day, but I was a little nervous starting out doing this. However, the whole problem took be less than five minutes after starting.
 */
class Solution {
public:
    void dfs(int pos, vector<bool>& seen, const vector<vector<int>>& rooms){
        seen[pos] = true;

        for(const auto& r: rooms[pos]){
            if(seen[r]){
                continue;
            }

            dfs(r, seen, rooms);
        }
    }

    bool canVisitAllRooms(const vector<vector<int>>& rooms) {
        vector<bool> seen(rooms.size(), false);
        dfs(0, seen, rooms);

        for(auto elem: seen){
            if(!elem){
                return false;
            }
        }

        return true;
    }
};

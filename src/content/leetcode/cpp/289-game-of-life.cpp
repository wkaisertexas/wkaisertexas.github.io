class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        auto in_range = [board](int x, int y){
            return x >= 0 && y >= 0 && x < board.size() && y < board[0].size();
        };

        vector<vector<int>> copy(board.size(), vector<int>(board[0].size(), 0));

        vector<pair<int, int>> pairs =  {{-1, -1}, {0, -1}, {1, -1}, {1, 0}, {1, 1}, {0, 1}, {-1, 1}, {-1, 0}};;

        for(int i = 0; i < board.size(); i++){
            for(int j = 0; j < board[i].size(); j++){
                int alive = 0;
                for(auto [dx, dy] : pairs){
                    if(!in_range(dx + i, dy + j)){
                        continue;
                    }
                    if(board[dx + i][dy + j]){
                        alive++;
                    }
                }

                if(alive == 3){
                    copy[i][j] = 1;
                } else if(alive == 2){
                    copy[i][j] = board[i][j];
                }
            }
        }

        for(int i = 0; i < board.size(); i++){
            for(int j = 0; j < board[i].size(); j++){
                board[i][j] = copy[i][j];
            }
        }
    }
};

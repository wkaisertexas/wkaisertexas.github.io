/*
 * Pretty easy
 */
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        vector<vector<int>> transpose_mat(matrix[0].size(), vector<int>(matrix.size(), 0));

        for(int i = 0; i < matrix.size(); i++){
            for(int j = 0; j < matrix[i].size(); j++){
                transpose_mat[j][i] = matrix[i][j];
            }
        }

        return transpose_mat;
    }
};

/**
 * Classic binary search you just need to know how the modulo operator works
 */
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int n = matrix.size();
        int m = matrix[0].size();

        int bottom = 0;
        int top = m * n - 1;

        while(bottom <= top){
            int middle = top - (top - bottom) / 2;

            int x = middle / m;
            int y = middle % m;

            if(matrix[x][y] == target){
                return true;
            } else if(matrix[x][y] < target){
                bottom = middle + 1;
            } else {
                top = middle - 1;
            }
        }

        return false;
    }
};

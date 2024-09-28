/*
 * This confused me a bit as to the optimality of this solution
 *
 * The point here is not that when left and right converge it will necessarily produce the best solution, but rather that the intersection of these is interesting and valid
 */
class Solution {
public:
    int maxArea(vector<int>& height) {
        int l = 0;
        int r = height.size() - 1;

        int max_area = 0;
        while(l < r){
            max_area = max(max_area, min(height[l], height[r]) * (r - l));
            if(height[l] < height[r]){
                ++l;
            } else {
                --r;
            }

        }
        return max_area;
    }
};

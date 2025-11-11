/*
 * Beats 100% has to be one of the best feelings
 *
 * This solution could be improved by completing the forwards pass at the same time as the pass which calculates the size. This would have some slight locality improvements which should theoretically make it much faster.
 */
class Solution {
public:
    int trap(const vector<int>& height) {
        int max_height_front_to_back[height.size()];
        int max_height_back_to_front[height.size()];

        int max_item = 0;
        for(int i = 0; i < height.size(); i++){
            max_item = max(height[i], max_item);
            max_height_front_to_back[i] = max_item;
        }
        
        max_item = 0;
        for(int i = height.size() - 1; i >= 0; i--){
            max_item = max(height[i], max_item);
            max_height_back_to_front[i] = max_item;
        }

        // calculating the area
        int area = 0;

        for(int i = 0; i < height.size(); i++){
            int min_height = min(max_height_front_to_back[i], max_height_back_to_front[i]);

            area += height[i] > min_height ? 0 : min_height - height[i];
        }

        return area;
    }
};

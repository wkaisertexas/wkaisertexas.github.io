/*
 * This was just a windowing algorithm. I did this to prepare for my Anduril interview and it was not bad. I was surprised.
 */
class Solution {
public:
    int visiblePoints(const vector<vector<int>>& points, int angle, const vector<int>& location) {
        // Angles is the angles of each point in degrees
        vector<float> angles;

        int pos_x = location[0];
        int pos_y = location[1];

        int base_count = 0;

        for(int i = 0; i < points.size(); i++){
            int x = points[i][0];
            int y = points[i][1];

            if(x == pos_x && y == pos_y){
                base_count++;
            } else {
                float angle = atan2(y - pos_y, x - pos_x) * 180 / M_PI;

                angles.push_back(angle);
            }
        }
        
        sort(angles.begin(), angles.end());

        int max_count = 0;

        int bottom = 0;
        int top = 0;

        while(bottom < angles.size()){
            float top_angle = top >= angles.size() ? angles[top % angles.size()] + 360 : angles[top % angles.size()];

            if(top_angle - angles[bottom % angles.size()] <= angle){
                top++;
            } else {
                bottom++;
            }

            max_count = max(max_count, top - bottom);
        }

        return max_count + base_count;
    }
};

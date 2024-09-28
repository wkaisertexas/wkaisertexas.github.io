#pragma GCC optimize("03")

class Solution {
public:
    int largestAltitude(const vector<int>& gain) {
        int alt = 0;
        int max_alt = 0;

        for(int i = 0; i < gain.size(); i++){
            alt += gain[i];
            max_alt = max(max_alt, alt);
        }

        return max_alt;
    }
};

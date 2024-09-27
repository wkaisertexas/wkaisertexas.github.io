class Solution {
public:
    int titleToNumber(string columnTitle) {
        int total = 0;
        
        for(auto c : columnTitle){
            total *= 26;
            total += (c - 'A') + 1;
        }

        return total;
    }
};

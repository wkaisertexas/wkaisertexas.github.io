class Solution {
public:
    int mySqrt(int x) {
        for(int64_t i = 0; i <= x / 2 + 1; i++){
            int64_t square = i * i;
            if(square > x) return (int) (i - 1);
            if(square == x) return (int) i;
        }
        return -1; // should not happen
    }
};

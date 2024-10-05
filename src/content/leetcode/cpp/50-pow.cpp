/*
 * I should have used the trick to see if you can double safely before computing the power
 * 
 * This makes dealing with large inputs much faster
 * 
 * RIP. Maybe I will not be a Chick-Fil-A software engineering intern
 */
class Solution {
public:
    double myPow(double x, int n) {
        if(x == 1.0) return 1;
        if(x == 0.0) return 0;
        if(x == -1.0) return n % 2 == 0 ? 1: -1;
        if(n == 0) return 1;

        double pow = x;
        for(long long i = 1; i < abs(n); i++){
            if(i + i < abs(n)){
                pow *= pow;

                // i = 1 - 1 -> i = 1 -> 2 -> 2 + 2 - 1 => 3 + 1 -> 4
                i += i - 1;
            } else {
                pow *= x;
            }
        }

        return n < 0 ? 1 / pow : pow;
    }
};

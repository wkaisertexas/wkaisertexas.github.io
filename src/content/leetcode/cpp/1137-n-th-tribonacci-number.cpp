class Solution {
public:
    int tribonacci(const int n) {
        if(n <= 1){
            return n;
        }
        if(n == 2){
            return 1;
        }

        int cache[n + 1];

        cache[0] = 0;
        cache[1] = 1;
        cache[2] = 1;

        for(int i = 3; i <= n; i++){
            cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
        }
        
        return cache[n];
    }
};

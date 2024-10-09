/*
 * This problem claims to be linear with respect to n but I am not sure that is the case
 */
class Solution {
public:
    int kthFactor(int n, int k) {
        int c = 0;
        int fact = 0;
        for(int i = 1; i <= n; i++ ){
            if(n % i == 0){
                fact = i;
                c++;

                if(c == k){
                    return i;
                }
            }
        }
        return -1;
    }
};

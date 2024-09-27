class Solution {
public:
    int countPrimes(int n) {
        vector<bool> primes(n, true);

        for(int i = 2; i < n; i++){
            int curr = 2 * i;

            if(!primes[i]){ continue; }
            while(true){
                if(curr > n - 1){ break; } 

                primes[curr] = false;
                curr += i;
            }
        }
        
        int total = 0;
        for(int i = 2; i < primes.size(); i++){
            total += primes[i] ? 1 : 0;
        }
        return total;
    }
};

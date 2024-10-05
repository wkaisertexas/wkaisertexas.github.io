class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> rec(n + 1);
        for(int i = 0; i < n + 1; i++){
            int num = i;
            int count = 0;
            while(num > 0){
                if(num & 1){
                    count++;
                }

                num >>= 1;
            }
            
            rec[i] = count;
        }

        return rec;
    }
};

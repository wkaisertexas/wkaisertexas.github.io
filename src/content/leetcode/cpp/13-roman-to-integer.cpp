class Solution {
public:
    int romanToInt(string s) {
        map<char, int> numeral_to_digit = {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};

        int max_val = 0;
        int sum = 0;
        for(int i = s.length() - 1; i >= 0; i--){
            char c = s[i];
            int val = numeral_to_digit[c];

            sum += val >= max_val ? val : -val;
            max_val = max(val, max_val);
        }

        return sum;
    }
};

/**
 * This was not too bad. Honestly, I thought it was less bad than string multiplication which I find difficult for some reason (probably it's use of a custom data structure).
 *
 * The edge cases here were pretty weird and I would definitely need to find a way to clean up this code
 */
class Solution {
public:
    vector<string> words{"", "Thousand", "Million", "Billion"};
    vector<string> tens{"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    vector<string> ones{"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};

    int i_pow(int base, int exp){
        int res = 1;
        for(int i = 0; i < exp; i++){
            res *= base;
        }

        for(int i = 0; i > exp; i--){
            res /= base;
        }

        return res;
    }

    string numberToWords(int num) {
        if(num == 0){
            return "Zero";
        }

        vector<string> return_string_vec;

        auto cond_push_back = [&return_string_vec](string val) {
            if(val == ""){
                return;
            }

            return_string_vec.push_back(val);
        };

        for(int i = words.size() - 1; i >= 0; i--){
            if(num < i_pow(10, i * 3)){
                continue;
            }
            int remainder = num / i_pow(10, i * 3);

            // hundreds place
            if(ones[remainder / 100 % 10] != ""){
                cond_push_back(ones[remainder / 100 % 10] + " Hundred");
            }

            // tens place
            if((remainder % 100 / 10) >= 2)
                cond_push_back(tens[remainder / 10 % 10]);

            // ones place
            int ones_shit = remainder - (remainder / 100) * 100;
            if(ones_shit < 20){
                cond_push_back(ones[ones_shit % ones.size()]);
            } else {
                cond_push_back(ones[remainder % 10]);
            }

            cond_push_back(words[i]);

            num %= i_pow(10, i * 3);
        }

        // compiling into a string
        string return_string;

        for(int i = 0; i < return_string_vec.size(); i++){
            return_string += return_string_vec[i];
            return_string += i != return_string_vec.size() - 1 ? " " : "";
        }

        return return_string;
    }
};

/**
 * I forgot that to create a string form a character it is string(1, c) which is a one-length string filled with character c
 */
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        const array<string, 8> letters{"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

        if(digits.length() == 0){
            return {};
        }

        vector<string> res = letterCombinations(digits.substr(1, digits.length() - 1));
        vector<string> return_combinations;
        return_combinations.reserve(letters[digits[0] - '2'].length() * res.size());
        for(const auto& c: letters[digits[0] - '2']){
            for(auto comb: res){
                return_combinations.push_back(string(1, c) + comb);
            }

            if(res.size() == 0){
                return_combinations.push_back(string(1, c));
            }
        }

        return return_combinations;
    }
};

/*
 * Solving this in cpp. I needed to know that strings are hashable by default
 *
 * I tried optimizing this, but it was honestly a bit more work than I though to optimize it
 *
 * You can apparently implement a custom hashable type here which could be interesting.
 */
class Solution {
public:
    vector<vector<string>> groupAnagrams(const vector<string>& strs) {
        unordered_map<string, vector<int>> strings;

        for(int i = 0; i < strs.size(); i++){
            string freqKey(26, static_cast<char>(0));
            
            for (char c : strs[i]) {
                freqKey[c - 'a']++;
            }
            
            strings[freqKey].push_back(i);
        }

        vector<vector<string>> return_vec;
        return_vec.reserve(strings.size());

        for(auto& [str, vec]: strings){
            vector<string> elem;
            elem.reserve(vec.size());

            for(int i = 0; i < vec.size(); i++){
                elem.push_back(strs[vec[i]]);
            }
            
            return_vec.push_back(move(elem));
        }

        return return_vec;
    }
};

/*
 * Much faster solution which uses a vector instead of a hashmap for speed
 */
class Solution {
public:
    bool closeStrings(const string word1, const string word2) {
        if(word1.length() != word2.length()){
            return false;
        }

        vector<int> counts1(26, 0);
        vector<int> counts2(26, 0);

        for(int i = 0; i < word1.length(); i++){
            counts1[word1[i] - 'a']++;
            counts2[word2[i] - 'a']++;
        }

        for(int i = 0; i < 26; i++){
            if(counts1[i] && !counts2[i]){
                return false;
            } else if(counts2[i] && !counts1[i]){
                return false;
            }
        }

        sort(counts1.begin(), counts1.end());
        sort(counts2.begin(), counts2.end());

        for(int i = 0; i < 26; i++){
            if(counts1[i] != counts2[i]){
                return false;
            }
        }

        return true;
    }
};

/*
 * Slower but still working solution
 */
class SlowSolution {
public:
    bool closeStrings(const string word1, const string word2) {
        if(word1.length() != word2.length()){
            return false;
        }

        // you need to have the letter count counts be equal
        map<char, int> word1_counts;
        map<char, int> word2_counts;

        for(auto c: word1){
            if(word1_counts.find(c) != word1_counts.end()){
                word1_counts[c]++;
            } else {
                word1_counts[c] = 1;
            }
        }

        for(auto c: word2){
            if(word2_counts.find(c) != word2_counts.end()){
                word2_counts[c]++;
            } else {
                word2_counts[c] = 1;
            }
        }

        vector<int> counts_1_vec;
        counts_1_vec.reserve(word1_counts.size());
        vector<int> counts_2_vec;
        counts_2_vec.reserve(word2_counts.size());

        // you need to have the same number of letters
        if(word1_counts.size() != word2_counts.size()){
            return false;
        }
        
        // you need to have the correct letters to transform
        for(auto pair: word1_counts){
            if(word2_counts.find(pair.first) == word2_counts.end()){
                return false;
            }
        }

        // letters must be in the same quantity.
        for(auto pair: word1_counts){
            counts_1_vec.push_back(pair.second);
        }
        for(auto pair: word2_counts){
            counts_2_vec.push_back(pair.second);
        }

        sort(counts_1_vec.begin(), counts_1_vec.end());
        sort(counts_2_vec.begin(), counts_2_vec.end());

        for(int i = 0; i < counts_1_vec.size(); i++){
            if(counts_1_vec[i] != counts_2_vec[i]) {
                return false;
            }
        }

        return true;
    }
};

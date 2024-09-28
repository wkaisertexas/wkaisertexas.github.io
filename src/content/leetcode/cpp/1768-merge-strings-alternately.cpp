class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int index_1 = 0;
        int index_2 = 0;
        int count = 0;

        string result_string = "";

        while(index_1 < word1.length() && index_2 < word2.length()){
            if(count % 2 == 0){
                result_string += word1[index_1++];
            } else {
                result_string += word2[index_2++];
            }
            count++;
        }

        while(index_1 < word1.length()){
            result_string += word1[index_1++];
        }
        
        while(index_2 < word2.length()){
            result_string += word2[index_2++];
        }
        return result_string;
    }
};

/**
 * I really do not like this longestCommonPrefix implementation it is very messy
 */
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string prefix;

        int j = 0;
        bool should_break = false;
        while(true){
            for(int i = 1; i < strs.size(); i++){
                if(strs[i].length() <= j || strs[i - 1].length() <= j){
                    should_break = true;
                    break;
                }
                if(strs[i][j] != strs[i - 1][j]){
                    should_break = true;
                    break;
                }
            }

            if(should_break){
                break;
            }

            if(strs[0] != ""){
                prefix += strs[0][j];
            }
            j++;
            
            if(strs[0].length() <= j){
                break;
            }
        }

        return prefix;
    }
};

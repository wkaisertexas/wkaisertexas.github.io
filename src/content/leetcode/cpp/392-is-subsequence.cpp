class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(s.length() > t.length()) {
            return false;
        }
        if(s.length() == 0){
            return true;
        }

        int s_pos = 0;
        for(int i = 0; i < t.length(); i++){
            if(s[s_pos] == t[i]){
                s_pos++;

                if(s_pos == s.length()) {
                    return true;
                }
            }
        }

        return false;
    }
};

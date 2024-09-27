class Solution {
public:
    bool isIsomorphic(string s, string t) {
        vector<char> s_seen;
        vector<char> t_seen;
        for(int i = 0; i < s.length(); i++){
            int seen_idx = -1;

            for(int j = 0; j < s_seen.size(); j++){
                bool found_s = s_seen[j] == s[i];
                bool found_t = t_seen[j] == t[i];

                if((found_t && !found_s) || (found_s && !found_t)) {
                    return false; // this can not be it
                }

                if(found_t || found_s){
                    seen_idx = j;
                    break;
                }
            }

            if(seen_idx == -1){
                s_seen.push_back(s[i]);
                t_seen.push_back(t[i]);
            }
        }
        
        return true;
    }
};

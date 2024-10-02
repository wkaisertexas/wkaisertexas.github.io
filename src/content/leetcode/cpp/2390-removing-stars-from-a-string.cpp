/*
 * Removes the stars. I do not know if substr is constant extra memory
 */
class Solution {
public:
    string removeStars(string s) {
        stack<char> removing;

        int size = 0;
        for(int i = 0; i < s.length(); i++){
            if(s[i] == '*'){
                size--;
            } else {
                s[size++] = s[i];
            }
        }

        return s.substr(0, size);
    }
};

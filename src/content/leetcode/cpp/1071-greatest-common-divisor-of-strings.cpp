class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        string gcd; 
    
        // two phases, a bulk and a cut
        // bulk - you find the longest string where str1 and str2 are still equal
        // you cut to see if that string equals the other string duplicated

        // bulk
        for(int i = 0; i < str1.length() && i < str2.length(); i++){
            if(str1[i] != str2[i]){
                break;
            }

            gcd += str1[i];
        }

        // cut
        for(int i = gcd.length(); i > 0; i--){
            if(str1.length() % i != 0 || str2.length() % i != 0){
                continue; // this can be not a gcd
            }

            // checking if the gcd matches the str1
            bool should_exit = false;
            for(int j = 0; j < str1.length(); j++){
                if(str1[j] != gcd[j % i]){
                    should_exit = true;
                    break;
                }
            }

            if(should_exit){
                continue;
            }
            
            // checking if the gcd matches the str2
            for(int j = 0; j < str2.length(); j++){
                if(str2[j] != gcd[j % i]){
                    should_exit = true;
                    break;
                }
            }

            if(should_exit){
                continue;
            }

            // we have found the largest gcd
            return gcd.substr(0, i);
        }

        return "";
    }
};

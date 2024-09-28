class Solution {
public:
    inline bool is_vowel(char c){
        switch(c){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                return false;
        }
    }
    
    int maxVowels(string s, int k) {
        int vowels = 0;
        for(int i = 0; i < min(s.length(), (size_t) k); i++){
            vowels += is_vowel(s[i]) ? 1 : 0;
        }

        int max_vowels = vowels;

        for(int i = min(s.length(), (size_t) k); i < s.length(); i++){
            vowels += is_vowel(s[i - k]) ? -1 : 0;
            vowels += is_vowel(s[i]) ? 1 : 0;

            max_vowels = max(max_vowels, vowels);
        }

        return max_vowels;
    }
};

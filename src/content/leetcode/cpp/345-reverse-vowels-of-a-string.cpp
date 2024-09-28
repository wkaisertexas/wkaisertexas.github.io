class Solution {
public:
    string reverseVowels(string s) {
        vector<int> vowels;

        for (int i = 0; i < s.length(); i++) {
            char c = s[i];

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
                c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                vowels.push_back(i);
            }
        }
        
        for (int i = 0; i < vowels.size() / 2; i++) {
            int bot = vowels[i];
            int top = vowels[vowels.size() - 1 - i];

            char bot_char = s[bot];
            s[bot] = s[top];
            s[top] = bot_char;
        }

        return s;
    }
};


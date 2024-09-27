class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0) return false;
        uint num = x;
        uint digit = 0;
        uint rev = 0;
        
        do {
            digit = num % 10;
            rev = (rev * 10) + digit;
            num = num / 10;
        } while (num != 0);

        return x == rev;
    }
};

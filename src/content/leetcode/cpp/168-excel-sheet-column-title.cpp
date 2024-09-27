class Solution {
public:
    string convertToTitle(int columnNumber) {
        // excel is 1-indexed
        string res = "";
        columnNumber--;
        do {
            int remainder = columnNumber % 26;
            res = string(1, 'A' + remainder) + res;

            columnNumber /= 26;
            columnNumber--;
        } while(columnNumber >= 0);

        return res;
    }
};

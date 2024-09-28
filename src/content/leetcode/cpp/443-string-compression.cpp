/*
* One takeaway from this is to not be "scared" of nested for loops
* this algorithim is still linear time, do not panic, but it makes the logic much clearer and the code much more readable
*/
class Solution {
public:
    int compress(vector<char>& chars) {
        if (chars.size() <= 1) {
            return chars.size();
        }

        int index = 0; // index to place the compressed character
        int i = 0;     // index to traverse the characters

        while (i < chars.size()) {
            char current_char = chars[i];
            int count = 0;

            while (i < chars.size() && chars[i] == current_char) {
                i++;
                count++;
            }

            chars[index++] = current_char;

            if (count > 1) {
                string count_str = to_string(count);
                for (char c : count_str) {
                    chars[index++] = c;
                }
            }
        }

        return index;
    }
};

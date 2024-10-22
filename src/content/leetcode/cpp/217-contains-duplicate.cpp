/**
 * I think this was good because I remembered for a set it is insert to put something in there.
 *
 * I could also have used if(count(n)) as well. However, this would likely be slower now that I am thinking about it.
 */
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> numbers;

        for(auto n: nums){
            int prev_size = numbers.size();
            numbers.insert(n);
            if(numbers.size() == prev_size){
                return true;
            }
        }

        return false;
    }
};

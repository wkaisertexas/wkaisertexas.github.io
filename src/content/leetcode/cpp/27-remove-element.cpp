class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int curr = 0;

        for(auto idx: nums){
            if(idx == val){
                continue;
            }
            nums[curr]= idx;
            curr++;
        }

        return curr;
    }
};

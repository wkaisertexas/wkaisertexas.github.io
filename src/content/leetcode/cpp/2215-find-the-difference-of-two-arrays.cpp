/*
 * i need to learn how to use iterators better
 *
 * And it is insert instead of add like in python
 */
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        set<int> nums1_set;
        set<int> nums2_set;

        for(auto num : nums1){
            nums1_set.insert(num);
        }
        for(auto num: nums2){
            nums2_set.insert(num);
        }

        vector<int> distinct_1;
        vector<int> distinct_2;

        for (set<int>::iterator itr = nums1_set.begin(); 
       itr != nums1_set.end(); itr++) {
            if(nums2_set.count(*itr)){
                continue;
            }

            distinct_1.push_back(*itr);
        }
   
      for (set<int>::iterator itr = nums2_set.begin(); 
       itr != nums2_set.end(); itr++) 
    {
            if(nums1_set.count(*itr)){
                continue;
            }

            distinct_2.push_back(*itr);
        }
        
        return {distinct_1, distinct_2};
    }
};

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        if(m + n == 0) return;

        int lower = m - 1;
        int upper = n - 1;

        for(int pos = m + n - 1; pos >= 0; pos--){
            if(upper < 0){
                return;
            }

            if(lower < 0 || nums1[lower] < nums2[upper]){
                nums1[pos] = nums2[upper];
                upper--;
            } else {
                nums1[pos] = nums1[lower];
                lower--;
            }
        }
    }
};

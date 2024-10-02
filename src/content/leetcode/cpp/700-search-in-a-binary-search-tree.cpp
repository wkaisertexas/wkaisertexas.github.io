/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, const int val) {
        TreeNode* curr = root;

        while(true){
            if(curr == nullptr){
                return nullptr;
            }

            if(val < curr->val){
                curr = curr->left;
            } else if(curr->val == val){
                return curr;
            } else {
                curr = curr->right;
            }
        }

        return nullptr;
    }
};

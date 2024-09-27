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
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> v;

        if(!root){
            return v;
        }

        if(root->left){
            auto ret_vec = inorderTraversal(root->left);
            v.reserve(v.size() + distance(ret_vec.begin(),ret_vec.end()));
            v.insert(v.end(),ret_vec.begin(),ret_vec.end());
        }
        v.push_back(root->val);
        if(root->right){
            auto ret_vec = inorderTraversal(root->right);
            v.reserve(v.size() + distance(ret_vec.begin(),ret_vec.end()));
            v.insert(v.end(),ret_vec.begin(),ret_vec.end());
        }

        return v;
    }
};

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
    vector<int> rightSideView(TreeNode* root) {
        if(root == nullptr){
            return {};
        }
        vector<int> return_vec;
        queue<pair<TreeNode*, int>> to_visit;

        to_visit.push(make_pair(root, 0));
        while(!to_visit.empty()){
            auto [node, depth] = to_visit.front();
            to_visit.pop();

            if(depth >= return_vec.size()){
                return_vec.push_back(node->val);
            }
            
            if(node->right != nullptr) {
                to_visit.push(make_pair(node->right, depth + 1));
            }

            if(node->left != nullptr) {
                to_visit.push(make_pair(node->left, depth + 1));
            }
        }

        return return_vec;
    }
};

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
    int goodNodes(const TreeNode* root) {
        constexpr int minValue = -10000 - 1;
        return dfs(minValue, root);
    }
private:
    int dfs(int max_num, const TreeNode* root){
        if(!root) {
            return 0;
        }

        max_num = max(max_num, root->val);

        int good_values = 0;

        if(root->val >= max_num){
            good_values++;
        }

        good_values += dfs(max_num, root->left);
        good_values += dfs(max_num, root->right);

        return good_values;
    }
};

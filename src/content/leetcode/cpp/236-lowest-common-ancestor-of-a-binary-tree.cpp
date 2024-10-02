/**
 * This ran on the first try which I thought was pretty hype.
 *
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* final_result = nullptr;
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        final_result = nullptr;

        dfs(root, p, q);

        return final_result;
    }


    int dfs(TreeNode* root, TreeNode* p, TreeNode* q){
        if(root == nullptr){
            return 0;
        }
        int result = 0;

        if(root == p){
            result |= 1;
        }
        if(root == q){
            result |= 2;
        }

        result |= dfs(root->left, p, q);
        result |= dfs(root->right, p, q);
        
        if(result == 3){
            // we have found it!
            if(final_result == nullptr){
                final_result = root;
            }
        }
        
        return result;
    }
};

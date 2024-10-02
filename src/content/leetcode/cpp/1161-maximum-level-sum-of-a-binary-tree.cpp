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
    int maxLevelSum(TreeNode* root) {
        vector<int> level_sums;
        queue<pair<TreeNode*, int>> bfs_queue;

        bfs_queue.push(make_pair(root, 0)); // root can not be null
        while(!bfs_queue.empty()){
            auto [node, depth] = bfs_queue.front();
            bfs_queue.pop();

            if(level_sums.size() <= depth){
                level_sums.push_back(node->val);
            } else {
                level_sums[depth] += node->val;
            }

            if(node->left != nullptr){
                bfs_queue.push(make_pair(node->left, depth + 1));
            }
            if(node->right != nullptr){
                bfs_queue.push(make_pair(node->right, depth + 1));
            }
        }
        
        int max_sum = level_sums[0];
        int max_index = 0;
        for(int i = 0; i < level_sums.size(); i++){
            if(level_sums[i] > max_sum){
                max_sum = level_sums[i];
                max_index = i;
            }
        }

        return max_index + 1; // levels are 1-index
    }
};

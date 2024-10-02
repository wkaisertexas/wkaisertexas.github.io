class Solution {
public:
    int pathSum(const TreeNode* root, int targetSum) {
        if (root == nullptr) {
            return 0;
        }

        int paths_count = pathFromNode(root, targetSum);

        paths_count += pathSum(root->left, targetSum);
        paths_count += pathSum(root->right, targetSum);

        return paths_count;
    }

private:
    int pathFromNode(const TreeNode* node, long long sum) {
        if (node == nullptr) {
            return 0;
        }

        int count = (node->val == sum) ? 1 : 0;

        count += pathFromNode(node->left, sum - node->val);
        count += pathFromNode(node->right, sum - node->val);

        return count;
    }
};


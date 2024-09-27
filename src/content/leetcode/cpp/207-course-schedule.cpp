/*
 * The Depth-First Search needs both a path node and a seen node
 *
 * If we have already seen the node, that is fine. But seeing the node twice 
 * in the same DFS iteration is bad. Which is why two vectors / sets are needed
 * to keep track of visited and not visited
 */
class Solution {
public:
    bool dfs(int prereq, map<int, vector<int>>& preq, vector<bool>& seen, vector<bool>& path) {
        if (path[prereq]) {
            return false;
        }

        if (seen[prereq]) {
            return true;
        }

        path[prereq] = true;

        if (preq.count(prereq)) {
            for (int course : preq[prereq]) {
                if (!dfs(course, preq, seen, path)) {
                    return false;
                }
            }
        }

        path[prereq] = false;
        seen[prereq] = true;
        
        return true;
    }

    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<bool> seen(numCourses, false);
        vector<bool> path(numCourses, false); 
        map<int, vector<int>> preq;

        for (auto& p : prerequisites) {
            int target_course = p[0];
            int preq_course = p[1];
            preq[preq_course].push_back(target_course);
        }

        for (int i = 0; i < numCourses; i++) {
            if (!seen[i]) {
                if (!dfs(i, preq, seen, path)) {
                    return false;
                }
            }
        }

        return true;
    }
};


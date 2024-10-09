/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head == nullptr) {
            return nullptr;
        }

        ListNode* curr = head;
        ListNode* prev = nullptr;

        while(curr){
            const auto next = curr->next;
            curr->next = prev;

            prev = curr;
            curr = next;
        }

        return prev; // the new of the list
    }
};

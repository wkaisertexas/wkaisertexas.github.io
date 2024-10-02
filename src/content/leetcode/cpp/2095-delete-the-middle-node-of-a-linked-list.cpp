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
    ListNode* deleteMiddle(ListNode* head) {
        if(head == nullptr || head->next == nullptr){
            return nullptr;
        }

        ListNode* fast = head;
        ListNode* slow = head;

        bool slow_inc = false;
        bool first = true;

        while(true){
            fast = fast->next;

            if(fast == nullptr){
                break;
            }
            
            if(!first && slow_inc){
                slow = slow->next;
            }
            if(first){
                first = !first;
            } else {
                slow_inc = !slow_inc;
            }
        }

        auto tmp = slow->next;
        slow->next = slow->next->next;

        return head;
    }
};

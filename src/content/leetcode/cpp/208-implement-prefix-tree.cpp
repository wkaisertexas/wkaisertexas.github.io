class TrieLevel{
    public:
        vector<TrieLevel*> next;
        bool terminal = false;

        TrieLevel() : next(vector<TrieLevel*>(26, nullptr)) {}
};

class Trie {
public:
    TrieLevel* top_level;
    Trie() {
        top_level = new TrieLevel();
    }
    
    void insert(string word) {
        TrieLevel* curr = top_level;
        for(char c: word){
            int idx = c - 'a';
            if(!curr->next[idx]){
                curr->next[idx] = new TrieLevel();
            }

            curr = curr->next[idx];
        }
        curr->terminal = true;
    }
    
    bool search(string word) {
        TrieLevel* curr = top_level;
        for(char c: word){
            int idx = c - 'a';
            if(!curr->next[idx]){
                return false;
            }

            curr = curr->next[idx];
        }

        return curr->terminal;
    }
    
    bool startsWith(string prefix) {
        TrieLevel* curr = top_level;
        for(char c: prefix){
            int idx = c - 'a';
            if(!curr->next[idx]){
                return false;
            }

            curr = curr->next[idx];
        }

        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */

/**
 * Apparently this gives a runtime which beats 98.59%
 *
 * This question was expecting you to use a trie which would have been correct if you were trying to do multiple searches, but the format of this question was such that you had a unique list of products per Search Word which means constructing a proper trie is not as helpful.
 *
 * Plus I think the increased locality benefits can do well to explain these changes
 */
class Solution {
public:
    vector<vector<string>> suggestedProducts(vector<string>& products, const string& searchWord) {
        vector<vector<string>> suggestions(searchWord.length());
        sort(products.begin(), products.end());

        for(const auto& product: products){
            for(int i = 0; i < searchWord.length(); i++){
                if(i >= product.length()){
                    break;
                }
                if(searchWord[i] != product[i]){
                    break;
                }
                if(suggestions[i].size() >= 3){
                    continue;
                }

                suggestions[i].push_back(product);
            }
        }

        return suggestions;
    }
};

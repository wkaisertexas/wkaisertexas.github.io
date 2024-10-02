/*
 * I had this for my IBM HackerRank evaluation. To be honest, I thought it was at least a medium.
 *
 * I got packing strings into integers right away, but knowing then to compute n choose 2 for the number 
 * of solutions was difficult
 *
 * n choose 2 = (n)(n-1) / 2 
 * n + 1 choose 2 = (n + 1) n / 2
 *
 * n + 1 choose 2 - n choose 2 = (n + 1)(n)/2 - (n)(n-1)/2 = (n^2+n - n^2 + n) / 2 = 2n / 2 = n
 *
 * I was right to use probability here, but I was unable to quickly realize the property of pairs which
 * meant that you could just add the number of pairs to get the right answer if you were doing this n choose schema
 * 
 * I was particularly confused because I ran into some integer overflow errors which seemed crazy given what I was doing.
 */
class Solution {
public:
    int maximumNumberOfStringPairs(vector<string>& words) {
        unordered_map<int, int> counts;
        int total = 0;
        for(auto w: words){
            int seq = 0;
            for(auto c: w){
                seq |= 1 << (c - 'a');
            }
            total += counts[seq]++;
        }

        return total;
    }
};

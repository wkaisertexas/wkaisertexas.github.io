/*
 * I should have realized that this solution is recursive faster
 */
class StockSpanner {
public:
    stack<pair<int, int>> prices;
    int count = 0;
    StockSpanner(){}
    
    int next(int price) {
        int span = 1;

        while(!prices.empty() && price >= prices.top().first){
            span += prices.top().second;
            prices.pop();
        }

        prices.push(make_pair(price, span));

        return span;
    }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner* obj = new StockSpanner();
 * int param_1 = obj->next(price);
 */

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max_profit = 0
        buy = prices[0]
        for i in range(1, len(prices)):
            if(buy>prices[i]):
                buy = prices[i]
            elif(prices[i]-buy > max_profit):
                max_profit = prices[i]-buy

        return max_profit
        
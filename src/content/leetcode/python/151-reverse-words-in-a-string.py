"""
The fact that you can do this so easily is why I love python
"""
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(s.strip().split()[::-1])

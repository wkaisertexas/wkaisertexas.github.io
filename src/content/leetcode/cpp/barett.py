import string

def dict_to_hashable(d: dict):
    return tuple(sorted(d.items()))

# a a b c
# b a a c
#
# a a b c
# 
# a - 2
# b - 1
# c - 1
#
# b a a c
# 
# a - 2
# b - 1
#

from collections import defaultdict

def anagrams_list(input_words: list[str]) -> list[list[str]]:
    """
    Returns the valid anagrams from an input list
    """
    mapping = defaultdict(list)

    for idx, word in enumerate(input_words):
        freq_map = defaultdict(int)

        for char in word:
            freq_map[char] += 1

        hashed_freq_map = dict_to_hashable(freq_map)

        mapping[hashed_freq_map].append(idx)

    return_anagrams = []
    for _, value in mapping.items():
        return_anagrams.append([input_words[idx] for idx in value])

    return return_anagrams

input_words = ["abc", "bca", "ccc", "bcad", "", "aaa", "aab", "baa", "ABC", "BCA"]

print(anagrams_list(input_words))



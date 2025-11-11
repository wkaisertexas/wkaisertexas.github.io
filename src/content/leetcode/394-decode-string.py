class Solution:
    def decodeString(self, s: str) -> str:
        string_stack = ""
        bracket_indices = []
        for c in s:
            if c == '[':
                i = -1
                while i >= -len(string_stack) and string_stack[i].isdigit():
                    i -= 1

                if i != -len(string_stack) or not string_stack[i].isdigit():
                    i += 1

                count = int(string_stack[i:])
                string_stack = string_stack[:i]
                bracket_indices += [(len(string_stack), count)]
                continue

            if c != ']':
                string_stack += c
                continue

            index, count = bracket_indices[-1]
            bracket_indices = bracket_indices[:-1]

            string_stack = string_stack[:index] + (string_stack[index:] * count)
  
        return string_stack

def solved(s): return ''.join(sorted(s if len(s)%2==0 else s[:len(s)//2] + s[(len(s)//2)+1:]))

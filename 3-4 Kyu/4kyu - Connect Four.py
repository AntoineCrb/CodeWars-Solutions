def who_is_winner(p):
    arr, top = [[0]*6 for d in range(7)], [0]*7
    for a in range(len(p)):
        ind, ite, c, ma = ord(p[a][0]) - 65, 0, (a%2)+1, 0
        arr[ind][top[ind]] = c
        if max([ch(arr, [ind, top[ind]+1], [1,1], c) + ch(arr, [ind, top[ind]-1], [1,-1], c),
        ch(arr, [ind-1, top[ind]], [0,-1], c) + ch(arr, [ind+1, top[ind]], [0,1], c),
        ch(arr, [ind+1, top[ind]+1], [1,1], c, True) + ch(arr, [ind-1, top[ind]-1], [-1,-1], c, True),
        ch(arr, [ind+1, top[ind]-1], [1,-1], c, True) + ch(arr, [ind-1, top[ind]+1], [-1,1], c, True)]) > 2:
            return p[a][2::]
        top[ind]+=1
    return "Draw"

def ch(arr, pos, num, c, d=False):
    s=0
    while 0 <= pos[0] < 7 and 0 <= pos[1] < 6 and arr[pos[0]][pos[1]] == c:
        if d: pos = [pos[0]+num[0], pos[1]+num[1]]
        else: pos[num[0]]+=num[1]
        s+=1
    return s
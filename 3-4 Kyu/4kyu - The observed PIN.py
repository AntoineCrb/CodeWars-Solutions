adj=[['8'], ['2','4'],['1','3','5'],['2','6'],['1','5','7'],['2','4','6','8'],['3','5','9'],['4','8'],['7','5','9','0'],['8','6']]
def get_pins(o):
    arr, o = [], list(o)
    for a in [o[0]]+adj[int(o.pop(0))]: arr.append(a)
    return get_array(o, arr)
def get_array(o, arr):
    if len(o)==0: return arr
    b, ar = o.pop(0), []
    for a in [b]+adj[int(b)]:
        for i in range(len(arr)):ar.append(arr[i]+a)
    return get_array(o, ar)
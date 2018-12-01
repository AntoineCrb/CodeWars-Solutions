def zeros(n):
    c, b = n, 2
    while c > 5**2:
        c /= 5
        b += 1
    return sum([n//5**x for x in range(1,b)])
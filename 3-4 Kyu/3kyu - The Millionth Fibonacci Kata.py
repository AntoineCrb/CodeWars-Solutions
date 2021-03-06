def multvec(m, v):return [m[0][0] * v[0] + m[0][1] * v[1],m[1][0] * v[0] + m[1][1] * v[1]]
def calcTerm(v, m, n):return multvec(matpow(m, n - 1), v)[1]
def matmult(a, b):
    c = [[0, 0], [0, 0]]
    for i in range(2):
        for j in range(2):
            for k in range(2):
                c[i][j] += a[i][k] * b[k][j]
    return c
def matpow(m, n):
    if n == 1:
        return m
    mp = matpow(m, n >> 1)
    res = matmult(mp, mp)
    if n & 1:
        res = matmult(res, m)
    return res
def fib(n):return n if n >= 0 and n <= 1 else calcTerm([0, 1], [[0, 1], [1, 1]], n) if n > 1 else calcTerm([1, 0], [[0, 1], [1, -1]], 1 - n)
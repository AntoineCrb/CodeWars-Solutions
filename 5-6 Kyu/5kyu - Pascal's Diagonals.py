from functools import reduce
def generate_diagonal(n, l): return [comb(n+d, d) for d in range(l)]
def comb(n, k): return f(n) / (f(k) * f(n - k))
def f(n): return 1 if n<2 else reduce(lambda x, y: x*y, range(2, n+1))
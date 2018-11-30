class Primes {
    static * stream() {
        yield 2
        var n = 3
        while (true) {
            if (isPrime(n)) {
                yield n
            }
            n += 2
        }
    }
}

function isPrime(n) {
    for (var a = 3; a <= ~~Math.sqrt(n); a += 2) {
        if (n % a == 0) return false;
    }
    return true;
}
function expand(e) {
    e = e.split('^')
    var i = e[0].slice(2, e[0].length)
    i = i.indexOf('-') == -1 ? i.indexOf('+') : i.indexOf('-');
    var l = e[0].slice(i + 1, i + 2), f = e[0].slice(1, i + 1), s = Number(e[0].slice(i + 2, e[0].length - 1)), str = ""
    f = f == '-' ? -1 : isNaN(f) || f == 0 ? 1 : f
    for (var a = e[1]; a >= 0; --a) {
        var b = (f ** a * s ** (e[1] - a)) * comb(e[1], a)
        str += b == 0 ? '' : (a == e[1] || b < 0 ? '' : '+') + (b == 1 && a != 0 ? '' : b == -1 && a != 0 ? '-' : b) + (a >= 1 ? `${l}${a==1?'':'^'+a}` : '')
    }
    return str
}

function comb(n, k) {
    var f = n => {
        var v = 1;
        for (var i = 2; i <= n; i++) v *= i;
        return v;
    }
    return f(n) / (f(k) * f(n - k))
}
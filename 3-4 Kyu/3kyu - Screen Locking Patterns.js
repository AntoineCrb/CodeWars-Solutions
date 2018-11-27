const base = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function check(dot, ar, v, m) {
    if (v == 1) return;
    var d = ar.indexOf(v == 0 ? dot + 2 * m : dot - 2 * m)
    if (ar.indexOf(v == 0 ? dot + m : dot - 1 * m) != -1 && d != -1) ar.splice(d, 1);
}
function getPosibilities(length, array) {
    if (length == array.length) return 1;
    var dot = array[array.length - 1],
        po = base.filter(b => array.indexOf(b) == -1);
    check(dot, po, dot % 3, 1)
    check(dot, po, ~~(dot / 3), 3)
    if (dot % 2 == 0 && dot != 4 && po.indexOf(4) != -1) {
        var i = po.indexOf(8 - dot)
        if (i != -1) po.splice(i, 1);
    }
    var s = 0;
    po.forEach(p => s += getPosibilities(length, array.concat([p])));
    return s;
}

function countPatternsFrom(firstDot, length) {
    if (length == 0 || length > 9) return 0;
    return getPosibilities(length, [firstDot.charCodeAt(0) - 65])
}
function switchTheBulb(gameMap) {  // 1st step : Convert the string to array of Bulb
    var bulbs = [], c = 0, r = 0, wall = false;
    Array.from(gameMap).forEach(g => {
        switch (g) {
            case "|":
                if (wall) {
                    c = 0;
                    r++
                }
                wall = !wall;
                break;
            case "B":
                bulbs.push([r, c]);
            case ".":
                c++;
                break;
        }
    })
    for (var a = 0; a < bulbs.length; a++) { // 2nd step : Find a path
        var path = findPath(bulbs, bulbs[a], [], bulbs.length)
        if (path.length > 1) return path;
    }
    return false
}

function findPath(array, start, d, length) {
    var done = d.slice(), c = array.find(i => i == start);
    done.push(c);
    if (done.length == length) return done;
    var p = array.filter(i => done.indexOf(i) == -1 && (i[0] == c[0] || i[1] == c[1] || Math.abs(i[0] - c[0]) == Math.abs(i[1] - c[1]))); // Get all possibilities
    for (var a = 0; a < p.length; a++) {
        var path = findPath(array, p[a], done, length);
        if (path.length > 1) return path;
    }
    return false;
}
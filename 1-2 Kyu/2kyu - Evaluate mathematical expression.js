var calc = function (expression) {
    return calculate(expression.replace(/ /g, ''));
};

function calculate(string, index = [0, string.length]) {
    string = string.replace("--", "+").replace("+-", "-").replace("(+", "(").replace("/+", "/").replace("*+", "*");
    var str = string.substring(index[0], index[1]);
    var next = str.indexOf("(");
    if (next != -1) {
        var c = 0;
        var e = next;
        while (c != -1) {
            e++;
            if (str[e] == "(") {
                c++;
            } else if (str[e] == ")") {
                c--;
            }
        }
        return calculate(string, [index[0] + next + 1, index[0] + e])
    }
    var d = str.indexOf("/");
    var m = str.indexOf("*");
    next = (d < m && d != -1) || m == -1 ? d : m;
    if (next == -1) {
        d = str.indexOf("+");
        m = str.substring(1, str.length).indexOf("-");
        next = (d < (m + 1) && d != -1) || m == -1 ? d : (m + 1);
    }
    if (next == -1) {
        if (Number(string)) {
            return Number(string);
        } else if (string == "0") {
            return 0;
        }
        string = string.substring(0, index[0] - 1) + Number(str).toString() + (index[1] == string.length ? "" : string.substring(index[1] + 1, string.length))
        return calculate(string)
    }
    var number = 0
    var p = getNum(str, next, -1);
    var n = getNum(str, next, 1);
    switch (str[next]) {
        case "*":
            number = p[0] * n[0]
            break;
        case "/":
            number = p[0] / n[0]
            break;
        case "+":
            number = p[0] + n[0]
            break;
        case "-":
            if (p == false) {
                return -n[0]
            }
            number = p[0] - n[0]
            break;
    }
    string = string.substring(0, index[0] + next - p[1]) + number.toString() + string.substring(index[0] + next + n[1] + 1, string.length)
    return calculate(string);
}

function getNum(str, index, order) {
    var p = ["(", ")", "*", "/"]
    var p2 = ["+", "-"]
    var i = index
    while (!p.includes(str[i += order]) && str[i] && (!p2.includes(str[i]) || i == index + order)) { }
    if (i == (index + order)) {
        return false
    }
    str = str.substring(order == 1 ? index + 1 : index, order == -1 && str[i] != "-" ? i + 1 : i);
    return [Number(str), str.length];
}
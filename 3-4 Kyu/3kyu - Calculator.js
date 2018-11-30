const Calculator = function () {
    this.evaluate = str => {
        str = str.replace(/ /g, '').replace(/--/g, '+')
        var m = str.indexOf("*")
        var d = str.indexOf("/")
        if (m == -1 && d == -1) {
            m = str.indexOf("+")
            d = str.substring(1, str.length).indexOf("-") + 1
        }
        var next = (d < m && d > 0) || m == -1 ? d : m;
        if (next < 1) {
            return parseFloat(str)
        }
        var number = 0
        var p = this.get(str, next, -1);
        var n = this.get(str, next, 1);
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
                number = p[0] - n[0]
                break;
        }
        str = str.substring(0, next - p[1]) + number.toString() + str.substring(next + n[1] + 1, str.length)
        return this.evaluate(str)
    }
    this.get = (str, index, ord) => {
        var p = ["-", "+", "*", "/"]
        var i = index
        while (!p.includes(str[i += ord]) && str[i]) {}
        str = str.substring(ord == 1 ? index + 1 : index, ord == -1 && str[i] != "-" ? i + 1 : i);
        return [parseFloat(str), str.length];
    }
};
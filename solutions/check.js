function balancedStringSplit(s) {
    var op = 0;
    var count = {
        'L': 0,
        'R': 0
    };
    for (var i = 0; i < s.length; i++) {
        if (s[i] == 'L') {
            count["L"] += 1;
        }
        else {
            count["R"] += 1;
        }
        if (count['L'] == count['R']) {
            op++;
            count['L'] = 0;
            count['R'] = 0;
        }
    }
    return op;
}
;
var inp1 = "RLRRRLLRLL";
console.log(balancedStringSplit(inp1), true);

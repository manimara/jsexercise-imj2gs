var a = [[1, 2], [3, 4]];
var b = [[4, 3], [2, 1]];
var c = [[1, 3], [2, 4]];
//a and b are equal while a and c are not equal
function compareArray(a1, a2) {
    //length check
    var len = a1.length;
    if (len != a2.length)
        return false;
    var a1t = [], a2t = [];
    //sum of the elements in array
    var reducer = function (acc, value) { return value + acc; };
    for (var i = 0; i < len; i++) {
        if (a1[i].length != a2[i].length)
            return false;
        var a1c = a1[i].reduce(reducer, 0);
        var a2c = a2[i].reduce(reducer, 0);
        a1t.push(a1c);
        a2t.push(a2c);
    }
    var matched = [];
    a1t.forEach(function (a, i) {
        var matchedindex = a2t.indexOf(a);
        if (matchedindex < 0) {
            return false;
        }
        matched[i] = matchedindex;
    });
    console.log(a1t, a2t, matched, `Proper match`);
    return true;

    //
}
if(! compareArray(a, c) ){ 
    console.log("not proper match");
}
// compareArray(a, b);
// compareArray(b, c);

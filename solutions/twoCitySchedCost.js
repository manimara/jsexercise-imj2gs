/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    var diff = [];
    var output = 0;
    costs.forEach(function (a, idx) { return diff.push([a[0] - a[1], idx]); });
    console.log(diff);
    diff.sort(function (a, b) { return b[0] - a[0]; });
    console.log("after sort", diff);
    var len = diff.length - 1;
    var index = 0;
    console.log(diff);
    for (var i = len; i >= 0; i--) {
        if (i < len / 2)
            index = 1;
        output += costs[diff[i][1]][index];
        console.log(output, costs[diff[i][1]], index);
    }
    return output;
};
var inp1 = [[10, 20], [30, 200], [400, 50], [30, 20]];
var inp2 = [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]];
console.log("\nTwo city scheduling\n", inp1, twoCitySchedCost(inp1), 110);

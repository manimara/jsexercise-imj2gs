/**
 * @param {number[][]} costs
 * @return {number}
 */

var twoCitySchedCost = function(costs) {
    var diff = [];
    let output = 0;
    
    costs.forEach((a, idx) => diff.push( [a[0]-a[1], idx]));
    console.log(diff);

    diff.sort((a,b) => b[0]-a[0] );
    console.log(`after sort`, diff);

    let len = diff.length-1;
    let index = 0;
    console.log(diff);
    for(let i = len; i >=0 ; i--){
        if(i < len/2)
            index = 1;
        output += costs[diff[i][1]][index];
        console.log(output, costs[diff[i][1]], index)
    }

    return output;
};
let inp1 = [[10,20],[30,200],[400,50],[30,20]];
let inp2 =[[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
console.log(`
Two city scheduling
`, 
inp1,
twoCitySchedCost(inp1),
110,
// inp2,
// twoCitySchedCost(inp2),
// 1859,
)

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 1)
        return true;
    for(let i=n; i  > 1;){
        if(i==2){
            return true;
        }
        if(i %2 != 0){
            return false
        }else{
            i = n /2;
        }
    }
    return false;
    
};

const inp1 = 2;
const inp2 = 4;
const inp3 = 32;
const inp4 = 8096;
console.log(

    isPowerOfTwo(inp1),
    isPowerOfTwo(inp2),
    isPowerOfTwo(inp3),
    isPowerOfTwo(inp4),
    // op
)
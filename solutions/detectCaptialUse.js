/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {    
    //all caps(65-90)
    
    //all small(97-122)
    
    //first only caps
    let l = word.length;
    let op = '';
    let num;
    
    for(let i =1; i<l; i++ ){
        num = word.charCodeAt(i)
        if(num >= 65 && num <= 90){
            if(op[i-1] == 's'){
                return false;
            }
            op +='c'
        }else if(num >= 97 && num <= 122){
            if(i > 1 && op[i-1] == 'c'){
                return false;
            }
            op +='s'
        }
            
    }
    console.log(op)
    return true;
    
};

const inp1 = 'FlaG';
const inp2 = "Leetcode";
const inp3 = "USA";
const inp4 = "others";
console.log(

    detectCapitalUse(inp1),
    detectCapitalUse(inp2),
    detectCapitalUse(inp3),
    detectCapitalUse(inp4),
    // op
)
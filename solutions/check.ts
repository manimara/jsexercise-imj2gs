function balancedStringSplit(s: string): number {
    let op: number =0;
    let count : {[key: string]:number} = {
        'L' : 0,
        'R' : 0
    };
    console.log(count["L"], count["R"], count);
    for(let i=0; i< s.length; i++){
        if(s[i] == 'L'){
            count["L"] +=1
        }else{
            count["R"] +=1
        }
        if(count['L'] == count['R']){
            op++;
            count['L'] = 0;
            count['R'] = 0;
        }
        
    }
    return op;

};
const inp1 = "RLRRRLLRLL";

console.log(
    balancedStringSplit(inp1),
    true
)
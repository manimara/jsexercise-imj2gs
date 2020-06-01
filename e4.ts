const a = [[1,2], [3, 4]]
const b = [[4, 3], [2, 1]]
const c = [[1,3], [2,4]]
//a and b are equal while a and c are not equal

function compareArray(a1: number[][] ,a2 :  number[][]){
    //length check
    const len = a1.length;
    if(len != a2.length)
        return false;
    let a1t = [], a2t = [];
    //sum of the elements in array
    const reducer = (acc, value) => value + acc ;
    for(let i=0;i < len ; i++){
        if(a1[i].length != a2[i].length)
            return false;
        
        let a1c = a1[i].reduce(reducer, 0);
        let a2c = a2[i].reduce(reducer, 0);

        a1t.push(a1c);
        a2t.push(a2c);

    }

    let matched = [];
    a1t.forEach((a, i) => {
        let matchedindex = a2t.indexOf(a)
        if(matchedindex < 0){
            return false;
        }  
        matched[i] = matchedindex;
    })

    console.log(matched);
    //
}

compareArray(a,b);
compareArray(a,c);
compareArray(b,c);
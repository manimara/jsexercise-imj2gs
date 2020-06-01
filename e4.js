var a = [[1, 2], [3, 4]];
var b = [[4, 3], [2, 1]];
var c = [[1, 3], [2, 4]];
//a and b are equal while a and c are not equal
function compareArray(a1, a2) {
    //length check
    var len = a1.length;
    if (len != a2.length)
        return false;

        for (let i = 0; i < len; i++) {
        a1[i].sort();
        a2[i].sort();
    }

    a1.sort();
    a2.sort();

    for(let i=0; i< len; i++){
        let innerLength = a1[i].length;
        if (a1[i].length != a2[i].length)
            return false;
        
        for(let j=0; j< innerLength; j++){
            if(a1[i][j] != a2[i][j]){
                console.log(a1[i][j], a2[i][j], i, j);
                return false;
            }
        }
    }


   console.log(a1, a2, `Proper match`);
    return true;
}
if(! compareArray(a, c) ){ 
    console.log("not proper match");
}
compareArray(a, b);
compareArray(b, c);

c1 = [
    [3,2,2],
    [7,4,2]
]

c2 = [
    [2,3,2],
    [7,4,2]
]

c3 = [
    [3,1,2],
    [2,7,2]
]

c4 = [
    [1,2],
    [2,3,4,5],
    [6,7,8]
]

c5 = [
    [7,6,8],
    [5,3,4,2],
    [2,1]
]
console.log(
    c1,c2, compareArray(c1, c2), true,  "\n",
    c1,c3, compareArray(c1, c3), false, "\n",
    c3,c2, compareArray(c3, c2), false, "\n",
    c4,c5, compareArray(c4, c5), true, "\n",
)
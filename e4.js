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
        if(!(a1[i].toString() == a2[i].toString()))
            return false;
    }


   console.log(a1, a2, `Proper match`);
    return true;
}

module.exports = compareArray;
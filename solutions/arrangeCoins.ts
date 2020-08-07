function arrangeCoins(n: number,): number {
    let i = Math.floor(Math.sqrt(n));
    let j=0;
    for(;j<= n;++i){
       j = (i * (i+1)) /2;
       console.log(j, i);
    }
    return i-2;
};

// let inp = [1,2,3,4,5,6,7];
let op = 3;

console.log(
    arrangeCoins(3)
,'output',2
);


console.log(
    arrangeCoins(8)
,'output',3
)
console.log(
    arrangeCoins(1804289383), 'output',60070
);

// 1804292556
// 1804232485


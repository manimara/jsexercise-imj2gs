function containsDuplicate(nums: number[]): boolean {
    
    for(let i=0; i< nums.length; i++){
        if( i !== nums.lastIndexOf(nums[i])){
            return true;
        }
    }
    return false;
};

let inp = [1,2,3,4,5,6,7];
let op = 3;

console.log(
rotate(inp, 3),
[5,6,7, 1,2,3,4]
)
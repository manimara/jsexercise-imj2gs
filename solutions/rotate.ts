function rotate(nums: number[], k: number): void {
    if(nums.length ==0)
    return;
    const len = nums.length;
    for(let i=0; i< k; i++){
        console.log(nums, k, i)
        nums.unshift(nums[len-1]);
        nums.length -=1;
    }
};

let inp = [1,2,3,4,5,6,7];
let op = 3;

console.log(
rotate(inp, 3),
[5,6,7, 1,2,3,4]
)
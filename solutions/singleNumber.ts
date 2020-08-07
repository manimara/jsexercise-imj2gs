/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let row : number[];
    let op : row[];
    let length = Math.floor(Math.sqrt(root.length+1));
    
    for(let i=0; i<=lenght; i++ ){
        row = [];
        let innerLength = Math.pow(2,i)
        for(let j=0; j<=innerLength; j++ ){
            row[j] = root[i+j];
        }
        op.push(row);
    }
return op;
};
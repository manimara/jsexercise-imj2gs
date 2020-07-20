let arr1 = [1, 3, 6, 8];
let arr2 = [2, 4, 5, 7, 10, 12, 14];
let output1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14];

console.log(combineSortedArray(arr1, arr2));
function combineSortedArray(arr1, arr2) {
  let l1 = arr1.length;
  let l2 = arr2.length;
  let output = [];
  let i = 0, j = 0;
  for (; i < l1 && j < l2; ) {
    if (arr1[i] > arr2[j]) {
      output[i + j] = arr2[j];
      j++;
    } else {
      output[i + j] = arr1[i];
      i++;
    }
  }
  if (j < l2) {
    output = output.concat(arr2.slice(j));
  } else if (i < l1) {
    output = output.concat(arr1.slice(i));
  }
  return output;
}

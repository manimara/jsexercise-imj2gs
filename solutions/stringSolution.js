function formatStringWithNumber(stringText) {
  let l = stringText.length;
  let output;
  let count = 1;
  let prev = stringText[0];
  for (var i = 1; i <= l; i++) {
    let current = stringText[i];
    if (prev == current) {
      count += 1;
    } else {
      output += `${count}${prev}`;
      count = 1;
      prev = current;
    }
  }
  return output;
}

let stringText = "ppwweedook";
// let output = 2p2w2e1d2o1k

console.log(formatStringWithNumber(stringText));

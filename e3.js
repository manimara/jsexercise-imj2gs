//let input1 = [3,0,2,0,4];
let input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
op = 9

var loopcnt = 0;
function findLeftMax(elPos, ar){
  debugger;
  let max = 0;      
  for(let j=elPos-1; j>= 0; j--){
    if(max < ar[j])
     {
      max = ar[j];
      leftMaxIndex = j;
     }
     loopcnt++;
  }
  return max;
}

function findRightMax(elPos, len, ar){
  debugger;
  let max = 0;
  for(let j=elPos+1; j< len; j++){
    if(max < ar[j]){
      max = ar[j];
      rightMaxIndex = j;
    }
    loopcnt++;
  }
  return max;
}

function findStoageofElement(){

}

function rainWaterHarvesting( inp1 ){
  let l =  inp1.length;
  rightMaxIndex = 0;
  leftMaxIndex = 0;
  let leftMax, rightMax;
  let storage = 0;
  let rightMaxPosition=0;
  for(let i=1; i<l; i++ ){
    let currentStorage=0;
    if( leftMaxIndex < i)
      leftMax = findLeftMax(i,inp1);
    // if(rightMaxPosition)
    if( rightMaxIndex < i)
      rightMax = findRightMax(i,l, inp1);
    let currentStorage= Math.min(leftMax, rightMax)- inp1[i];
    storage += (currentStorage > 0 ) ? currentStorage : 0;
    console.log(
      leftMax, 
      rightMax,
      currentStorage,
      storage,
      loopcnt
      )

  }

  return storage;

}

rainWaterHarvesting( input1 );

//trapping rainwater problem
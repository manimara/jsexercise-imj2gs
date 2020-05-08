let input1 = [3,0,2,0,4];
op = 9

function findLeftMax(elPos, ar){
  debugger;
  let max = 0;      
  for(let j=elPos-1; j> 0; j--){
    if(max < ar[j])
      max = ar[j]
  }
  return max;                                                                                                                                                                                               
}

function findRightMax(elPos, len, ar){
  debugger;
  let max = 0;
  for(let j=elPos+1; j< len; j++){
    if(max < ar[j])
      max = ar[j]
  }
  return max;
}

function findStoageofElement(){

}

function rainWaterHarvesting( inp1 ){

  let l =  inp1.length;
  let leftMax, rightMax;
  let storage;
  for(let i=1; i<l; i++ ){
    let currentStorage=0;
    leftMax = findLeftMax(i,inp1);
    rightMax = findRightMax(i,l, inp1);
    let currentStorage= Math.min(leftMax, rightMax);
    storage += currentStorage; 
    console.log(
      leftMax, 
      rightMax,
      currentStorage,
      storage)

  }
  
  return storage;

}

rainWaterHarvesting( input1 );
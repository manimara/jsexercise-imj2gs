function onLoad(n) {
  let cnt = 0;
  console.time();
  let myNum = n * Math.pow(10,8);
  for (var i = 0; i < myNum; i++) {
    cnt += i;
  }
  console.timeEnd();
  alert(cnt);
//   return cnt;
}

function asyncLoad(){
    let n = document.getElementsByTagName("form")[0].getElementsByTagName("input")[0].value;
    setTimeout(((n) =>{
        let cnt = 0;
        console.log(`Async load`);
        console.time();
        let myNum = n * Math.pow(10,8);
        for (var i = 0; i < myNum; i++) {
          cnt += i;
        }
        console.timeEnd();
        alert(cnt);
    })(n), 0);
}


indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
IDBTransaction = window.IDBTransaction;
dbV = 1 ;
let req = indexedDB.open("flowersFile", dbV)

req.onsuccess = function(res){
  console.log("hello", res)
  db = req.result;
  console.log(
    req.result
  );
}

req.onupgradeneeded = function(event){}

//
crateObjectStore = function(database){
  database.createObjectStore("flowers")
}

//getting the image---
const xhr = new XMLHttpRequest(), blob;
xhr.open("GET", "lotus.png", true)
xhr.responseType = "blob";
xhr.addEventListener('load', function(){
  if(xhr.status == 200){
    blob = xhr.response;
    getImage(blob)
  }
}, false);

xhr.send();
//--getting image---


function getImage(blob){

}
const transaction = db.transaction(['flowers'], IDBTransaction.READ_WRITE);

transaction.objectStore('flowers').put(blob,"image")
// transaction.create



// 
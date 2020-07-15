let obj = {}
function createObjFromKeyValue(k, v){
  // let obj = {};
  
  k.forEach((a, index) => {
    formKey(a, v, index);
  });

  return obj;
}
function formKey(string, valueArray, index){
  let keyArray = string.split(".");
let length =  keyArray.length;
  // console.log("key array", keyArray);
  for(let j=0; j< length; j++){
    if(j==0){
      if(!obj[keyArray[j]])
        obj[keyArray[j]] = {};
      nextKey = keyArray[j];
      // console.log("j value is ", j, nextKey, obj);
    }
    else{
      let vv = {};
      if(length == j+1 ){
       vv = valueArray[index];
      }
      obj[nextKey][keyArray[j]] = vv;
    }
     
  }
  console.log(valueArray[index]);
  // return obj;
}

const keys = ["a.c","a.b","a.e","h"];
const values = [0,"hi","e",{}];

// console.log(obj);
//createObjFromKeyValue(keys, values);
console.log(obj);

const output = {
a: {
c: 0,
b: 'hi',
e: "e"
},
h: {}
};

const keys1 = ["a.b.c", "a.b.d", "a.h", "r"];
const values1 = [1,2,'test',4];
const output1 = {
a: {
b: {
c: 1,
d: 2
},
h: 'test'
},
r: 4
};


// console.log(valueArray[index]);


const keys1 = ["a.b.c", "a.b.d", "a.h", "r", "a.b.c.d.e"];
const values1 = [1,2,'test',4, "am eeee"];
const output1 = {
	a: {
		b: {
			c: 1,
			d: 2,
		},
		h: 'test'
	},
	r: 4
};


// console.log(obj);
createObjFromKeyValue(keys1, values1);
console.log(obj);

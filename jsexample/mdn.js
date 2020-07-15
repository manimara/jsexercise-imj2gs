function Car(name) {
  if (!new.target) {
    throw new Error("This is class have to call with new(new keyword)");
  }
  this.cname = name;
}

let car1 = new Car("VW");

console.log(car1.cname); //VW
let car2 = Car("Ford");
console.log(cname); // Ford
console.log(car2?.cname); //undefined


var map1 =  new Map();

map1.has("a")
map1.set("a", "a")
map1.set("b", "b")
map1.set("c", "c")
console.log(map1);
map1.set("c", "cc")
map1.get("a")
map1.has("a")

map1.delete("a")

map1.clear();
console.log(map1);


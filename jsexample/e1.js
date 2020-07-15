var gold = {a:1}
var silver = {};

silver = Object.create({}, gold)

console.log(silver);
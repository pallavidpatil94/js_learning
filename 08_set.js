// Set and Array are used to store collections of values, but they have different characteristics 
// and use cases. 
// Set is a collection of unique values. It automatically removes duplicate values.
// Array can contain duplicate values.

const setRollNum = new Set();
setRollNum.add(10);
setRollNum.add(20);
setRollNum.add(30);
setRollNum.add(20);
setRollNum.add(15);
console.log(setRollNum);

console.log(setRollNum.size);
setRollNum.delete(30);
console.log(setRollNum);

console.log(setRollNum.has(30));
console.log(`Traversing set`);
for (const element of setRollNum) {
    console.log(element);
}


console.log(`To remove duplicate element from the array`);
let array = [40, 20, 30, 40, 15, 30, 20];
array = [...new Set(array)];
console.log(array);
// const mySet = new Set();
// for (const element of array) {
//     mySet.add(element);
// }
// console.log(mySet);
// const newArray = [];
// for (const value of mySet) {
//     newArray.push(value);
// }
// console.log(newArray);
// array = newArray;
// console.log(array);

const map = new Map();
map.set("rollNumber", 10);
map.set("city", "LA");
map.set("age", 22);
map.set("rollNumber", 30);
map.set("luckyNum", 22);
console.log(map);

console.log(map.get("city"));
console.log(map.get("luckyNum"));

console.log(map.has("age"));
console.log(map.size);
console.log(map.keys());
console.log(map.values());

console.log(`Traversing map`);
for (const keyVal of map) {
    console.log(keyVal[0], keyVal[1]);
}
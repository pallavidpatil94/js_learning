let array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19] ;
console.log(`========= 1. Add 10 in each element =========`);
const newArray = array.map( (element)=>{
    return element + 10;
});
console.log(newArray);

console.log(`========= 2. Cube of the each element =========`);
cube = 0;
const newArray1 = array.map( (element)=>{
    return element * element * element;
});
console.log(newArray1);

console.log(`========= 3. Add index value into it's corresponding each array element =========`);
const newArr = array.map( (element, index)=>{
    return element + index;
});
console.log(newArr);
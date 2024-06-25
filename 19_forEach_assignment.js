let array = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`========== 1. Array elements with it's index =========`);
array.forEach((currecntvalue, index, array) => {
    console.log(`${currecntvalue},  ${index}`);
});

console.log(`========== 2. Positive numbers in Array  =========`);
array.forEach((currecntvalue, index, array) => {
    if(currecntvalue >= 0){
        console.log(currecntvalue);
    }
});

console.log(`========== 3. Negative numbers in Array  =========`);
array.forEach((currecntvalue, index, array) => {
    if(currecntvalue < 0){
        console.log(currecntvalue);
    }
});

console.log(`========== 4. Even numbers in Array  =========`);
array.forEach((currecntvalue, index, array) => {
    if(currecntvalue % 2 == 0){
        console.log(currecntvalue);
    }
});

console.log(`========== 5. sum of all element in Array  =========`);
let sum = 0;
array.forEach((element) => {
    sum = sum + element;
});
console.log(sum);

console.log(`========== 6. Even indx in Array  =========`);
array.forEach((currecntvalue, index, array) => {
    if(index % 2 == 0){
        console.log(index);
    }
});
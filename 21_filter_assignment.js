let array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`======== 1. List of numbers which greater than 50 ========`);
const newArray = array.filter( (element)=>{
    if(element > 50){
        console.log(element);
    }
});

console.log(`======== 2. List of even numbers ========`);
const evenNum = array.filter( (element)=>{
    if(element % 2 == 0){
        console.log(element);
    }
});

console.log(`======== 3. List of odd numbers ========`);
const oddNum = array.filter( (element)=>{
    if(element % 2 != 0){
        console.log(element);
    }
});

console.log(`======== 4. List of numbers which are multiple of 5 ========`);
const multNum = array.filter( (element)=>{
    if(element % 5 == 0){
        console.log(element);
    }
});

console.log(`======== 5. List of numbers between 20 & 50 ========`);
const between = array.filter( (element)=>{
   return element > 20 && element <=50;
});
console.log(between);
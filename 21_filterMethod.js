// filter method is used to create a new array with all elements that pass a test provided by a function
let array = [3, 6, 5, 2, 10, 7];
const newArray = array.filter( (element)=>{
    return element%2==0;
});
console.log(newArray);

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const newArray1 = arrayNumbers.filter( (element)=>{
    // if(element >= 20 && element <= 50)
    // {return element};
    return element >= 20 && element <= 50;
});
console.log(newArray1);

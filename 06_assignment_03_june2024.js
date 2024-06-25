console.log(`========= Count the total number of vowel's available in given string ========`);
var str = "I am very good IT developer";
var vowel= "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    var charLowerCase = char.toLowerCase();
    if(vowel.includes(charLowerCase)){
        counter++;
    }
}
console.log(counter);

console.log(`========= Sum of cube of numbers from 1 to 5 ========`);
var sumOfCube = 0
for (let index = 1; index <= 5; index++) {
    var cube = index * index * index;
    sumOfCube = sumOfCube + cube;
}
console.log(sumOfCube);
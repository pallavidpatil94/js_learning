var greet = "Good Morning";

console.log(`Find Total number of characters from the string: ${greet}`);
var totalChar = greet.length;
console.log(`Total char is: ${totalChar}`);


console.log(`========== charAt() ==============`);
var char = greet.charAt(3);
console.log(`Char at index 3 is: ${char}`);

console.log(`========== indexOf() ==============`);
var index = greet.indexOf("M");
console.log(`Index of char M is: ${index}`);

console.log(`========== concat() ==============`);
var firstName = "Jenny";
var lastName = " Sharma";
var result = firstName.concat(lastName);
console.log(`Concat string is: ${result}`);

console.log(`========== toUppercase() ==============`);
var lastName = "Sharma";
var result = lastName.toUpperCase();
console.log(`Last name in upper case is: ${lastName}`);

console.log(`========== replace() ==============`);
var greet = "Good Morning";
var result = greet.replace("Good", "Afternoon");
console.log(`After replace : ${result}`);

console.log(`========== trim() ==============`);
var city = "  Pune   ";
console.log(`Length before trim is: ${city.length}`);
city = city.trim();
console.log(`Length after trim is: ${city.length}`);
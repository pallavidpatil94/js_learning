// If condition
var num = 10;
console.log("Before If block");
if (num%2 == 0) {
    console.log("Even Number");
}
console.log("After if block");

// If condition  in Function
console.log(`============= If Condition ===============`);
function isEven(num){
    console.log(`Before if block`);
    if (num%2==0) {
        console.log(`EVEN Number`);
    }
    console.log(`After if block`);
}
isEven(10);
isEven(9);
isEven(1017);

// If-Else condition  in Function
console.log(`====== if else block =========`);
var isEvenOrOdd = function(num){
    if (num%2==0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}
isEvenOrOdd(3);
isEvenOrOdd(90);
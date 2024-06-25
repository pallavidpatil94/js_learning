// let palindromeCheck = (str) => {
//     return str === str.split("").reverse().join("");
// };

let palindromeCheck = (str) => {
    
    const strings = str.split("").reverse().join("");
    // console.log("strings =>", strings)
    if(str === strings) {
        return `String is a palindrome : ${strings}`
    }
    else {
        return `String is not a palindrome : ${str}`
    }
};

console.log(palindromeCheck("madam"));
console.log(`${palindromeCheck("141")}`);
console.log(`${palindromeCheck("Sunday")}`);
console.log(`${palindromeCheck("mom")}`);
console.log(`${palindromeCheck("listen")}`);
console.log(`${palindromeCheck("dad")}`);

// const abc = (a, b, c) =>{
//     if(c === "add"){
//         let c= a + b;
//         return c
//     }
//     else if(c === "sub"){
//         let c= a - b;
//         return c
//     }
 
// }

// const test = abc(10, 20, "add")
// console.log("test = >", test)
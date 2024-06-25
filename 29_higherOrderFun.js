//A higher order function is a function that takes one or more functions as arguments,
//  or returns a function as its result.

function greet(callbacks){
    console.log(`Good Morning `);
    callbacks();
    return function(){
        console.log(`See you soon...`);
    }
}
let sayBye = function(){
    console.log(`Bye.. `);
}
greet(sayBye)();

// ==================== OR ====================

// function greet(callbacks){
//     console.log(`Good Morning `);
//     callbacks();
//     let innerFunction = function(){
//         console.log(`See you soon...`);
//     }
//     return innerFunction;
// }
// let sayBye = function(){
//     console.log(`Bye.. `);
// }
// greet(sayBye)();
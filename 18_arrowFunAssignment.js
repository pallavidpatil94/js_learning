let arrowFun = (n1, n2, n3=1) => {
    console.log(`1. ===== No arguments & no return value =====`);
    console.log("Good Morning, Todays is Friday");

    console.log(`2. ===== 3 arguments & no return value =====`);
    const res = n1 * n2 * n3;
    console.log(`a). Multiplication of 3 arguments is : ${res}`);

}
arrowFun(5, 5, 2);

let arrowFuntwo = (n1, n2, n3=1) => {
    const res = n1 * n2 * n3;
    console.log(`b). Multiplication of 3 arguments is : ${res}`);

}
arrowFuntwo(10, 4);


console.log(`========= 3. Five arguments & return value =========`);
let arrowFun3 = (n1, n2, n3, n4, n5) => {
    const res = n1 + n2 + n3 + n4 + n5;
    console.log(`a). Addition of 5 arguments is : ${res}`);

}
arrowFun3(100, 100, 200, 349, 756);

let arrowFun4 = (n1, n2, n3, n4, n5) => {
    const res = n1 + n2 + n3 + n4 + n5;
    console.log(`c). Addition of 5 arguments is : ${res}`);

}
arrowFun4("I am", " learning", " ES6", " features", " in depth");
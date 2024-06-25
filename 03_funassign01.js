console.log("======== 01 - This function without argument ========");
function withouArgu(){
    console.log("This Function Without Argument - 1");
}
withouArgu();
function funWithoutArgu(){
    console.log("This Function Without Argument - 2");
}
funWithoutArgu();


console.log("======== 02 - This function with argument (Personal Details) ========");

function personalDetail(firstName, lastName, clgName) {
    // console.log(firstName, lastName, clgName);
    // console.log("firstName : ", firstName);
    // console.log("lastName : " + lastName);
    console.log("Student Name : " + firstName, lastName);
    console.log("College Name : " + clgName);
    
}

personalDetail("Pallavi", "Patil", "J. T. Mahajan College Of Engineering, Faizpur");

console.log("======== 03 - This function with argument ========");
function addThreeValues(a, b, c) {
    console.log("Fuction with three arguments : "  + a, b, c);
    //   console.log(arguments[0]);
    //   console.log(a);
      // Expected output: 1
    
    //   console.log(arguments[1]);
    //   console.log(b);
      // Expected output: 2
    
    //   console.log(arguments[2]);
    //   console.log(c);
      // Expected output: 3
    }
    
    addThreeValues(10.23, 600, 40);
    addThreeValues("Hello", "Good", "Morning");
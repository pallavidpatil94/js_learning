//Space count in string
// var my_string = "John Doe's iPhone6";
// var spaceCount = (my_string.split(" ").length - 1);
// console.log(spaceCount);
// const spaceC = spaceCount("Revision is the mother of success");

let multiply = (n1) => {
    const result = (n1.split(" ").length - 1);
    // console.log(result);
    return result;
}
const value = multiply("Revision is the mother of success");
console.log(`Revision is the mother of success -- Space Count is ${value}`);

let spaceCount = (n2) => {
    const result = (n2.split(" ").length - 1);
    // console.log(result);
    return result;
}
const count = spaceCount("Javascript is the language of internet world");
console.log(`Javascript is the language of internet world -- Space Count is ${count}`);
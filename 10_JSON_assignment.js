const employeeInfo = `{
    "name" : "Jeni Michale",
    "id" : "E0025",
    "role" : ["Dev", "DBA"],
    "age" : "25",
    "doj" : "11-12-2019",
    "married" : "True",
    "address" : {
    "street" : "32 Lorem st.",
    "city" : "Pune",
    "country" : "India"
    },
    "referred-by" : "E0012"
}`

// console.log(employeeInfo);
const empInfo = JSON.parse(employeeInfo);
console.log("JSON converted to Object ==> ", empInfo);
// console.log(`JOSN to object convertion ==> ${empInfo}`);
console.log("First value from role array ==> ", empInfo.role[0]);

var first = empInfo.name;
console.log(first);
var myName = first.split(" ");
console.log(myName);
var surname =  myName[1];
console.log("Jeni's surname is ==>", surname);

var dojEmp = empInfo.doj;
console.log(dojEmp);
var dojSplit = dojEmp.split("-");
console.log(dojSplit);
var year =  dojSplit[2];
console.log("Date of joining year is ==>", year);


// we cant add method, object, cant modify in freez
const person = {
    firstName: "Anil",
    lastName: "Sharma",
    city: "Mumbai",
}
Object.freeze(person);
person.city = "Pune";
console.log(person);

const array = [50, 60, 80, 90];
Object.freeze(array);
// array.push(1000);
// array.pop()
console.log(array);



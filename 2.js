//Given the object of person {name: “Alice”, age: 25, job: “Developer”},
//use object destructuring to extract the ‘name’ & ‘age’ properties and console.log it out
const obj = {name:"Alice",  age:25, job:"Developer"}
const {name, age} = obj
console.log(name,age)
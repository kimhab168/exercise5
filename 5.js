// Write a function that could take any number of arguments and calculates their sum and return it
// Example: 
//console.log(sumAll(1, 2)) // 3
//console.log(sumAll(1, 2, 3, 4, 5)) // 15
function sumAll(...args) {
    return args.reduce((sum, num) => sum + num, 0);//sum = prev returned (sum = sum + num), after end sum return to replace 0
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4, 5));
// Write a function that takes an object and a list of property names to filter out.
//Return a new object that contains all the properties of the original object except,
//those specified in the list
// Example: object = {a:1, b:2, c:3, d:4}
//          filterProps(object, “b”, “d”) // Should Return:  {a:1, c:3}

object = { a:1, b:2, c:3, d:4 }

function filterProps(object,...pros){
    const new_obj = {};
    for(let key in object){
        if(!pros.includes(key)){
            new_obj[key] = object[key];
            }
    }
    return new_obj;
}
console.log(filterProps(object,"b","d"))

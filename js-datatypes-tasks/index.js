
//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  // Output: "olleh"

//Find Factorial:

function factorial(num) {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));  // Output: 120

//Merge Objects:

function mergeObjects(obj1, obj2) {

    return { ...obj1, ...obj2 }
    /* this line is using the spread operator (...). 
    It allows us to spread the properties of an object into a new object.*/
}

const obj1 = { fname: "ahmed", lname: "achraf" }
const obj2 = { fname:"ahmed ", lname: "achraf esmael" , age : 22 }
console.log(mergeObjects(obj1, obj2))



//Toggle Boolean:
function toggleBoolean(boolVal) {
    return !boolVal;
}

console.log(toggleBoolean(true));  // Output: false
console.log(toggleBoolean(false)); // Output: true

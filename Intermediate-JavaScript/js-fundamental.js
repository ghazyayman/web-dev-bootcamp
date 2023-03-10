// Declare an array
let myArray = [1, 2, 3, 4, 5];

// Accessing array elements
console.log(myArray[0]); // Output: 1

// Adding an element to the end of the array
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Removing an element from the end of the array
myArray.pop();
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Adding an element to the beginning of the array
myArray.unshift(0);
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]

// Removing an element from the beginning of the array
myArray.shift();
console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Getting the length of the array
console.log(myArray.length); // Output: 5

// Looping through an array with for loop
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Declare an object
let myObj = {
  name: "John",
  age: 30,
  city: "New York"
};

// Accessing object properties
console.log(myObj.name); // Output: John

// Adding a new property to the object
myObj.gender = "Male";
console.log(myObj); // Output: {name: "John", age: 30, city: "New York", gender: "Male"}

// Removing a property from the object
delete myObj.city;
console.log(myObj); // Output: {name: "John", age: 30, gender: "Male"}

// Looping through an object with for...in loop
for (let prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

// Add a new property to the object called greeting:

// greeting should be a function with a name parameter.

// greeting should return "Hello, name." where name is the value of the name parameter.

// Add a new property to the object called add:

// add should be a function with a num1 and num2 parameter.

// add should return the sum of num1 and num2.


module.exports = {
    returnTwo: () => 2,
    greeting: (name) => `Hello, ${name}.`,
    add: (num1, num2) => num1 + num2,
}
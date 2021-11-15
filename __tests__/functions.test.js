const { 
    returnTwo,
    greeting,
    add
} = require('../src/functions');

require('../src/functions');

// Create a test for returnTwo:

// This test should expect returnTwo() to equal 2.

// Create a test for greeting:

// This test should expect greeting('James') to equal "Hello, James.".

// This test should expect greeting('Jill') to equal "Hello, Jill.".

// Create a test for add:

// This test should expect add(1, 2) to equal 3.

// This test should expect add(5, 9) to equal 14.

test("returnTwo should return 2", () => expect(returnTwo()).toEqual(2))

describe("greeting function returns the name parameter", () => {
    test("returns a string", () => expect(typeof greeting("Cody")).toBe("string"));

    test("returns 'Hello, James.'", () => expect(greeting("James")).toBe("Hello, James."));

    test("returns 'Hello, Jill.'", () => expect(greeting("Jill")).toBe("Hello, Jill."));
})

describe("add function correctly returns the sum of two numbers", () => {
    test("1 + 2 = 3", () => expect(add(1, 2)).toEqual(3));

    test("5 + 9 = 14", () => expect(add(5, 9)).toEqual(14));
})
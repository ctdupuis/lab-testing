const { 
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('../src/functions');

require('../src/functions');

test("returnTwo should return 2", () => expect(returnTwo()).toEqual(2))

describe("greeting function returns the name parameter", () => {
    test("returns a string", () => expect(typeof greeting("Cody")).toBe("string"));

    test("returns 'Hello, James.'", () => expect(greeting("James")).toBe("Hello, James."));

    test("returns 'Hello, Jill.'", () => expect(greeting("Jill")).toBe("Hello, Jill."));
})

describe("Math functions", () => {

    test("add function correctly returns the sum of two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    });

    test("subtract function correctly returns the difference of two numbers", () => {
        expect(subtract(10, 1)).toEqual(9);
        expect(subtract(5, 3)).toEqual(2);
    });

    test("multiply function correctly returns the product of two numbers", () => {
        expect(multiply(4,4)).toEqual(16);
        expect(multiply(5, 7)).toEqual(35);
    });

    test("divide function correctly returns the quotient of two numbers", () => {
        expect(divide(100, 10)).toEqual(10);
        expect(divide(144, 12)).toEqual(12);
    });

    test("math functions return numbers", () => {
        expect(typeof add(1,1)).toBe('number');
        expect(typeof subtract(1,1)).toBe('number');
        expect(typeof divide(1,1)).toBe('number');
        expect(typeof multiply(1,1)).toBe('number');
    });
});
const { 
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide,
    arrLength
} = require('../src/functions');

require('../src/functions');

describe("returnTwo function", () => {
    test("returns 2 as a number", () => {
        expect(returnTwo()).toEqual(2);
        expect(typeof returnTwo()).toBe("number");
    });
});


describe("greeting function", () => {
    test("returns a string", () => expect(typeof greeting("Cody")).toBe("string"));

    test("returns the phrase with the name parameter", () => {
        expect(greeting("James")).toBe("Hello, James.")
        expect(greeting("Jill")).toBe("Hello, Jill.")
    });
});

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
        expect(multiply(4, 4)).toEqual(16);
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

describe("arrLength function", () => {
    test("returns the length of the array as a number", () => {
        let sample1 = [1, 2, 3, 4, 5, 6];
        let sample2 = [1, 2, 3];

        expect(typeof arrLength(sample1)).toBe("number");
        expect(arrLength(sample2)).toEqual(3);
    });
});
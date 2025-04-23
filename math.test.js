const op = require('./math');

const sum = op[0];
const sub = op[1];
const mul = op[2];
const div = op[3];
const pow = op[4];

describe("Test per l'operatore somma", () => {

    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test.skip('adds 3 + 5 to equal 7', () => {
        expect(sum(3, 5)).toBe(7);
    });
});

describe("Test per l'operatore sottrazione", () => {
    test('subtracts 7 - 3 to equal 4', () => {
        expect(sub(7, 3)).toBe(4);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(sub(5, 2)).toBe(3);
    });
});

describe("Test per l'operatore moltiplicazione", () => {
    test('multiplies 3 * 4 to equal 12', () => {
        expect(mul(3, 4)).toBe(12);
    });

    test('multiplies 5 * 2 to equal 10', () => {
        expect(mul(5, 2)).toBe(10);
    });
});

describe("Test per l'operatore divisione", () => {
    test('divides 8 / 2 to equal 4', () => {
        expect(div(8, 2)).toBe(4);
    });

    test('divides 10 / 5 to equal 2', () => {
        expect(div(10, 5)).toBe(2);
    });

    test('throws error when dividing by zero', () => {
        expect(() => div(5, 0)).toThrow("non puoi dividere per 0");
    });
});

describe("Test per l'operatore potenza", () => {
    test('raises 2 to the power of 3 to equal 8', () => {
        expect(pow(2, 3)).toBe(8);
    });

    test('raises 5 to the power of 2 to equal 25', () => {
        expect(pow(5, 2)).toBe(25);
    });
});

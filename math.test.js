const op = require('./math');

const sum = op[0];

describe("Test per l'operatore somma", () => {

    test('adds 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test('adds 3 + 5 to equal 8', () => {
        expect(sum(3, 5)).toBe(8);
    });
});

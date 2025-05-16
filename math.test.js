const math = require('./math');

describe('Funzioni matematiche di base', () => {
    test('add somma due numeri', () => {
        expect(math.add(2, 3)).toBe(5);
        expect(math.add(-1, 1)).toBe(0);
    });

    test('subtract sottrae due numeri', () => {
        expect(math.subtract(5, 3)).toBe(2);
        expect(math.subtract(0, 5)).toBe(-5);
    });

    test('multiply moltiplica due numeri', () => {
        expect(math.multiply(2, 3)).toBe(6);
        expect(math.multiply(-2, 3)).toBe(-6);
    });

    test('divide divide due numeri', () => {
        expect(math.divide(6, 3)).toBe(2);
        expect(math.divide(-6, 3)).toBe(-2);
    });

    test('divide lancia errore se divisore è zero', () => {
        expect(() => math.divide(5, 0)).toThrow('Division by zero');
    });

    test('power eleva a alla b', () => {
        expect(math.power(2, 3)).toBe(8);
        expect(math.power(5, 0)).toBe(1);
    });

    test('sqrt calcola la radice quadrata', () => {
        expect(math.sqrt(9)).toBe(3);
        expect(math.sqrt(0)).toBe(0);
    });

    test('sqrt lancia errore se numero negativo', () => {
        expect(() => math.sqrt(-4)).toThrow('Square root of negative number');
    });
});
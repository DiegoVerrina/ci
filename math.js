function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    if (a < 0) {
        throw new Error("Square root of negative number");
    }
    return Math.sqrt(a);
}

// Esporta le funzioni per l'utilizzo in altri file
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt
};
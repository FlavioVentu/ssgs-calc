// Author: @FlavioVentu
// Version: 0.1.0

function somma(a, b) {
    return a + b;
}

function sottrazione(a, b) {
    return a - b;
}

function moltiplicazione(a, b) {
    return a * b;
}

function divisione(a, b) {
    if (b === 0) throw new Error("non puoi dividere per 0");
    return a / b;
}

function potenza(a, b) {
    return Math.pow(a, b);
}

module.exports = [somma, sottrazione, moltiplicazione, divisione, potenza];
// Author: @FlavioVentu
// Version: 0.1.0


const operations = require('./math.js'); // importo le operazioni
const { randomInt } = require('crypto'); // importo la funzione randomInt per generare numeri casuali
const n = operations.length - 1; // numero di operazioni disponibili


// modulo per gestire lo stdin
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// messaggi di saluto
const msg = ["Grazie e a presto!", "Arrivederci!", "Puoi tornare a fare le tue cose!", "Di già?"];


// gestione del menu con le operazioni disponibili
function menu() {

    console.log("\nPuoi scegliere tra le seguenti operazioni: ");
    for (let i = 0; i <= n; i++) {
        console.log(i + ". " + operations[i].name.toUpperCase());
    }

}


// funzione per gestire i parametri delle operazioni
function operandi(op) {

    // gestione dei numeri
    readline.question("\n  → Inserisci il primo numero: ", (num1) => {

        // controllo sulla validità del primo numero
        const first = parseFloat(num1);
        if (isNaN(first)) {
            console.error("▶ Errore: numero non valido, riprova");
            operandi(op);
            return;
        }
        readline.question("    → Inserisci il secondo numero: ", (num2) => {

            // controllo sulla validità del secondo numero
            const second = parseFloat(num2);
            if (isNaN(second)) {
                console.error("▶ Errore: numero non valido, riprova");
                operandi(op);
                return;
            }

            // esecuzione dell'operazione
            operate(op, first, second);

        });
    });
}


// funzione per eseguire l'operazione scelta
function operate(op, first, second) {
    try {
        console.log("\nIl risultato è: " + operations[op](first, second));
    }
    catch (e) {
        console.error("▶ Errore: " + e.message);
    }

    // controllo esecuzione
    readline.question("\nDigitare 's' per richiedere un'altra operazione o qualsiasi altro carattere per uscire: ", (risp) => {
        if (risp === "s") {
            main();
        }
        else {
            // chiusura del modulo readline e messaggio di saluto
            readline.close();
            console.log("\n" + msg[randomInt(0, msg.length)]);
        }
    });
}


// funzione principale
function main() {

    // stampa del menu
    menu();

    // gestione dell'input
    readline.question("\nInserisci il numero dell'operazione da eseguire: ", (input) => {

        // controllo sulla validità dell'operazione
        const op = parseInt(input);
        if (isNaN(op) || op > n || op < 0) {
            console.error("▶ Errore: operazione non valida, riprova");
            main(); // richiamo la funzione principale
            return;
        }
        console.log("Hai scelto l'operazione: " + operations[op].name.toUpperCase());
        operandi(op); // richiamo la funzione per i parametri
    });
}


// MAIN
console.log("\nBenvenuto!");
main();
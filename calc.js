const math = require('./math');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Operazioni disponibili: add, subtract, multiply, divide, power, sqrt');

function askOperation() {
    rl.question('Scegli un\'operazione: ', (operation) => {
        if (['add', 'subtract', 'multiply', 'divide', 'power'].includes(operation)) {
            rl.question('Inserisci due numeri separati da spazio: ', (input) => {
                const [a, b] = input.split(' ').map(Number);
                try {
                    const result = math[operation](a, b);
                    console.log('Risultato:', result);
                } catch (error) {
                    console.error('Errore:', error.message);
                }
                askAgain();
            });
        } else if (operation === 'sqrt') {
            rl.question('Inserisci un numero: ', (input) => {
                const a = Number(input);
                try {
                    const result = math.sqrt(a);
                    console.log('Risultato:', result);
                } catch (error) {
                    console.error('Errore:', error.message);
                }
                askAgain();
            });
        } else {
            console.log('Operazione non supportata.');
            askAgain();
        }
    });
}

function askAgain() {
    rl.question('Vuoi fare un altro calcolo? (s/n): ', (answer) => {
        if (answer.toLowerCase() === 's') {
            askOperation();
        } else {
            rl.close();
        }
    });
}

askOperation();
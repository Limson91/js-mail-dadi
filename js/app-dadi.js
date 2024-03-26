// # DADI

// - generare un numero random da 1 a 6 per il giocatore e il pc.
// - Stabilire il vincitore, in base a chi fa il punteggio più alto.

// - Generazione numero random per il computer;
let minNumber = 1;
let maxNumber = 6;
let randomNumberComputer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log('PC num', randomNumberComputer);

let randomNumberUser = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log('User num', randomNumberUser);

if (randomNumberComputer > randomNumberUser) {
    alert("Hai perso!")
} else if (randomNumberComputer < randomNumberUser) {
    alert("Hai vinto!")
} else {
    alert("I due numeri sono uguali!")
}
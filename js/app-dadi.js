//Generazione numero random per il computer e user;
let minNumber = 1;
let maxNumber = 6;
let randomNumberComputer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log('PC num', randomNumberComputer);

let randomNumberUser = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log('User num', randomNumberUser);

//Stabilire il vincitore
if (randomNumberComputer > randomNumberUser) {
    alert("Hai perso!")
} else if (randomNumberComputer < randomNumberUser) {
    alert("Hai vinto!")
} else {
    alert("I due numeri sono uguali!")
}
//Chiedere email all'utente
const userEmail = prompt('Insert email');
console.log(userEmail);

//Dichiarazione variabile array con elenco email
const emailArray = [
    'bilbo.baggins@contea.com',
    'gandalf.ilgrigio@istar.com',
    'frodo.baggins@contea.com',
    'samwise.gamgee@contea.com',
    'mariadoc.brandibuck@contea.com',
    'peregrino.tuc@contea.com',
    'aragorn.granpasso@granburrone.com',
    'boromir.thebest@minastirith.com',
    'legolas.biondino@bosco.com',
    'gimli.lockbearer@moria.com'
];
console.log(emailArray);

//Dichiarazione variabile di controllo
let foundEmail = false;

//Definizione ciclo for
for (let i = 0; i < emailArray.length; i++) {
    const currentEmail = emailArray[i];
    console.log(i, currentEmail);

    if (userEmail === currentEmail) {
        foundEmail = true;
    }
}
console.log(foundEmail);

//Stampa messaggio
if (foundEmail) {
    console.log('Accesso consentito');
} else {
    console.log('Accesso negato');
}
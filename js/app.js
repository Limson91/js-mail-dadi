// # JS MAIL
console.log('prova test');

// - definire un array di mail
//     - assegnare una variabile all'array ed elencare delle mail;
const elencoEmail = [
    'bilbo.baggins@contea.com',
    'gandalf.ilgrigio@istar.com',
    'frodo.baggins@contea.com',
    'samwise.gamgee@contea.com',
    'mariadoc.brandibuck@contea.com',
    'peregrino.tuc@contea.com',
    'aragorn.granpasso@granburrone.com',
    'boromir.thebest@minastirith.com',
    'legolas.biondino@bosco.com',
    // 'frodo.baggins@contea.com', //verifica nel caso di doppia email
    'gimli.lockbearer@moria.com'
];

console.log(elencoEmail);

// - chiedere all'utente di inserire la propria mail;
//     - inserire la mail attraverso un prompt;
let userEmail = prompt("Inserire la proprio mail");
let foundEmail = false; //variabile di controllo

// - controllare se la mail è presente all'interno dell'array;
for (let i = 0; i < elencoEmail.length; i++) {

   if (elencoEmail[i] == userEmail) {
        foundEmail = true;
        alert("Email già presente all'indice "+ i + ". Inserirne un'altra!");
        // break;
    }
}

if (foundEmail == false) { //verifica della mail non presente nell'elenco e inserimento nell'array.
    elencoEmail.push(userEmail);
    alert("Email non trovata. Inserita nell'elenco.")
    console.log(elencoEmail);
}

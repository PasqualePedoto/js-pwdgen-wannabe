/*
STEP DA COMPIERE PER SVOLGERE LA SEGUENTE REPO

1) Chiediamo all'utente il suo nome: a questo
punto memorizziamo il nome all'interno di una
variabile costante poichè il nome non verrà
cambiato

2) Chiediamo il cognome: stesso svolgimento come per il nome

3)Chiediamo il colore: stesso svolgimento come per il nome

4)Creiamo una password basandoci su questi valori ricavati
    *Servendosi di un particolare metodo "bersagliamo" un preciso tag HTML
    *Creiamo la password
    *Manipoliamo l'HTML inserendo nel paragrafo la password appena generata

5)Manipoliamo a questo punto HTML con JavaScript
in modo tale dà viualizzare la password generata

*/

//***** 
// 1) Chiediamo in input il nome 
//***** 

const firstName = prompt('Qual è il tuo nome?' , 'Pasquale');

//Creiamo una stringa in grado di visualizzare
//più chiaramente il nome
const firstNameReceived = `Il suo nome è ${firstName}`;
//Visualizziamo la stringa contenente il nome su console
console.log(firstNameReceived);

//***** 
// 2) Chiediamo in input il cognome
//***** 

const lastName = prompt('Qual è il tuo cognome?','Pedoto');

//Creiamo una stringa in grado di visualizzare 
//più chiaramente il cognome
const lastNameReceived = `Il suo cognome è ${lastName}`;
//Visualizziamo la stringa contenente il cognome
console.log(lastNameReceived); 

//***** 
// 3) Chiediamo in input il colore preferito
//***** 

const color = prompt('Qual è il tuo colore preferito?','Arancione');

//Creiamo una stringa in grado di visualizzare
//più chiaramente il colore
const colorReceived = `Il suo colore preferito è ${color}`;
//Visualizziamo la stringa contenente il colore
console.log(colorReceived);

//***** 
// 4) Creiamo la password con gli input ottenuti
//***** 

// * Bersagliamo un determinato tag HTML
const bersaglio = document.getElementById('pwdgen');

// * Creiamo la password
const password = firstName + lastName + color + '21';
const genPass = `La password generata è : ${password}`;
//Visualizziamo la password
console.log(genPass);

// * Manipoliamo l'HTML

const newParagraph = 'La Password generata è : <strong>' + password + '</strong>';
const htmlManipolate = bersaglio.innerHTML = newParagraph;
console.log(htmlManipolate);


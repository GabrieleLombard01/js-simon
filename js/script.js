//JS RESET
console.log('JS OK')
/*
- CREO un numbers-container per il coundown e x i numeri
- CREO un timer in pagina di 30 secondi
- METTO IN EVIDENZA i numeri generati
- SE il timer è uguale a 0 NASCONDO i numeri
    * uso un PROMPT
        - chiedo 5 numeri 5 volte
        - controllo se i numeri sono corretti
        - comunico se ha fatto tutto correttamente
*/
//!FUNZIONI:
//RANDOM NUMBER DA 1 a 99
const randomNumber = (max) => {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    return randomNumber;
}

//!OPERAZIONI INIZIALI:

//Prendo gli elementi dal DOM:
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('number-list');
const inputsElement = document.getElementById('input')
const resultElement = document.getElementById('risultato');
const refreshButton = document.getElementById('refresh-button');
const playButton = document.getElementById('play-button');

// Stampo in pagina la partenza timer 
countdownElement.innerText = 10;

//!LOGICA:

// Servendomi di set interval cambio il valore del timer
let timer = 10;
const countdown = setInterval (function() {
    // Stampo in pagina il valore di partenza del timer 
    countdownElement.innerText = 10;
    countdownElement.innerText = -- timer;
},1000);

let numbers = [];
//FOR x 5 numeri random 
for (let i = 0; i < 5; i++){
    numbers.push(randomNumber(99));
}

let numbersList = `<ul>`
// Stampo in un UL i numeri
for (let i = 0; i < 5; i++){
    numbersList += `<li>${numbers[i]}</li>`
}
numbersList += `</ul>`

numberListElement.innerHTML = numbersList;

//Sfrutto classList per giocare col display
const countdownPause = setTimeout (function(){
    timer = 0;
    countdownElement.innerText = timer;
    clearInterval(countdown);
    numberListElement.classList.add('d-none');
    inputsElement.classList.remove('d-none');
    playButton.classList.remove('d-none');

},10000);

// Funzione per verificare i numeri inseriti
const verifyNumbers = () => {
    const enteredNumbers = [];
    const guessedNumbers = [];

    // Ottenere i numeri inseriti dall'utente
    for (let i = 1; i <= 5; i++) {
        const inputElement = document.getElementById(i.toString());
        const number = inputElement.value;
        enteredNumbers.push(number);
    }

}  

playButton.addEventListener('click', verifyNumbers);
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

//!OPERAZIONI INIZIALI:

//Prendo gli elementi dal DOM:
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('number-list');
const inputsElement = document.getElementById('input')
const resultElement = document.getElementById('risultato');
const refreshButton = document.getElementById('refresh-button');
const playButton = document.getElementById('play-button');



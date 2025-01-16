/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function iniziali(array) {
  const iniziale = [];
  for (let i = 0; i < array.length; i++) {
    iniziale.push(array[i][0]);
  }
  return iniziale;
}

// Invoca la funzione qui e stampa il risultato in console

alert(iniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

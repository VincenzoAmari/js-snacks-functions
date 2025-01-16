/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function selezioneLettera(array, lettera) {
  const restituisce = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toUpperCase() === lettera.toUpperCase()) {
      restituisce.push(array[i]);
    }
  }
  return restituisce;
}

// Invoca la funzione qui e stampa il risultato in console

alert(selezioneLettera(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

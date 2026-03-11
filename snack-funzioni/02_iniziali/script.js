/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function inizialeNome(name) {
    const iniziale = []
    for (let i = 0; i < name.length; i++) {
        iniziale.push(name[i][0])
        
    }
    return iniziale 
}
// scriviamo la stessa funzione usando una arrow function 
let FirstWordName = (nome) => {
    const firstWord = []
    for (let i = 0; i < nome.length; i++) {
        firstWord.push(nome[i][0])
        
    }
    return firstWord 
}

// Invoca la funzione qui e stampa il risultato in console

console.log(inizialeNome(names))

console.log(FirstWordName(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
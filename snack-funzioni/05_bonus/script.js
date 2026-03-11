/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(nome) {
    const data = new Date().getHours()

    if (data >= 5 && data < 13) {
        return 'buongiorno ' + nome

    } else if (data >= 13 && data < 17) {
        return 'buon pomeriggio ' + nome

    } else if (data >= 17 && data < 5) {
        return 'buonasera ' + nome
    }
}

// scriviamo la stessa funzione usando una arrow function 
let getSaluto = (nome) => {
    const data = new Date().getHours()

    if (data >= 5 && data < 13) {
        return 'buongiorno ' + nome

    } else if (data >= 13 && data < 17) {
        return 'buon pomeriggio ' + nome

    } else if (data >= 17 && data < 5) {
        return 'buonasera ' + nome
    }
}


// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name))

console.log(getSaluto(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
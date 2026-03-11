/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function splitVocali(name) {
    const vocali = []
    for (let i = 0; i < name.length; i++) {
        
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
            vocali.push(name[i])
        } else {
            // non fare nulla
        }
        
    }

    return vocali
}

// scriviamo la stessa funzione usando una arrow function 
let soloVocali = (parola) => {
    const vocali = []
    for (let i = 0; i < parola.length; i++) {
        
        if (parola[i] === 'a' || parola[i] === 'e' || parola[i] === 'i' || parola[i] === 'o' || parola[i] === 'u') {
            vocali.push(parola[i])
        } else {
            // non fare nulla
        }
        
    }

    return vocali
}

// Invoca la funzione qui e stampa il risultato in console

console.log(splitVocali(word))

console.log(soloVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
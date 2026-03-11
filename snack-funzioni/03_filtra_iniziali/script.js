/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtroNomi(name) {
    const nameList = []
    for (let i = 0; i < name.length; i++) {

        if (name[i][0] === 'A') {
            nameList.push(name[i])
        } else {
            // non fare nulla 
        }
    }

    return nameList
}

// scriviamo la stessa funzione usando una arrow function 
let filtro = (nomi) => {
    
    const nomeLista = []
    for (let i = 0; i < nomi.length; i++) {

        if (nomi[i][0] === 'A') {
            nomeLista.push(nomi[i])
        } else {
            // non fare nulla 
        }
    }

    return nomeLista

}


// Invoca la funzione qui e stampa il risultato in console

console.log(filtroNomi(names))

console.log(filtro(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log('Sono vivo!')

/* 
OBBIETTIVO: calcolo del prezzo del biglietto del treno

VARIABILI:
1-  Richiesta numero di kilometri da percorrere.
2-  Richiesta età del passeggero*/

let km = prompt('Inserire i kilometri') // NUMBER
km = parseInt(km)
console.log(km);

let età = prompt('Inserire età del passeggero') // NUMBER
età = parseInt(età)
console.log(età);


/*FUNZIONI:
1-  Il prezzo varia in base ai km = 0.21€ al km.
Quindi: km x 0.21€
*/

let prezzo = km * 0.21;
let prezzod = prezzo.toFixed(2);
console.log(prezzod + '€'); //string



/*2- Applicare sconto del 20% per i minorenni*/

if(età <= 18) {
    let ridotto20 = prezzo - (prezzo * 20 / 100)
    let ridotto20d = ridotto20.toFixed(2);
    console.log(ridotto20d + '€'); //string
}

/*3- Applicare sconto del 40% per gli over 65*/

if(età >= 65) {
    let ridotto40 = prezzo - (prezzo * 40 / 100)
    let ridotto40d = ridotto40.toFixed(2);
    console.log(ridotto40d + '€'); //string
}

/*STAMPARE il prezzo finale del biglietto con massimo due decimali per i centesimi*/

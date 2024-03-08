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

let prezzo = km * 0.21 + '€';
console.log(prezzo);


/*2- Applicare sconto del 20% per i minorenni*/

if(età < 18){
    let ridotto20 = prezzo - 20%
    console.log(ridotto20);
}

/*3- Applicare sconto del 40% per gli over 65*/

/*STAMPARE il prezzo finale del biglietto con massimo due decimali per i centesimi*/

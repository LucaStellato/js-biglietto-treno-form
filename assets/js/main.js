/*Milestone 1. 
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.*/


/*MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora 
realizzeremo un form in pagina in cui l’utente potrà inserire i dati
e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, 
andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

//try
console.log('it work');

//Declaration variable to js
const formEl = document.getElementById('formEl')
const nameSurnameField = document.getElementById('name-surname-field')
const kmField = document.getElementById('km-field')
const ageField = document.getElementById('age-field')
const solution = document.getElementById('solution')

//visualization variable for try
console.log(nameSurnameField, kmField, ageField)

//action to click the submit button
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
    //visualization the date insert by the user in consolle
    const nameSurname = nameSurnameField.value;
    const km = parseFloat(kmField.value);
    const age = parseInt(ageField.value);
    console.log(nameSurname);
    console.log(km);
    console.log(age);

    //constant rate km
    const rate = 0.21
    //operation with calulated price
  
    const price = kmField.value * rate
      let priceFinal = parseFloat(price)
    //condition price
    if (age >= 65) {
        priceFinal = price * (1 - 40 / 100);
        console.log(priceFinal.toFixed(2))


    } else if (age < 18) {
        priceFinal = price * (1 - 20 / 100);
        console.log(priceFinal.toFixed(2))

    }
    solution.innerHTML = `<h3>il prezzo finale é di ${priceFinal.toFixed(2)}</h3>`










})








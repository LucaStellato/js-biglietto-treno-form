console.log('it work');
const formEl = document.getElementById('formEl')
const nameSurnameField = document.getElementById('name-surname-field')
const kmField = document.getElementById('km-field')
const ageField = document.getElementById('age-field')
//Milestone-1
console.log(nameSurnameField, kmField, ageField)

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)

    const nameSurname = nameSurnameField.value;
    const km = kmField.value;
    const age = ageField.value;

    console.log(nameSurname);
    console.log(km);
    console.log(age);

    const rate = 0.21
    const priceFinal = 0;
    const price = kmField.value * rate

    if (ageField.textContent < 18) {
        const priceFinal = price * (1 - 20 / 100);
        console.log(priceFinal)
    } else if (ageField.textContent >= 65) {
        const priceFinal = price * (1 - 40 / 100);
        console.log(priceFinal)
    }










})
//Milestone-1

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






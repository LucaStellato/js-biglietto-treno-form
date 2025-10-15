console.log('it work');
const formEl = document.getElementById('formEl')
const nameSurnameField = document.getElementById('name-surname-field')
const kmField = document.getElementById('km-field')
const ageField = document.getElementById('age-field')

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
})


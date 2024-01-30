
/* const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true
} */
// console.log(person);

/* ----dot notation---- */
/* --dot symbol diye object er property access kore--- */
// console.log(person.profession);
// const income = person.salary;
// console.log(income);



/* ---bracket notation----- */
/* --------Third bracket diye access kora----- */

/* console.log(person['age']);
// keep that in a new variable
const boyosh = person['age'];
console.log(boyosh);
 */



const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['cox', 'bandorban', 'sajek']
}

// ----jokhon object er kono property name er moddhe (-) highpen or gap thakbe tokhon kintu seta dot notation diye access kora possible hobe na .  tokhon must bracket notation use korte hobe otherwise property access kora jabe na------

// console.log(person.fav places);//error ashbe

// must have to use bracket notation
console.log(person['fav places']);
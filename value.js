const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['cox', 'bandorban', 'sajek']
}


/* -----dot notation diye jemon value ke access korte pari temni value gulake abr update o krte pari ba new value set kore dite pari------- */

// person.salary = 30000;
// console.log(person);



/* -----bracket notation diye jemon value ke access korte pari temni value gulake abr update o krte pari ba new value set kore dite pari------- */

/* person['salary'] = 30000;
person['fav places'] = ['maldives', 'bali', 'pataya'];
console.log(person);
 */

// amra chaile value ke kono notun variable a rakhte pari and sey notun variable ke dhore valu ke update or access korte pari

const beton = 'salary'
person[beton] = 30000;
console.log(person);



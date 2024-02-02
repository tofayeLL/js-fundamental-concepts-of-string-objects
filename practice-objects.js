/* ----practice task one---- */
/* question: Access the golden rod color value in output ? */
/* const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
let color = colors["golden rod"]
console.log(color); */



/* ----practice task two---- */
/* question: For this object below add a property named passenger capacity with value 5 ? */
/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;
console.log(car); */


/* ----practice task three---- */
/* question: Display the physics marks as output ? */
/* const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
}; */

//using dot notation and keep in a new variable
/* let access = student.physics.marks;
console.log(access); */

// using bracket notation and keep in a new variable
/* let access = student['physics']['marks'];
console.log(access); */



/* ---practice task four--- */
/* question: Count the number of properties ? */

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

//count how many property in object have 
let countProperties = Object.keys(student).length;
console.log(countProperties);

// count how many values have in a object
/* let countValues = Object.values(student).length;
console.log(countValues); */




/* ---practice task five--- */
/* question: Loop through an object and print the key-value pairs with their types ? */

/* let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
for(let prop in myObject){

    console.log('key:' + ' ' + prop + ' ' + '|' + ' ' +'type:' + ' ' +typeof(prop)); */

    // another way by using concat()
  /*   let first =  ('key:' + ' ' + prop);
    let second =  ('|' + ' ' +'type:' + ' ' +typeof(prop));
    let addTwoString = first.concat(' ').concat(second); 
    console.log(addTwoString); */
   


    // another way by using concat()
    /* let propertyName = 'key:'.concat(' ').concat(prop);
    let propertyNameType = '|'.concat(' ').concat('type:').concat(' ').concat(typeof(prop))
    console.log(propertyName, propertyNameType );
} */








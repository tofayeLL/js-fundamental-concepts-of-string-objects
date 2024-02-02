
/* --practice task one----- */
/* question: Count how many times a string has the letter a */
/* let name = 'aabuaakul';
let count = name.split('a').length-1;
console.log(count); */



/* ----practice task two */
/* question: Count how many times a string has the letter a or A */
/* let name = 'aabuaakulAA';
let count = 0;
let count2 = 0;
for(let i = 0; i < name.length; i++){
    let char = name[i];
    let capChar = name[i];
    if(char === 'a'){
        count++;
    }
    else if(capChar === 'A'){
        count2++;

    }
}
console.log('SmallLetter:', count);
console.log('CapitalLetter:', count2); */




/* ----practice task four---- */
/* question:If a given string has either x, replace x by y. if the given string has X, replace it by Y. */

/* let str = 'maximum';
let str2 = 'MAX';
let replace = str.replace('x', 'y');
let replace2 = str2.replace('X', 'Y');
console.log(replace);
console.log(replace2); */




/* -----practice task five---- */
/* question: Capitalize Every first Letter of each word in a String */
/* let sentence = 'i am a goOD learnEr';
console.log(sentence);
let words = sentence.split(' ');

for(let i = 0; i < words.length; i++){
    words[i] = words[i] [0].toLocaleUpperCase() + words[i].toLocaleLowerCase().slice(1);
}
let converted = words.join(' ');
console.log(converted);
 */


/* let sentence = "i aM a seRioUs leArneR";
console.log(sentence);
let convertArray = sentence.split(' ');

for(let i = 0; i< convertArray.length; i++){
    convertArray[i]= convertArray[i] [0].toUpperCase()+ convertArray[i].slice(1).toLowerCase();
}
convertStr = convertArray.join(' ');
console.log(convertStr); */















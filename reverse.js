/* ----string ke ultay dewar jonno reverse use kora hoy-- */

const sentence = 'i am learning web dev';
// reverse means ---to show like--- ved bew gninrael ma i----
/* let reverse = '';
for(let letter of sentence){

   reverse = letter + reverse;   
}
console.log(reverse); */


// another way we can solve
/* let reverse = '';
for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    reverse = letter + reverse;

}
console.log(reverse); */



/* --another shortcut way to reverse string--- */
let reverse = sentence.split('').reverse().join('');
console.log(reverse);
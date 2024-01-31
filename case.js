
const school = 'RAJ UK Uttara Model School';
//    console.log(school);
//    console.log(school.toLowerCase());
//    console.log(school.toUpperCase());



// tolowercase() or to uppercase use kora hoy string er sob gula value ke uppercase or lowercase a change korar jonno eta korle string compare er khetre kono jhamela hoy na.
/* const subject = 'Chemistry';
const book = 'chemistry';
if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log('exam a fatay dibo');
}
else{
    console.log('huday huday prista ultay khawar jonno wait kori');
} */



// trim() o emon e ekta jinish jeta use kore string er age pore  white space ke soranor kaje use kora hoy
// note:  majhe kono gap thakle seta kinu trim sorate parbe na tokhon kintu trim kaj korbe na.

const drink = 'water';
const liquid = ' water ';
if (drink.trim() === liquid.trim()) {
    console.log('panir opor nam jibon');
}
else {
    console.log('somudre onk pani ase but khaite pari na');
}
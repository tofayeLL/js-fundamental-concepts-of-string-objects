
const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for----of :   use kora hoy array ke access korar jonno
// for---in :  use kora hoy object ke access korar jonno
for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);

    // value gula pasha pashi dekhar jonno ektar modhey dite pari
    // console.log(prop, mobile[prop]);
    
}



/* -------Another way to access object by using for loop---- */

// first a amra keys ber korbo

let keys = Object.keys(mobile);
console.log(keys);
// ay process a keys ber korle output hisebe keys gula array te dekhay . so amra pore for --of use korley keys and values access korte parbo
for(let prop of keys){
    // console.log(prop, mobile[prop]);
    // chaile keys and values er majhe (:) colon diye output dekhate pari
    console.log(prop, ':' , mobile[prop]);
}


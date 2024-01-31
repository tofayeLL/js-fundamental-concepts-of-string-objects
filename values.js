

/* ----to access only the values from the objects---- */
const computer = {
    brand: 'lenovo',
    price: 35000,
    hdd: '512gb'
}

const values = Object.values(computer);
console.log(values);
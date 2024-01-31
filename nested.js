

const college = {
    name: 'vnc',
    class: ['11','12'],
    events: ['science fair','bijoy dibosh','21 feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top most'
        }
    }
}

// console.log(college.unique.result);
// to update or set new value 
college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);


// access array by using index
college.events[1] = '16 decem';//update or set a new value in array
console.log(college.events[1]);//access the value


// delete a property from object we will use delete

delete college.class;
console.log(college);


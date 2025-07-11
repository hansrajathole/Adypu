// let obj = {
//     name : "raj",
//     age : 22,
//     address : {
//         city : "Nagpur",
//         state : "Maharashtra"
//     }

// }
// console.log("old wala obj",obj);

// const shallowCopy = {...obj}
// shallowCopy.name = "pritam"
// shallowCopy.address.city = "Pune"
// console.log("old :" ,obj);
// console.log("shallow copy",shallowCopy);

function totalSum(...numbers) {
    // console.log(a);
    
    // console.log(numbers);
    let sum = 0
    for (const num of numbers) {
        sum += num
    }

    return sum
    
}

console.log(totalSum(10,20,30,40));

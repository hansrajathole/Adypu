// let arr = [10,20,30,40,50]

// arr.forEach((elem , index , arr)=>{
//     console.log(elem , "--->" , index);
    
// })


function greet(name , greeting){
    greeting()
    console.log(name);
}

function say() {
    console.log("Good Morning!!!");
    
}

greet("Aryan", say)
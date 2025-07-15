

function fun() {

    
    try {
        
        let a = 10 
        console.log(a + b);
        


    } catch (error) {
        console.log("error aaya hai bhai kuch :", error);
        
    }
}

fun()



let bdayParty = new Promise((resolve, reject)=>{
    let isGift = false

    if(isGift){
       setTimeout(()=>{
         resolve("Party suru hai")
       },3000)
    }else {
        setTimeout(()=>{
         reject("party nhi de rha bhai mai muze gift nhi mila")
        },3000)
    }
})


console.log(bdayParty);   // pending 

bdayParty.then((res)=>{
    console.log(res);
    console.log(bdayParty);
})
.catch((err)=>{
    console.log(err);  // message
    console.log(bdayParty); // rejected
    
})




ASYNC - AWAIT
function getData(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("data fetched")
        },5000)
    })
    
}

async function fetchData(){
    console.log("Fetching data....");
    let result = await getData()
    console.log(result);
    
}
fetchData()
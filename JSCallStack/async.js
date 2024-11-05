
// async keyword
// async function greet(){
//     throw 'error';
//     return "hellow";
// }

// greet()
// .then(()=>{
//     console.log("connected");
// })
// .catch((err)=>{
//     console.log("error was fetch",err);
// })




// await keyword 
function getRandomNumber(){
    return new Promise((Response,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("error caught");
            }
            console.log(num);
            Response();
        },1000);
    });
}

async function demo() {
    try{
        await getRandomNumber();
        await getRandomNumber();
        await getRandomNumber();
        await getRandomNumber();
        await getRandomNumber();
         getRandomNumber();
    }catch(err){
        console.log("caught ",err);
    };

    // here error caught this exection are stuck / not execute then  we are used try and catch methode
    let a=4;
    console.log(a);
    console.log(a+3);
}



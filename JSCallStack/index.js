// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     return two()+one();
// }

// let ans = three();
// console.log(ans);





// Callback Hell  use for API Call
h1 = document.querySelector("h1");
// function changecolor(color, timeout, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColor) nextColor(); // check function come or not then call again otherwise not
//     }, timeout);
// }

function changecolor(color , delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve();
        },delay);
    });
}
    changecolor("red",1000).then(()=>{
        console.log("changed1",h1.style.color);
        return changecolor("blue",1000);
    }).then(()=>{
        console.log("changed2",h1.style.color);
        return changecolor("lightblue",1000);
    }).then(()=>{
        console.log("changed3",h1.style.color);
        return changecolor("pink",1000);
    }).then(()=>{
        console.log("changed4",h1.style.color);
    })
    


// changecolor("red", 1000, () => {
//     changecolor("pink", 1000, () => {
//         changecolor("yellow", 1000);
//     });
// });
//Callback Hell  use for API Call





/* 
changecolor("pink",2000);
changecolor("yellow",3000);
changecolor("orange",4000);

setTimeout(()=>{
    h1.style.color = 'pink';
},2000);

setTimeout(()=>{
    h1.style.color = 'yellow';
},3000);

setTimeout(()=>{
    h1.style.color = 'green';
},4000);

setTimeout(()=>{
    h1.style.color = 'orange';
},5000);

*/





//  promise 
// function saveToDb(data, success, failure) {
//     let inernetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (inernetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("bharat", () => {
//     console.log(" success your data was saved :");
//     saveToDb("bharat2", () => {
//         console.log(" success2 your data was saved :");
//         saveToDb("bharat3", () => {
//             console.log(" success3 your data was saved :");
//         }, () => {
//             console.log("failure3 week connection data not saved");
//         });
//     }, () => {
//         console.log("failure2 week connection data not saved");
//     });

// }, () => {
//     console.log("failure week connection data not saved");
// });

// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("data was saved");
//         } else {
//             reject("week data connection");
//         }
//     })
// }

// let request = saveToDb("bharat");
// request.then(()=>{
//     console.log(request);
// }).catch(()=>{
//     console.log(request);
// });


//  improved version

// saveToDb("bharat").then(() => {
//     console.log("succes 1");
//   return saveToDb("ram").then(() => {
//         console.log("succes 2");
//   return saveToDb("love").then(() => {
//             console.log("succces 3")
//         });
//     });
// }).catch(() => {
//     console.log("reject");
// });



// saveToDb("ram").then((result)=>{
//     console.log(result);
//     console.log("complete1 ");
//     return saveToDb("ra");
// })
// .then((result)=>{
//     console.log(result)
//     console.log("complete2");
//     return saveToDb("love");
// }).then((result)=>{
//     console.log(result)
//     console.log("complete3");
// })
// .catch((error)=>{
//     console.log(error)
//     console.log("reject");
// });













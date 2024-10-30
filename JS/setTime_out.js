// settime out 
// console.log("Hii there ");

// setTimeout(()=>{
//     console.log("Weclome function is call");
// },4000);

// console.log("hy all is completed");

// setInterval

console.log("hello bharat");

let id = setInterval(()=> {
    console.log("are u ready ");
},2000);

console.log(id);
let id2 = setInterval(()=> {
    console.log("are u ready1 ");
},3000);

console.log(id2);
clearInterval(id);
clearInterval(id2);
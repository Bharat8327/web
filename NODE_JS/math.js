// let sum = (a,b) =>a+b
// const mul = (a,b) =>{
//     if(typeof a === typeof b){ return a*b;}
//     else{
//     return console.error("enter valid value");}
// }
    
// let pow1 = (a,b)=>{
//     let res = 1;
//     for(let i=1;i<=b;i++){
//         res*=a;
//     }return res;
// }
// const sub = (a,b)=> a-b
// // module.exports = sub;
// module.exports ={
//     sum :sum,
//     mul : mul,
//     pow :pow1,
//     sub:sub
// };


export let sum = (a,b) =>a+b //indevisually export not a object form
export const mul = (a,b) =>{
    if(typeof a === typeof b){ return a*b;}
    else{
    return console.error("enter valid value");}
}
export const sub = (a,b)=> a-b
    //task1
// let a = [1,2,3,4,5,6,2,3];
// for(let i=0;i<a.length;i++){
//     if(a[i]==2){
//         a.splice(i,1);
//     }
// }
// console.log(a);

//task2

// let num = 287152;
// let count=0;

// while(num>0){
//     let temp=num%10;
//     count+=temp;
//     num=Math.floor(num/10);
// }
// console.log(count);

//task 4
// let num = 287152;
// let count=0;

// while(num>0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count);

//task 3
// let num=0;

// let fact=1;
// for(let i=1;i<=num;i++){
//     fact*=i;
// }
// console.log(fact);

// task 4
// let mx = [1,2,3,4,5,23,53,1,4,12,53,5];
// let max =mx[0];
// for(let i=1;i<mx.length;i++){
//     if(max<mx[i]){
//         max=mx[i];
//     }
// }
// console.log(max);


// random number genrate between 1 to 6
// let a= Math.random()*6+1;
// console.log(a);

// object literals create car store

// const car = {
//     name:"Bmw",
//     model:"h23",
//     color:"red"
// };


// create an object Person 
// const person = {
//     name:"rahul",
//     age:"city",
//     city:"Delhi"
// };

// function infoS(name,age=0){
//      console.log(`name is ${name}  and age ${age} year's old`);
//     return age;
// }

// console.log(infoS("ram"));

// print tabel
// function printtable(n){
//     for(let a =1;a<=10;a++){
//         console.log(n*a);
//     }
// }
// let num = prompt("enter printtable number");
// printtable(num);

// return keyword in function

// function sum(a,b){
//     console.log(a,b);
//     return sum;
// }
// let a =1,b=4;
// console.log(sum(a,b));


// function sum1ToN(n){
//     return (n*(n+1))/2;
// }  

// console.log(sum1ToN(3));

// let str = ['Hello ',' Bharat ' , 'How are u'];

// function concat(str){
//     let concat1 ="";
//     for(temp of str){
//         concat1+=temp;
//     }
//     return concat1;

// }
// console.log(concat(str));


// nested function 

// function outer(){
//     let a = 10;
//     let b = 12;
//     function inner(){
//         console.log(a);
//         console.log(b);
//     }
//     inner();
// }

// // nameless function
// let sumavg = function(){
//  console.log("which class are u study");
//   console.log("hello");
// }

//  1. takes one or multiple function as argument 
// function multiple(func,times){
//         for(let i=1;i<=times;i++){
//             func();
//         }
//     }


// let greet = function(){
//     console.log("Namaste Bharat");
// }

// return a function higher order function
// function evenOrOdd(takfun){

//     if(takfun=="odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(takfun=="even"){
//     let even = function(n){
//         console.log((n%2==0));
//     }
//     return even;
// }else{
//     console.log("wrong takfun throw user");
// }
// }  


// custom object 

// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mul : function(a,b){
//         return a*b;
//     }
// };

// access calculator.add(1,3);



// write a arrow function that returns square of n

// const res = n => (n*n);



// print 5 time hellow world each 2s
// let id12 = setInterval(()=>{
//     console.log("hello world");
// },2000);

// setTimeout(()=>{
//     clearInterval(id12);
//     console.log("clear interaval ran")
// },10000);

// let arr=[12,4,2,4,1,2,12,4,23];
// let avgArray = (arr1) =>{
//     let temp=0;
//     for(sum of arr1){
//         temp+=sum;
//     }
//     return temp;
// };

// let evenOrOdd = (n) =>(
//      n%2==0);

// const object ={
//     message:"hello world",
//     lowMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.lowMessage,1000);

function callback(){
    let length = 4;
    console.log(this.length);
}

const object ={
    length:5,
    method(callback){
        callback();
    }
};


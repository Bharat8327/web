//for each

// let arr = [1,2,3,4,5];

// // arr.forEach((el) => 
// //     console.log(el)
// //     );

//  let print = function(el){
//     console.log(el);
//  }   
//  arr.forEach(print);

// for each in array
// let studentInfo = [{
//     name:"bharat",
//     marks:100
// },{
//     name:"ram",
//     marks:100.5
// },{
//     name:"love",
//     marks:99
// }];

// let getmarks = function(el){
//     console.log(el.marks);
// }
// studentInfo.forEach(getmarks);

// for each in map()

// let int = [1,2,3,4,5];

// let double = int.map((el)=>{
//     return  el*2;
// }
// );


// let gpa = studentInfo.map((el)=>{
//     return el.marks/10;
// });

// function num(el){
    // return el%2==0;
    // return !(el%2==0);
    // return el<5;
// }

// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let even = nums.filter((num) => (num % 2 == 0));
// let even = nums.filter(num);


// reduce function 

// let num = [2,3,4,56];
// let finalres = num.reduce((final,el)=>{
//     console.log(final,el);
//     return final+el;
// });

// find maximum throw reduce 
// let ans = num.reduce( (max,el) =>{
//    return max>el?el:max;
// } )

// check all element in array multiply 10 or not
// let num = [10,20,230,40,50,60,70,80,90];

// let ans = num.every( (el) => {
//     return el%10==0;
// });


// spread divide in individual value

// let arr = [1,3,5,23,4,23,1,-23,42,32,-4242];
// let res = Math.min(...arr);

// let arr = [12,3,1,3,23,23,4];
// let newArr = [...arr];
// let char = [..."hello bharat"];


// convert object literlas into datacopy

// const obj1 = {
//     name:"bharat",
//     age:20,
//     email:"bp12@gmail.comm"
// };

// const datacopy = {...obj1,id:12};
// String = "ram";
// const obj = {...String};

// let arr  = [12,32,42,12,3,212,12];
// let copyType = {...arr};

// function sum(msg,...args){
//     console.log(msg);
//     return args.reduce((add,el) => add+el );
// }
// access sum("bharat",1,2,323,23); //bharat 349
// access sum(1,2,323,23); // 1 348  => 1st argument take as a msg in this function

// for object destructing
// const student = {
//     name:"karn",
//     age:12,
//     subjects: ["hindi","english","math","science"],
//     username:"karan@gmail.com",
//     passwd:"12vwdsd",
//     city:"jaipur"
// };  

// access throw this 

// let {username:user,passwd:pwd,city:place="banglore"} = student;

// let arr = [1,2,3,5,46,2];

// function sq(el){
//     return el*el;
// }

// let ans = arr.map(sq);
// let avgerage = arr.reduce((prev,curr)=>{
//     return (prev+curr);
// });
// avgerage/=arr.length;

// let newArray  = arr.map((el)=>{
//     return el+5;
// });

// let string11  = ["ram","shyam","laxman","sita","Gita","love"];

// const ans = string11.map((el)=> el.toUpperCase());
// ;

// const double = (arr,...args)=>
//     [...arr,...args.map((v) =>v*2),];

// double([1,2,3],4,4);

// const mergeObj = (obj1,obj2)=>{
//     ({...obj1,...obj2})};
//     mergeObj({a:1,b:2},{c:4,d:43});
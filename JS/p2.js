
// Qs1. Write a JavaScript function that returns array elements larger than a number.
// let arr = [23,43,1,2,3,64,34,12,12,4,3,4,5];

// function larger(a1,num){
//     let temp = [];
//     for(gt of a1){
//         if(num<gt){
//             temp.push(gt);
//         }
//     }
//     return temp;
// }

// let ans = larger(arr,5);
// for(ans1 of ans){
//     console.log(ans1);
// }

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// let str = "abcdabcdefgggh";
// let ans ="";

// for(let i=0;i<str.length;i++){
//     if(ans.indexOf(str[i])==-1){
//         ans+=str[i];
//     }
// }
// console.log(ans);

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"


// const country = ["Australia", "Germany", "United States of America"];
// let ans = {
//     sz : country[0].length,
//     name :country[0]
// };
// for(let i=1;i<country.length;i++){
//     if(ans.sz<country[i].length){
//         ans.sz = country[i].length;
//         ans.name = country[i];
//     }
// }


// Qs4. Write a JavaScript function to count the number of vowels in a String
// argument.
// let ans=0;
// let st ="bharat ram sita laxman "
// for(let i=0;i<st.length;i++){
//     if(st[i]=='a'||st[i]=='e'||st[i]=='i'||st[i]=='o'||st[i]=='u'){
//         ans++;
//     }
// }
// console.log(ans);



// Qs5. Write a JavaScript function to generate a random number within a range
// (start, end).

// let a = prompt("enter a number");
// let b = prompt("enter b number");
// let diff= b-a;
// let ran = Math.floor(Math.random()*diff)+a;
// console.log(ran);
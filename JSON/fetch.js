let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
  let rahul = await getFact();
  let  p  = document.querySelector(".result");
    p.innerText = rahul;
});


async function getFact() {
  try{
    let res = await axios.get(url);
    return res.data.fact;
  } catch(er){
    return "data not found";
    }
}



let url = "https://catfact.ninja/facat";



// axios 
// async function getUser() {
//     try {
//       let response = await axios.get(url);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   } 



//     fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((opt)=>{
//         console.log(opt.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((res)=>{
//         console.log(res.fact);
//     })
//     .catch((err)=>{
//         console.log("error caught -");
//     });

// console.log("hi");





// using async and await fucntion 
// async function getdata(){
//     try{

//         let data = await fetch(url);
//         let actualdata = await data.json();
//         console.log(actualdata.fact);
    
//         let data2 =  await fetch(url);
//         let actualdata2 = await data2.json();
//         console.log(actualdata2.fact);
//     }catch(err){
//         console.log(err);
//     }
//     console.log("hello")
// }

// getdata();
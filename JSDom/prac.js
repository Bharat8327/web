// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     let random = colorGenrate();

//     let h3 = document.querySelector('h3');
//     h3.innerText = random;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = random

//     console.log("color updated");
// });


// function colorGenrate() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     return (`rgb(${red},${green},${blue})`);
// }
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let div = document.querySelector("div");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor=colorGenrate();
// }


// h1.addEventListener("click",changeColor);

// h3.addEventListener("click",changeColor);

// div.addEventListener("click",changeColor);










let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
//    console.log("code = ",event.code); 
   if(event.code == "KeyL"){
    console.log("move left");
   }else if(event.code == "KeyU"){
    console.log("move Up");
   }else if(event.code == "KeyR"){
    console.log("move Right");
   }else if(event.code == "KeyD"){
    console.log("move down");
   }
});

let btn = document.querySelectorAll("button");

// btn.onclick= function say(){
//     console.log("hello");
// }
for(btns of btn){
    btns.addEventListener("dblclick",()=>{
        console.log("click this button");
    });
    btns.addEventListener("dblclick",sayHello);
    // btns.onclick = sayname;
    // btns.onmouseenter = ()=>{
    //     console.log("you enter on button");
    // }
}

function sayHello(){
    alert("thanks");
}
function sayname(){
    console.log("Nyc");
}
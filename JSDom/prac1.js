let inp = document.createElement("input");
inp.placeholder = "enter your name";

let body = document.querySelector('body');

let h2 = document.createElement('h2');
body.append(h2);
body.append(inp);

inp.addEventListener("input",function(){
    // if(this.value >='a'&&this.value>='A'&&this.value<='z'&&this.value<='Z'&&this.value==' '){
    h2.innerText = this.value;
    // }
   });
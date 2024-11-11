let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    let li = document.createElement('li');
    li.innerText = inp.value;
    
    let remBtn = document.createElent('button');
    remBtn.innerText = 'Remove';
    remBtn.classList.add('remTask');
    
    li.appendChild(remBtn);
    ul.appendChild(li);
    inp.value="";
});

// help ful for remove task 
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});



















// let remove = document.querySelectorAll(".remTask");
// for(del of remove){
//     del.addEventListener('click',function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
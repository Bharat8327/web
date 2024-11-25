let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

div.addEventListener('click',function(){
    console.log('div was clicked');
});
ul.addEventListener('click',function(event){
    event.stopPropagation();
    console.log('ul was clicked');
});

for(l of li){
    l.addEventListener('click',function(event){
        event.stopPropagation();// used to stop the bubling in the html css page if user click then handle all of these bubling 
        console.log('li was clicked');
    });
}
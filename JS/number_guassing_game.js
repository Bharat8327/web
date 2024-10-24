let max = prompt("enter range of game");
const random = Math.floor(Math.random()*max+1); 
let target = prompt("guess the number");

while(true){

    if(target=="quit"){
        console.log("user quit");
        break;
    }
    if(target==random){
        console.log("you are Win!. Congrats !!",random);
        break;
    }else if(target<random){
        target = prompt("Hint! your guess is small . plzz try again");
    }else{
        target = prompt("Hint! your guess is large . plzz try again");
    }


}

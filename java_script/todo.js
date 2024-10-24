// To do app
const sublist = [];
let task = prompt("enter what do u want add ");

while(true){

        if(task=="list"){
            console.log("----------------------");
            for(let i=0;i<sublist.length;i++){
                console.log(i,sublist[i]);
            }
            console.log("----------------------");
        }else if(task=="add"){
            let add = prompt("what is your task");
            sublist.push(add);
            console.log("task added");
        }else if(task=="delete"){
            let idx = prompt("what is index which you want to delete");
            if(sublist.length>=1&&idx>=0){
            sublist.splice(idx,1);
            console.log("task is deleted");
            }else{
                console.log("you can do it bcz no one task in this your sublist")
            }
        }else if(task=="quit"){
            console.log("you quit");
            break;
        }else{
            console.log("plz enter correct u want do add");
        }
        task = prompt("enter what do u want add");
    }
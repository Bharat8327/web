let gameseq = [];
let userseq = [];
let level = 0;
let start = false;

let highestScore = null;
let btns = ["b1","b2","b3","b4"];
 

let h4 = document.querySelector('h4');
let colr = document.querySelector('body');
let h3 = document.querySelector('h3');




    // when game start then style change's show on the screen 
    function gameStart(){
        colr.style.backgroundColor='black';
        h3.style.color = 'white';
        console.log("game start");
        start = true;
        h4.style.color = 'yellow';
        setTimeout(levelup,1000); // 1's After levelup function call 
    }


    // random btn flash on the screen 
    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(() => {
            btn.classList.remove("flash");
        }, 200);
    }

    // user press btn then button is flash
    function btnUserFlash(btn){
        btn.classList.add("userFlash1");
        setTimeout(() => {
            btn.classList.remove("userFlash1");
        }, 200);
    }

    // this function show level and store gameseq in the collection
    function levelup(){  
        userseq=[];
        level++;
        h4.innerText = `Level ${level}`;
    
        // random btn choose
        let randomIdx = Math.floor(Math.random()*4);
        let randomColor = btns[randomIdx];
        let randmbtn = document.querySelector(`.${randomColor}`);
        gameseq.push(randomColor); 
        console.log(gameseq);
        btnFlash(randmbtn);
    }

    // print highest score on the screen when user press different button   
    function maxScorePrint(){
            highestScore = Math.max(level,highestScore);

            let setScore = document.querySelector("#MaxScore");
            setScore.innerText = `Your Highest Score is ${highestScore}`
            setScore.style.color='yellow';
    }

    // track the userseq and match gameseq 
    function btnPress(){
        let btn1 = this;
        btnUserFlash(btn1);
    
        usercolor = btn1.getAttribute("id");
        userseq.push(usercolor);
        
        checkAns(userseq.length-1);
    }
    
    // game over after set default's value 
    function restart(){
        start=false;
        level=0;
        gameseq=[];
    }

    // match userseq and gameseq collection are same then levelup function called if both are different then game is Over and restart function are called 
    function checkAns(idx){
        if(userseq[idx] === gameseq[idx]){
            console.log("same value");
            if(userseq.length==gameseq.length){
               setTimeout(levelup,1000);
            }
        }else{
            h4.innerHTML = `Game is over! <b> Your Score is ${level}</b> <br> Press any Key to start.`;
            let colr = document.querySelector('body');
            colr.style.backgroundColor='red';
        
            maxScorePrint(level);
            restart();
            }
    }


    // when user Any key Press between 'A' - 'Z' then game is start
    document.addEventListener("keypress",function(){
        if(start==false){
        gameStart();
        }
    });


    // track which button are press
    let btn1 = document.querySelectorAll(".btn");
    for(b1 of btn1){
        b1.addEventListener("click",btnPress);
    }









    










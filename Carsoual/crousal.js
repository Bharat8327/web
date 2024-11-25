const images = [
    "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHl8ZW58MHx8MHx8fDA%3D"
    ,"https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=tEz_WZihUfZhnvtAHLY-yt6c9e3-z7pREYjD5yAlT-A="
    ,"https://media.istockphoto.com/id/892797192/photo/dance-like-no-one-is-watching.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dt2KERMs-woelvwnFEaU1dfZQDX6MQTRSVmLu_LkTc0="
    ,"https://media.istockphoto.com/id/486420378/photo/head-is-swimming-on-dance-floor.jpg?s=612x612&w=0&k=20&c=EiMJlGkIDN5aPdr8-QHzAIU6R8Siago92eisJZCNqts="
    ,"https://media.istockphoto.com/id/539466990/photo/happy-new-year.jpg?s=612x612&w=0&k=20&c=7ocxwtrOhqYOkvV6_f9TZH8xlU_iorcA4DuxGchWlv4="
    ,"https://media.istockphoto.com/id/1766643228/photo/party-in-the-office.jpg?s=612x612&w=0&k=20&c=JKcaynuK6pKyV5luWhMruk_J7xCpZLgmpHrRAwJ1mDA="
    ,"https://media.istockphoto.com/id/1464025505/photo/happy-boyfriend-proposing-to-girlfriend-by-holding-hands-during-candlelight-dinner-at-home.jpg?s=612x612&w=0&k=20&c=DhrJT-WMcBvxxT_mDlOMInuODl1iLDxglV5CoOXYa_c="
    ,"https://media.istockphoto.com/id/1206898916/photo/close-up-of-cropped-hands-holding-pinky-promise.jpg?s=612x612&w=0&k=20&c=HnQc1D3Z3HrqyS8bBriiWKzmX347Apju1xO3MuXdEK8="
    ];

    const n = images.length;
    const flexContainer = document.getElementById("flex-container")
    const lbtn = document.getElementById("lbtn")
    const rbtn = document.getElementById("rbtn")
    const Rand = document.getElementById("bc")
    const Carosuelnav = document.getElementById("carosuel-nav")

    const containerWidth = 80;
    const flexContaineWidth = n*containerWidth;
    flexContainer.style.width = flexContaineWidth;




    for(let i = 0;i<n;i++){
        const newImg = document.createElement("img")
        newImg.src  = images[i];
        newImg.classList.add("img-style")
        flexContainer.appendChild(newImg);

        const dotdiv = document.createElement('div')
        dotdiv.classList.add('carosuel-dot')        
        Carosuelnav.appendChild(dotdiv)

        dotdiv.addEventListener('click',(event)=>{
            const index = [...Carosuelnav.children].indexOf(event.target);
            
            showImg(index);
        })
    }
        let cntPos = 0;
        showImg(0)
    lbtn.addEventListener('click',()=>{
          if(cntPos>0){
           showImg(cntPos-1)
        }else{
           showImg(n-1)
        }
        canvas();
    });
    rbtn.addEventListener('click',()=>{
        if(cntPos<n-1){
            showImg(cntPos+1)
        }else{
            showImg(0)
        }
        canvas();
  });
    
    function showImg(pos){
        const prvdot = Carosuelnav.children[cntPos];
        prvdot.classList.remove('active');
        cntPos = pos;
        
        // const clrda = Carosuelnav.children[cntPos];
        // clrda.classList.add('active')
        // or this code convert into single line 
        Carosuelnav.children[cntPos].classList.add('active');

        const widthSet = -cntPos*containerWidth;
        flexContainer.style.transform =`translateX(${widthSet}vw)`;
    }

    function canvas(){
        let red = Math.floor((Math.random()*250)+1);
        let green = Math.floor((Math.random()*250)+1);
        let blue = Math.floor((Math.random()*250)+1);
        let setColor = `rgb(${red},${green},${blue})`
        Rand.style.backgroundColor =setColor
        let Num = Math.floor((Math.random()*10)+5);
        console.log(Num);
        Rand.style.border = `${Num}px solid rgb(${red+100},${green-10},${blue-50})`
        
    }
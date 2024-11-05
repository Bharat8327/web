DOM => Documnet Object Model
    -> The Dom Represents a document with a logical tree.
        it allows us to manippulate/change webpage content(html Elements);

    
    1. Select(img)
    2.manipulate /changes in html ans css document   

Selecting Elements =>
    1.by id
        document.getElementById("id_name");
                -> Return the element as an object or null (if not found);

    2.by class_name
                    => document.getElementsByClassName("class_name");//return collection of class
                        return the elements as an HTML Collection or empty collection(if not found )

    3.by tagName 
                    => document.getElementsByTagName("tag_name"); 
                            return the elements as an html collection or empty collection (if not found)

-********************************************Query Selectors******************************************************************************************************

Allows us to use any CSS Selector 
    document.querySelector('p'); // Selectors first p element 
    document.querySelector('#myid'); // Selectors first  element with id = myId 
    document.querySelector('.myclass'); // Selectors first element with class = myclass
    
    document.querySelectorAll("p"); //selectors all p elements return with NodeList(size_of_total)



-********************************************Using Properties & Methods******************************************************************************************************

1.inner Text 
Shows the visible text contained in a Node
2.text content(show hidden )
shows all the full text
3.innerHTML(show anchor tag , bold tag,internal style)
shows the full markup


-********************************************Manipulating Attributes******************************************************************************************************
obj.getAttribute(attr);
obj.setAttribute(atr_name,val);
obj.getAttribute(attr);

-********************************************Manipulating Style******************************************************************************************************
style Property only for show iniline style in the js document file 

obj.style

using class list 

obj.classlist

classList.add(); // to add new classes 
classList.remove(); // to remove classes 
classList.contains(); // to check if class exists 
classList.toggle(); // to toggle betweeb add & remove


***************************************************************************************************************************************
Navigation =>
            parentElement 
            children
            previousElementSibling / nextElementSibling


******************************************Adding Elements******************************************************************************************

document.createElement('element_name');

1.appendChild(element); //add new body where we want to add then show in html page on the last 
2.append(element); // parent ke child ke andar edit krna or additional add krna then use append function 
3.prepend(element); // start of the parent 
4.insertAdjacentElement(where,element); // where do we want to add new element 
        where => 1.berforebegin
                 2.afterbegin // as a first child
                 3.afterend // after end 
                 4.beforeend // before end


                 example =>
                            let btn = document.createElement("button");
                            btn.innerText = 'click-me';
                            let body  = document.querySelector('body');
                            body.append(btn);

                     eventListener=>
                               btn.addEventListener("click",function(){
                                btn.style.backgroundColor='green'});


 Removing Elemnts 
    1.removeChild(element);   //appendchild    
    2.remove(element); // append         


*****************************************************************************************************
DOM -> Events 
            Events are signals that something has occured.(user inputs /actions)
           1.inline use ->   
             (when an element is clicked)onclick="console.log('button was clicked') "// trigger occur and print button was clicked 
           2. onmouseenter = () =>{
            console.log("you hover on the button");
           }


  Event Listener => addEventListener 
    
           syntx => element.addEventListener(event_name,callback )

            element_obj.addEventListener("click",function()){
                console.log("button clicked");
            }


*****************************************************************************************************
Keyboard Event => when key is pressed then some operation are performed 
               1.event occur 
                                -> A . code -> enter key ASCII code print / Name 
                                   B . key -> visible on the screen when we enter throw keyboard 


*****************************************************************************************************
form Events  =>
example =>
        let form = document.querySelector("form");
        form.addEventListener("submit",function(){
            alert("form submited");
        });

        dont want to swith another page then use this 

        event.preventDefault();
example =>   
        form.addEventListener("submit",function(event){
            event.preventDefault();
            alert("form submited");
        });

        
        form.addEventListener("submit",function(event){
        let name = this.elements[0];
        let pass = this.elements[1];
            console.log(name.value);
            console.log(pass.value);
    
    });





 More Events=>
        change event  =>
                        the changes event occur when the value of an element has been changed (only works on <input>, <textarea> and <select> elements )

    sytnx =>
            user.addEventListener("change",function(){
                console.log("change event");
                console.log("final value = ",this.value);
            });

        input event => 
                    the input event fires when the vlaue of an <input>,<select> , or <textarea> element has been changed 
       
    sytnx =>
            user.addEventListener("input",function(){
                console.log("change event");
                console.log("final value = ",this.value);
            });
*****************************************************************************************************
bubling_proagation => when at a time trigger multiple function then it mange this trigger then we are use event_obj.stopPropagation(); this happen was stop that is called of the bubling_proagation


*****************************************************************************************************
Call Stack => fifo structure are follow

        |                |       
        ||              ||
        ||              ||
        || ------j----- ||                                                                                      
        || ------i----- ||                                                                                      
        || ------h----- ||                                                                                      
        || ------g----- ||                                                                                      
        || ------f----- ||                                                                                     
        || ------e----- ||                                                                                      
        || ------d----- ||                                                                                    
        || ------c----- ||                                               
        || ------b----- ||                                          
        || ------a----- ||  <---stack frame                                                     
        ||______________||                                                   

              STACK


 Breakpoints => use Debuging(is bascially when occurs some error then i dont know then we are break into part of code and execute that is call of the debigin) of the code            

*****************************************************************************************************
Js is Single Thrded => at a time execute one task that is called of the single Threaded in Js


synchrous nature => ek sath sari ki sari cheze sink me chal rahi hain ek ke baad ek   
            line line code execute hona 

 Asynchronous Nature => setTimeout setinterval           



CallBack Hell => bascially nesting of the callback called callBack used at a time multiple call use for API throw fetch data then  use callbacks Hell

h1 = document.querySelector("h1");
    Callback Hell 
        function changecolor(color, timeout, nextColor) {
            setTimeout(() => {
                h1.style.color = color;
                if (nextColor) nextColor(); // check function come or not then call again otherwise not
            }, timeout);
        }

        changecolor("red", 1000, () => {
            changecolor("pink", 1000, () => {
                changecolor("yellow", 1000);
            });
        });

*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*---*-**--*-*-*--*-
IMPORTANT => some new things invent prevent throw callback hell like  
            1.promise 
            2.async 
            3.wait


promise =>  The promise object Represents the eventual completion (ot failure) of an Asynchronous operation and its resulting value
            1.resolve -> success
            2.reject-> failure
    there are three state of the promise 
    1.pending
    2.rejected(error state and give error)
    3.fulfilled / resolved state


syntx_with_example=>

    function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("data was saved");
        }else{
            reject("week data connection");
            }
        })
    }


         saveToDb("bharat").then(()=>{
            console.log(request);
        }).catch(()=>{
            console.log(request);
        }); 
        
       ----------------- or  ----------------------- 
        
        let request = saveToDb("bharat")
        request.then(()=>{
            console.log(request);
        }).catch(()=>{
            console.log(request);
        });


--------------improved Version  -----------  or -------------------

        saveToDb("bharat").then(()=>{
                console.log("succes 1");
            return saveToDb("ram").then(()=>{
                console.log("succes 2");
             return saveToDb("love").then(()=>{
                console.log("succces 3")
        });
    });
    }).catch(()=>{
        console.log("reject");
    });

--------------mostly used this Version  -----------  or -------------------
  
    this is called of the promise chaining 
        saveToDb("ram").then(()=>{
            console.log("complete1 ");
            return saveToDb("ra");
        })
        .then(()=>{
            console.log("complete2");
            return saveToDb("love");
        }).then(()=>{
            console.log("complete3");
        })
        .catch(()=>{
            console.log("reject");
        });

        {/* with print what is error comes and print using argument */}
saveToDb("ram").then((result)=>{
    console.log(result);
    console.log("complete1 ");
    return saveToDb("ra");
})
.then((result)=>{
    console.log(result)
    console.log("complete2");
    return saveToDb("love");
}).then((result)=>{
    console.log(result)
    console.log("complete3");
})
.catch((error)=>{
    console.log(error)
    console.log("reject");
});
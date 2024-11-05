Data types in js 
there are 7 types of the primative data types 
1.Number
2.String 
3.Boolean
4.Undefined
5.Null
6.Bigint
7.Symbol
----------------------------------------------------------------------------------------------------------
Operator Precendence => this is the genral order of solving an expression (left to right)
1.()
2.** (right to left )
3.*,/,%
4.+,-

-------------------------------------------------------------------------------------------------------------------

Let Keyword =>Syntax of declaring variables (2015 introduce let keyword)

let vaiable_name = value;

Const KeyWord => value of constants can't be changed with re=assignment & they can't be re-declared 

const pi = 3.14 ;

var keyword => old syntax of writing vaiables 

var var_name= val;
------------------------------------------------------------------------------------------------------------------

// comment in java script 

------------------------------------------------------------------------------------------------------------------------------

Identifiers Rule  =>
    Variable must be identified with unique names(identifiers)
1.Names contains => letters,digits,underscore,and dollarsign,(no space)
2.Name must begin with letter || $ symbol
3.Name are Case Sensitive ( y Y both are different )
4.Reserved Words (like js keyword ) cannot be use as names of identifiers

========================================================================================================================

camelCase => Way of writing identifiers 

camelCase (js naming convention ) -> use in c++ / js
snake_case -> in python
PascalCase

=====================================================================================================================
what is TypeScript => Static(fixed) Typed , where JS is dynamic(changes allow) Typed (typescipt is strict version )
Designed by Microsoft

=================================================================================================================================

String in JS => Strings are text pr sequence of character 
    let name  = "ram "; ->use for string 
    let char  = 'S'; use for char

 
String Indices =>
    let name  = "Bharat Patel"; 

                B   h   a   r   a   t   sp      P   a   t    e   l 
  index =>      0   1   2   3   4   5    6      7   8   9    10  11  (0 Based indexing )

        name[0]->point to the 'B';
        find the lemgth of the string then use => string_name.length;

================================================================================================================================
Concatincation String =>
            Adding strings together 
    "tony"+" "+"stark" = "tony stark"
    "tony"+1="tony1"
================================================================================
null % undefined in JS

Undefined -> A vaiable that has not been assigned a value is of type undefined 

null -> The null value represents the intentional absence of any object value 
    To be Explicity assigned -> let a = null;

===============================================================================================
 Using the Console -> Uses REPL (Read-Evalute-Print=Loop)

 =========================================================================
 Operation in JS 
  
 example =>     
             A           +       B
            operands operator Operands

            1.Arithmatic (+,-)
            2.Unary (++,--)
            3.Assignment (=,+=)
            4.Comparison(>,<,!,===,==)
            5.Logical (&& , || , !)


 ===============================================================================================
            Comparison For non-numbers
            'a' -> 61 'b' ->62....
            'A' -> 41 'B' ->42....

===============================================================================================================
truth & falsy ->
                Everthing in Js is true or false (int boolean context)       
                This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context .

                Falsy value => 
                            false ,0,-0,on (BigInt value),""(empty string),null,undefined , NaN
                Truthy values =>
                            Everthing else

===============================================================================================================


       Alert & Prompt 
       
       Alert Displays an alert message on the page 
       syntx => alert("something is wrong ");

       Prompt Displays a dialog bpx that asks user for some input 
       syntx => prompt("Enter your roll No");

===============================================================================================================

there prints on the screen then we are use 
    syntax =>
            console.log("Statement");

  if are u want print error type msg (means if any one user enter wrong email and password then show in red color the error then use this syntax)  
    syntax => 
        console.error("show msg for modification");

    same if u are want to give warning this page is harmful then use this syntax
        syntax => 
                console.warn("for msg");
===============================================================================================================

String Methods =>
            Methods -> actions that can be performed on Objects.keyword

    format =>
            stringName.method();

    1. .trim() -> Trims whitespaces from both ends of string not between of the string & returns a new one 
        let msg = "    Hello Bharat     ";
        output -> 'Hello Bharat'

        Strings are Immutable in JSm
    2. .toUpperCase() -> small letter to convert in capital letter 
        let msg1 = "ram";
        msg1.toUpperCase();
        output -> 'RAM'
    3. .toLowerCase() -> Capital letter convert into the samll leter then use this 
        let msg2 = "RAM";
        msg2.toLowerCase();
        output-> 'ram';

********************************************************************************************************************************
  strings methods with arguments =>
    
    Argument is a some value that we pass to the methode

    format =>
            stringname.methode(arg);

    1. indexOf("love"); -> returns the first index of occurece of some value in string . or gives -1 if not found
        let str = "ramjii";
        console.log(str.indexof("ram"));
        output -> 0 

   
       
## Methode Chaining  => using one methode after another . Order of Execition will be left to right .

    str.toUpperCase().trim(); this fucntion it is called of the methode chaining 

## Slice Methode -> Returns a part of the original string as a new String.
        let str = "ILoveCoding";
        str.slice(5); // Coding
        str.slice(start,end); end exclusive // Love
        str.slice(-num) = str.slice(length-num);


## .replace('target','pointout' ) ->      searches a value in the string & return a new string with the valu replace 

    format => let str = "Ilovecoding";
    str.replace("love","ram");
    output => Iramcoding
    but actual string doesn't change bcz string is Iimutable
## .repeat() => Returns a string with the number of copies of a string 
    format  =>
        let  str1 = "mango";
    str.repeat(3); // "mangomangomango";
    
    

=======================================================================================================================================================

Array(Data Structure ) => Linear Collection of things  // Arrays are Mutable

creates array =>
            let student = ["ram","bharat","love","sita"];
            student.length;//4;

         empty array =>
            let newArr = [];   
      
    
Arrays Methode =>
    1. push("value");   -> add end of the array           unshift("value"); -> add to start of the array
    2. pop(); delete from end & returns it                  shift(); -> delete from start & return it      

    .indexof("value") -> return the index of something otherwise -1
    .includes("red")  -> search for a value if find return true otherwise false

    // in concat function actual array are not changes we are applied these methode he is return new array 
    .concat(arrayName) -> merge 2 arrays  // first element start with first arrname the argument array name 
   
    .reverse() -> reverse an array // complete array are reverse and mmodified this array with revrse 

    .slice() -> copies a portion of an array 
    arr.slice(5); 
    arr.slice(start,end); end exclusive 
    arr.slice(-num) = str.slice(length-num);


    .splice(StartRange,deletCount(opt),item0.....itemN) // splice perform any operation then changes in actual array 
            remove /    replaces / add element in place


     .sort() -> sort an array in Ascending order       
        this sort function only use for string and char type of value in integer we are not use this function




        

        Array References =>(address and memory )
    let arr = [1,2,3,4];
    arr = > called of the reference variable 
    example => let a = [1,2,3,5];
                let b = [1,2,3,5];
              
                if(a==b||a===b)return false;
                bcz we are compare both address where is also different then return false 
        let c = a;
        if(c==a||c===a)return true; bcz both are point same address then write true 😊


    constant arrays => in constant arr not a value constant we are can perform any operation on const array remove and delete 
            but we are can't change actual new address and new array 
        cont arr = [3,4,5,2];



    Nested Array =>(multi dimensonal array)
        Array of arrays
                          0     1      2
            let nums = [[2,4],[3,6],[4,8]];
                         0 1   0 1   0 1

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 loops =>   used to iterate peace of code                    
 syntax =>
        for(initialization ; condition ; updation){
            //dp smtg console.log(i);
        }
while loop=> 
    while(condition){
        // do something
    }

    break -> break the current executaion in the loop


    for of loop => (for each loop)

    for(element of collection){
        //do something
    }

    let fruits = ["mango","apple","banna","litchi","orange"];
    for(fruit of fruits){
        console.localStorage(fruit);
    }
    nested for of loop

    for(fruit of fruits){
        for(frt of fruit){
            console.localStorage(frt);
        }
    }


------------------------------------------------------------------------------------------------------------
JS Object Literals => Used to store Keyd collection & complex entities(data)

        property => (keyword,value) pair 
        Objects are a collection of properties

        key literals object define syntax 

        let/const variable_name = {
            key : value,
            key :value,
            key:value
        };


        Thread  / Twitter Post
        Create an object literal for the properties of thread / twitter post which includes - 
        1.username
2.content
3.likes
4.reposts
5.tags

const post = {
    username:"@bharat",
    content:"Hwllo guys",
    like:150,
    reposts:5,
    tags:["@rampatel","@jinu"]
};

acces literal throw two ways 
1.object_name.keyname;
2.object_name["key_name"];

Get Values/Access => Js automaticallly converts objcts keys to strings
Even if we made the number as a key, the number will be converted to string 

#Add / Update Value in literal obj 
1.change the city key value to delhi
    obj_Name.key = new_value;
2.Add a new property ,gender:"Female"
    obj_name.keyname = value;
3.Change the marks to "A"
    obj_name.marks = "A"
 4.delte key in the object 
    delete  obj_name.key_name; // return true;   

------------------------------------------------------------------------------------------------------------
Object of Objects =>storing information od multiple student

const info = {
    bharat:={
        grade:"A",
        rollNo:45
    };
    ram:={
        grade:"b";
        rollno:21;

    };
    sita:={
        grade :"C";
        rollno:23;

    };
};

// acces info.bharat.grade;
-----------------------------------------------------------------------------------------------------------------------

Array of Objects => storing informationn of multiple student

const arr = [

{

    name:"ram";
    city:"jaipur"
},
{
    name:"rahul",
    city:"kota"
},
{
    name:"jinu",
    city:"oai"
},

]//access same objects of literals
-----------------------------------------------------------------------------------------------------------------------

Math Object =?

properties          Methods
Math.PI             Math.abs(n); => convert in positive
Math.E = 2.71       Math.pow(a,b) => cal powe of 2^3
                    Math.floor(n) => round of min number less then or equal <= (nearst smallest integer value)
                    Math.ceil(n) => larger value round of 
                    Math.random()  =>  give random value between (0 to 1 range 1 exclusive ) 
                                ex =>Math.floor(Number(Math.random())*1000000);


-----------------------------------------------------------------------------------------------------------------------------------------------
lecture - 19
Function => function is a block of code where we use to perform a similar task multiple time in a code then we are use to reduce line of code 
            and improve readablility of code then we are use of the function 


    declaraction => 1. defination 
                    function Function_name() {
                        // statement n
                    }

                   function printName() {
                    console.log("Hello Name");
                   } 

                   2. Execute 
                        function_name();
                        printName();//output -> Hello Name


functionn with Arguments => Values we pass to the function 
                   syntax =>
                         function function_name(arfument1,argument2){
                            // use with differnt ways
                         }
                         function_name(p1,p2); // acess call function_name();

Return kEyword is Function =>   return keyword is used to return some value from the function   

                             input -> Function  -> output
                                    (does some word)

                        function function_name(p1,arg1){
                            // statement
                            return val;
                        }            

Scope => Scope determines the accessiblility pf variables ,object ,and functions from different parts pf the code

                        1.function scope -> vaiable defined inside a function are not accessible (visible from outside the function)
                        2.Block
                        3.Lexical -> a variable defined outside a function can be accessible inside another function defined after the varable declaration 
                                    the opposite is NOT True


 function Expression = > 
                        
                        const variable = function(arg1,p1....){
                            // do or return simething
                        }
                        // nameless function
                    let hello = function(p1,p2){// access throw variable name hello(p1,p2);
                        console.log("hello");
                    }
                    
 Higher Order Functions => A function that does one or both 
              1. takes one or multiple function as argument 
                        
                        function multiple(func,times){
                            for(let i=1;i<=times;i++){
                                func();
                            }
                        }
                        let greet = function(){
                            console.log("Namaste Bharat");
                        }
                        function calling =>  multiple(greet,100);

               2. returns a function take multiple argument / single argument 
                    function evenOrOdd(takfun){

                        if(takfun=="odd"){
                            let odd = function(n){
                                console.log(!(n%2==0));
                            }
                            return odd;
                        }
                        else if(takfun=="even"){
                        let even = function(n){
                            console.log((n%2==0));
                        }
                        return even;
                    }else{
                        console.log("wrong takfun throw user");
                    }
                    }  

  // shorthand methods
  const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    }, 
    mul : function(a,b){
        return a*b;
    }
};
// access calculator.add(2,4); // 6

shorthand property of this calculator define function in object 

methods shorthand =>
    const calculator = {
        add(a,b){
            return a+b;
        },
        sub(a,b){
            return a-b;
        }, 
        mul(a,b){
            return a*b;
        }
    }

Default Parameters =>
                        Giving a default value to the argument

syntax =>
            function function_name(a,b=10){
                return a+b;
            }

            function_name(1);//output 11
            function_name(1,12);//output 13


=====================================================================================================================================================

this.keyword  => This keyword refers to an object that is executing the current piece of Code.

=====================================================================================================================================================

try & catch => 
    the try statement allows you to define a block of code to be tested for errors while it is being executed.
the catch statement allows you to define a block of code to be executed, if an error occurs in the try block

Aplcation program interface => API

try{ // bascically check error occur or not if occur then throw error to catch function and catch and perform some task according to req
    console.log(a);
}catch(e){
    console.log("caught an error..!");
    console.log(e);
}

=====================================================================================================================================================
Miscellaneous Topics =>
    1.Arrow Functions ( => nameless function) (use-> higher order function as a parameter pass and where pass a function name as call a callback value => ek asa function jo dusra function ko as a paramete leta hain use callback value kehte hain  )
        syntx =>  
                    const func = (arg1,arg2) => {function defination /*return  */}

    2. Arrow Function implicit return
        syntax =>
                    const sum = (a,b=0) =>(a+b);  


    3. Set Timout  -> inbuilt function window object ka function hota ha(use for api call and send request and recevice ke liye)  
    
                    syntx => 
                            setTimeout(function,timeout) 
                                                    take milisecond time as a parameter 1s => 1000ms

    4. Set Interval ->
                    same as the settime out only for measure differnece b/w set time out only for execute one time but this is execute multiple time and stop and again execute                                                 
            syntax =>
                    setInterval(function , timeout)

                console.log("hello bharat");

                let id = setInterval(()=> { // infinite running 
                    console.log("are u ready ");
                },2000);

                stop this interval then use this 
                clearInterval(id); // break the interval
=====================================================================================================================================================
     
# this with Arrow Function =>
    Arrow-this =>  scope of this function lexical scope who is call of the parent function inherit the arrow function parents scope -> window


     
     function-this =>   scope of the calling object who is call this function 

---------------------------------------------------------------------------------------------------------------------------------------------------------------

map => 
    let newArr = arr.Map(some function defination or name); return a new array

    ex =>   
            let num = [1,2,3,4];
            let double = num.Map((el)=>{return el*2});
            // 
            let double = num.Map(function(el){
                return el*2;
            });
    ex=>
            let studentInfo = [{
                name:"bharat",
                marks:100
            },{
                name:"ram",
                marks:100.5
            },{
                name:"love",
                marks:99
            }];
            let gpa = studentInfo.map((el)=>{//return new array store in gpa
                return el.marks/10;
            });
                         
 Filter=>
        let newArr = arr.filter(some function defination or name);// return true of false value
        
    ex =>   
            let nums = [2,4,1,5,6,2,7,8,9];
            let even = nums.filter( (num)=>(num%2==0)); // return new array if return false then donot add otherwise add


Every => (same as a logical and operator)
        Returns true if every element of array gives true for some condtion function.Else return false.
        syntax=>
                Array.every(some function definationn or name);

    ex=>    
            [1,2,3,4].every( (el) => (el%2==0));//false;
            [2,4].every((el)=>(el%2==0));//true;        


some => (same as a logical OR operator)
        Returns true if every element of array gives true for some condtion function.Else return false.
syntax=>
        Array.some(some function definationn or name);

ex=>    
    [1,2,3,4].some( (el) => (el%2==0));//truw;
    [2,4].some((el)=>(el%2!=0));//true;        


Reduce => 
            Reduce the array to a single value

    syntax =>   Array.reduce(reducer function with 2 variable for (accumulator,element) );

    ex=>    [1,2,3,4].reduce ( (res, el) => (res+el) );//output - 10

---------------------------------------------------------------------------------------------------------------------------------------------------------------
Spread =>
        Expands an iterable into multiple values 

syntax =>
        function function(...arr){
            // do something
        }
ex => arr = [1,2,3,4,5]; 

        console.log(...arr);// op =>  1 2 3 4 5

       s = "ramsita";
       console.localStorage(...s);// op => r a m s i t a  



object literals spread =>

        syntx =>
            const obj1 = {
                name:"bharat",
                age:20,
                email:"bp12@gmail.comm"
            };
            
            const datacopy = {...obj1,id:12};



Rest => Allows a function to take an indefinite number of argument and bundle them in an array (opposite to the spread ans store in iterable )

syntax=>     function sum(...args){
                return args.reduce((add,el) => add+el );
            }
       ex=>     
            function sum(msg,...args){
                console.log(msg);
                return args.reduce((add,el) => add+el );
            }

            function sum(msg,...args){
                console.log(msg);
                return args.reduce((add,el) => add+el );
            }
            // access sum("bharat",1,2,323,23); //bharat 349
            // access sum(1,2,323,23); // 1 348  => 1st argument take as a msg in this function
            
             

 Destructuring => 
                    Storing values of array into multiple variables 
    
        let name = ["tnoy","moni","love","jesu","kitu","miw","mwe"];
        // let winner = name[0];
        // let runnerup = name[1];
        // let secondrunnerup = name[2];
        // this upeerall COmbine in one line
        let [winner,runnerup,secondrunnerup] = name;
               0       1           2
        let [winner,runnerup,...others] = name; // called a distructruing and mixup with rest

Destructing for Objects =>
    






-----------------------------------------************************************--------------------------------------------------------------------------------------------------
                                                    DOM(ADVANCE JAVASCRIPT)
                                                ===============================

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
            3.await


1. promise =>  The promise object Represents the eventual completion (ot failure) of an Asynchronous operation and its resulting value
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



2.Async Functions =>
                async keyword throw we are create a async function and return by one default a Promise AND we can apply methode on promise like a then and catch 

      syntx =>
            async function greet(){
                // throw "genrate random error";
                return "hellow";
            }          
            
            greet()
            .then((result)=>{
                console.log("resolved",result);
            })
            .catch((err)=>{
                console.log("error fetch ",err);
            });

make arrow function async =>
        syntax =>   
                let res = async  ()=>{
                    return 5;
                };
        //access throw this methods
            res().then((res)=>{
                console.log("result",res);
            });



   3. await Keyword => 
                        pauses the execution of its surrounding async until the promise is settled(resolved or rejected);
                        await keyword only use inside of the async function        

                        syntx =>

                        function getRandomNumber(){
                            return new Promise((Response,reject)=>{
                                setTimeout(()=>{
                                    let num = Math.floor(Math.random()*10)+1;
                                    if(num>3){
                                        reject("error caught");
                                    }
                                    console.log(num);
                                },1000);
                            });
                        }

                        async function demo() {
                            await getRandomNumber();
                            await getRandomNumber();
                            await getRandomNumber();
                            getRandomNumber();
                            // here error caught this exection are stuck / not execute
                            let a=4;
                            console.log(a);
                            console.log(a+3);
                        }



           Await Keyword=>  Handling Rejections with await             
                        
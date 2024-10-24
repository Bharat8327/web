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
















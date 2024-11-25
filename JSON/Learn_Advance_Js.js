API => Application Programming Interface (API-> are bascially a webApi  )

    when user search on web browser throw url call in format of API and Api throw access to server and return in JSON format data  
    user don't access direct server, API throw we are access the server and response 

    user bascially send a Request to the api and according to api request send a row material data 
    API -> called a interface means this work as a servent / layer sever and user b/t called a API 
    jo ApI http protocol ko use karti hain we are called bascially web api 

     
    JSON => java-script object  Notation (learn->www.json.org)  before the json one more format are avilable xml => xentsiable markup language  xml api simiplar to the html format ke sath  tag are custom 
    API => Some Random APIs 
        1.https://catfact.ninja/fact (sends random cat facts)
        2.https://www.boredapi.com/api/activity (sends an activity to de when bored)
        3.https://dog.ceo/api/breads/image/random (sends cute dog picture) 

    json validator tell which code is correct or not 

    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//NOTE JSON VS JS 

JavaScript Object	JSON
1.	Keys in key/value pairs don’t always need double quotes.   || 	Keys in key/value pairs need to be enclosed in double quotes.
2.	It is only used by JavaScript.                             ||  	Other programming languages are able to generate and use JSON.
3.	Functions are compatible with JavaScript Object.	       ||   Functions are incompatible with JSON.
4.	The built-in JavaScript JSON.stringify()                   || Using the built-in JSON.parse() method, you can transform JSON data into a JavaScript object.
     method allows you to convert JavaScript objects
     to JSON format.	
    
     
    JSON => Accessing Data from JSON (all json data come in string format and send data any api throw server then we are use sttring fromat )
        
        1.JSON.parse(data) method 
            use-> To parse a string data into a JS object 
           
            example =>
                let js ={
                    name :"rahul",
                    age:34
                };
                JSON.parse(js);

        2.JSON.stringify(json) method 
            use-> To parse a JS object data into JSON

            ex=> JSON.stringify(js);


---------------------Testing API requests---------------------------------------
There are two tool's are mostly use for devloper

1.Hoppscoth->dont_need_download
2.Postman->need to download


Ajax => Asynchronous JavaScript and XML


About of the Hoppscoth web functionality
Https Verbs -> 
                1.Get -< data fetch
                2.POST -< Push data on server
                3.DELETE -< Delte data on Server

HTTPS response status codes 
1.information responses (100-199)
2.successful responses (200-299)
3.Redirecction messages (300-399)
4.CLient error responses (400-499)
5.Server error responses (500-599)

200 -< ok 
404 -< Not Found
400 -< Bad Request
500 -< internal Server Error

Add information in URLs =< 
                query Strings ->    
                                https://www.google.com/search?q=harry+porter
                                                              ^   ^
                                                             key  value 
                       ?name=bharat&stat=95                                      
                           ^   ^
                          key  value


                   /:id -> enter valid id 
                   /:num 
                   /:q
                   {{id}}       
                   <id>


Http headers ->(send combination data/addtional information) are bascially store a request information and response data 
    1.header-> request header (accept by default index , plan text , json format)
            response header 
            we are send header with metadata (data about the data called a metadata)
    
    2.value

our first request => before the fetch send the request using xml HTTP req object ek object bnani padti thi or uske differnt methode hote the isko bhjte the 
                    ies trah ke methode mein bhout trah ke issues the async and promise vale methode bilkul kaam nhi krte the 

            now we are use  fetch for  request now we are used fetch 

           syntx => 
        let url = "https://catfact.ninja/facat";

                fetch(url); 
           
           async function getdata(){
            try{
        
                let data = await fetch(url);
                let actualdata = await data.json();
                console.log(actualdata.fact);
            
                let data2 =  await fetch(url);
                let actualdata2 = await data2.json();
                console.log(actualdata2.fact);
            }catch(err){
                console.log(err);
            }
            console.log("hello")
        }
        
        getdata();
</id>
---------------------Axios list---------------------------------------
Libary to make https request
reference for => https://github.com/axios/axios?tab=readme-ov-file
         do not download first cdn link copy and paste before js scirpt element 
cdn link Axios => 
            <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

difference between Axios and fetch =>
    Axios will automatically transforms the server’s response data, while with Fetch, you need to call the response.json method to parse the data into a JavaScript object. Furthermore, Axios delivers the data response within the data object, whereas Fetch allows the final data to be stored in any variable.

example=>
            async function getUser() {
                try {
                let response = await axios.get(url);
                console.log(response.data.fact);
                } catch (error) {
                console.log(error);
                }
            }  

    Header pass in Axios request 
                            =>
                                   const url = "https://icangazdajoke.com/";
                            async fuction getjokes(){
                                try{
                                    const config = { headers:{Accept :"application/json"} };
                                    let res = await axios.get(url,config);
                                    console.log(res.data);
                                }catch(err){
                                    console.log(err);
                                }
                            }         


Axios Updating Query string => if inside of url want to change query string change then how to change then we are leran 

use url of the university domains throw the github 
            url => university-domain-list api on github search 
            
            
            // task according to user requirement when user give input states according list all of the college name in list form 
            
            
            
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                            Terminal -> a text input and output environment 
A
1. use for node js 
2. github 
3.Programming related terminal 
B
Access
Speed

Flags => flags are characters that we pass with commands to modify their behaviour

manual Commands => 
    man ls -give info about is command 
    man mkdir-give info about mkdir command

    with flags =
        ls -l
        ls -a 
        ls -la 

        deleting files & folders 
        rm -removes files 
        rmdir - rmoves empty folders 
        rm -rf -removes any folders 

























































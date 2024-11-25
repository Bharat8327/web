// NOTE Node_js 
JavaScript Runtime Environment. 
It is used for server side programing.

    note=> Node.js is not a language, library or framework.  

Node REPL(read evaluate print and loop)
    .help give us commands 

Node Files -> node fileName.js

Process => this object provides information about, and control OverconstrainedError, the current Node.js process

process.argv => return an array conatining the command - line argument passed when the Node.js process was launched
1.first file executable path for node 
    2. current file path we are run

process.argv -> is use to take some input as a prompt

    **************************************************************************************************************************************************

    //NOTE -  Module.exports -> requiring file
    require() -> a built -in function to include external modules that exist in separate files.

        syntx =>
let dataimport = require("./math.js")  if nothing is return then only return empty object
console.log(dataimport)

module.exports -> a special object

syntx =>
    let rahul = {
        name: 'bharat',
        passwd: 'ram12#c',
        DOB: '20/09/2004'

    }
module.exports = rahul;

let rollNo = 20

module.exports.name1 = "rahul"; // both are correct 
exports.gender = "Male";
module.exports = rollNo;

//NOTE - module.exports for requiring directories same as file but we are require the data throw the directory search in the index.js file execution start only this file 

**************************************************************************************************************************************************

    // NOTE -> Npm (Node package Manager )
    // NOTE -> referece for this site about npm  https://www.npmjs.com/
    npm is the standard package manager for Node.js
npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

1.the website
2.the Command Line Interface(CLI)
3.the registry

there are manily two work
1. library of packages -> un packages store krna or uski library bna kr rakhna
2. command line tool -> cmmd line ke un packages ko  dusre devloper ko access krana  install krana and version ko set krana 
           npm is preinstall with a node

// some commands of npm 
npm install        install all the dependencies in your project
npm install < foo > add the < foo > dependency to your project
npm test           run this project's tests
npm run < foo > run the script named < foo >
    npm < command > -h   quick help on < command >
        npm - l             display usage info for all commands
npm help < term > search for help on < term > (in a browser)
npm help npm       more involved overview(in a browser)          

npm install < package_name >
    after comes one dir and two files
1.node_modules -> the node_modules folder contains every installed dependency for your project(download all dependencies in this folder)
2.package - Lock.json -> it records the exact version of every installed dependency, including its sub - dependencies and their version(dependencies related information install and store)
3.package.json -> (special file one of the most important file  ) the package.json files contains descriptive and functional metadata(information about a project like version release who made project and license and dependencies) about a project, such as a name version, and dependencies
if node_modules are delete then bascially go on directory where is delete then go and bascially run command on command prompt and install
cmd => npm install


cmd -> npm init // this command bascially use to create own package.json file set authore name description and licience key and more about information the project 

//NOTE - Local vs Global install packages best practise install packages localy on a system
install globally then use this command ->
    npm install - g < package name > // after download you need to link the pacakge throw the package name 
        npm link < package name > // then code perfectly run 


**************************************************************************************************************************************************

            require v / s import(the best advise at a time use whole in this project both of one)
syntx =>
        import { sum } from "./file_name.js"
we can't selectively load only the pieces we need with require but with import , we can selectively load only the pieces we need, which can save memory.

loading is synchronous for require but can be asynchronous for 'import'

syntx =>
    export let sum = (a, b) => a + b //indevisually export not a object form
            export const mul = (a, b) => {
                if (typeof a === typeof b) { return a * b; }
                else {
                    return console.error("enter valid value");
                }
            }
            export const sub = (a, b) => a - b

            import { sub , mul , sum } from "./math.js";
            console.log(sub(2, 4));
            
                --------------OR ------------------
            import { sub as mines, mul as cross, sum as add} from "./math.js";
                                name change sum to add
            console.log(sub(2, 4));


            //NOTE in export default u can pass only function / object 
            export default function (){
                console.log("hello")
            } 
            // accepet with random_name and no need to apple curly bracket 
            // NOTE and only one deffault you can apply otherwise gives error 

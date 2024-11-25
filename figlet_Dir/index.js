const figlet = require("figlet");

figlet("Mom Love u",(err,data)=>{
    if(err){
        console.log("something went wrong....");
        console.dir(err);
        return;
    }
    console.log(data);
});
// console.log(process.argv);
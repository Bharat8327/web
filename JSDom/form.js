let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // let name = document.querySelector("#name");
    // let pass = document.querySelector("#pass");
    //     console.log(name.value);
    //     console.log(pass.value);
      let name = this.elements[0];
    let pass = this.elements[1];
        console.log(name.value);
        console.log(pass.value);

});
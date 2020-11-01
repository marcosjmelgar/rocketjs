 //var button = document.getElementById("buttom").addEventListener("click", buttonClick);

 //function buttonClick (e){
    //document.getElementById("header-title").textContent = "changed";
 //}

 // <div id="name error"></div>
 //var output= document.getelementbyid("output");
 //output.innerHTML = "<h2>" + e.target.id + "</h2";

 //var name = document.querySelector("input[type="text"]");
 //var name = document.getElementsByClassName("fullname");

window.onload = function(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rpassword = document.getElementsByClassName("rpassword");
    var age = document.getElementsByClassName("age");
    var telephone = document.getElementsByClassName("telephone");
    var adress = document.getElementsByClassName("adress");
    var city = document.getElementsByClassName("city");
    var postal = document.getElementsByClassName("postal");
    var identification = document.getElementsByClassName("identification");
    var fullname = document.getElementById ("fullname");

    fullname.onblur = validateName

    function validateName () {
        if ( fullname.value.length <= 6  || !fullname.value.includes(" ")) {
            console.log("Nombre menor a 6 letras o sin espacio");
        }
    }

    email.onblur = validateEmail;

    function validateEmail () {
        if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email.value)) {
            //console.log("correo aceptado");
        } else {
                //console.log("correo no aceptado");
            }
    }

    password.onblur = validatePassword;

    Function validatePassword () {
        if ()
    }
}
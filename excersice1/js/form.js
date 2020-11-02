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
    var rpassword = document.getElementById("rpassword");
    var age = document.getElementById("age");
    var telephone = document.getElementsByClassName("telephone");
    var adress = document.getElementsByClassName("adress");
    var city = document.getElementsByClassName("city");
    var postal = document.getElementsByClassName("postal");
    var identification = document.getElementsByClassName("identification");
    var fullname = document.getElementById ("fullname");

    fullname.onblur = validateName

    function validateName () {
        if ( fullname.value.length <= 6  || !fullname.value.includes(" ")) {
            console.log("Name lower than 6 letters or withouth space");
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

    function validatePassword () {
            if (password.value.length < 8) {
                console.log("too_short");
            } else if (password.value.search(/\d/) == -1) {
                console.log("no_num");
            } else if (password.value.search(/[a-zA-Z]/) == -1) {
                console.log("no_letter");
            } else if (console.log("ok"));
    }

    rpassword.onblur = validateRpassword;

    function validateRpassword () {
        if (rpassword.value !== password.value) {
            console.log("not the same");
        } else if (console.log ("are the same"));
    }

    age.onblur = validateAge;
// falta validar que sea entero
    function validateAge () {
        if (age.value.search (/\d/) == -1) {
            console.log ("type a number");
        } else if ( age.value < 18) {
            console.log("age must be older than 18");
        } else if (console.log ("age ok"));
    }
}
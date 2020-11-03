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
    var fullname = document.getElementById ("fullname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rpassword = document.getElementById("rpassword");
    var age = document.getElementById("age");
    var telephone = document.getElementById("telephone");
    var adress = document.getElementById("adress");
    var city = document.getElementById("city");
    var postal = document.getElementById("postal");
    var identification = document.getElementById("identification");

    fullname.onblur = validateName;
    fullname.onfocus = hideDiv;


    function validateName () {
        if ( fullname.value.length <= 6  || !fullname.value.includes(" ")) {
            document.getElementById ("fullnameoutput").style.visibility = "visible";
        }
    }

    email.onblur = validateEmail;
    email.onfocus = hideDiv;

    function validateEmail () {
        if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email.value)) {
        } else {
                document.getElementById ("emailoutput").style.visiblity = "visible";
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

    function validateAge () {
        if (age.value.search (/\d/) == -1) {
            console.log ("type a number");
        } else if ( age.value < 18 || age.value % 1 !== 0) {
            console.log("age must be older than 18 and to be an integer");
        } else ("age ok");
    }

    telephone.onblur = validateTelephone;

    function validateTelephone () {
        if (telephone.value.search (/\d/) == -1 ) {
            console.log ("type a number");
        } else if (telephone.value.search (/\s/) !== -1) {
            console.log ("error blank");
        }   else if (telephone.value.search (/\(/) !== -1 || telephone.value.search (/\)/) !== -1 ) {
            console.log ("parentesis error");
        }   else if (telephone.value.search (/\-/) !== -1) {
            console.log ("guion error");
        } else if (telephone.value.length < 7) {
            console.log ("telephone at least 7 numbers");
        }
    }

    adress.onblur = validateAdress;

    function validateAdress () {
        if ( adress.value.length < 5) {
            console.log ("adress less than 5 chracters");
        }   else if (adress.value.search (/\w\s\d/) == -1) {
        console.log("ok")
        }
    }

    city.onblur = validateCity;

    function validateCity () {
        if (city.value.length < 3) {
            console.log("city less than 3 characters")
        } else {
            console.log ("ok")
        }
    }

    postal.onblur = validatePostal;

    function validatePostal () {
        if ( postal.value.length < 3) {
            console.log ("postal code less than 3 characters")
        } else {
            console.log ("ok")
        }
    }

    identification.onblur = validateIdentification;

    function validateIdentification () {
        if (identification.value.search (/\d/) == -1) {
            console.log ("type a number");
        } else if (identification.value.length > 8 || identification.value.length < 7) {
            console.log ("number between 7 and 8");
        }   else if (identification.value % 1 !== 0) {
            console.log ("identification must be an integer");
        }
    }

    function hideDiv () {
        document.getElementById("fullnameoutput").style.visibility = "hidden";
        document.getElementById("emailoutput").style.visibility = "hidden";
    }
}

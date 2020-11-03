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
    var button = document.getElementById("button");

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
        if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email.value) == true ) {
        }   else {document.getElementById ("emailp").innerText = "Invalid Email";
                document.getElementById ("emailp").style.visibility = "visible";
                document.getElementById ("emailp").style.color = "red";
                document.getElementById ("emailp").style.fontWeight = "bold";
                }
    }

    password.onblur = validatePassword;
    password.onfocus = hideDiv;

    function validatePassword () {
            if (password.value.length < 8) {
                document.getElementById ("passwordp").innerText = "Password need to be at least 8 characters long";
                document.getElementById ("passwordp").style.visibility = "visible";
                document.getElementById ("passwordp").style.color = "red";
                document.getElementById ("passwordp").style.fontWeight = "bold";
            } else if (password.value.search(/\d/) == -1) {
                console.log("no_num");
                document.getElementById("passwordp").innerText = "Password need to have at least 1 number";
                document.getElementById ("passwordp").style.visibility = "visible";
                document.getElementById ("passwordp").style.color = "red";
                document.getElementById ("passwordp").style.fontWeight = "bold";
            } else if (password.value.search(/[a-zA-Z]/) == -1) {
                document.getElementById ("passwordp").innerText = "Password need to have at least 1 letter";
                document.getElementById ("passwordp").style.visibility = "visible";
                document.getElementById ("passwordp").style.color = "red";
                document.getElementById ("epasswordp").style.fontWeight = "bold";
            }
    }

    rpassword.onblur = validateRpassword;
    rpassword.onfocus = hideDiv;

    function validateRpassword () {
        if (rpassword.value !== password.value) {
            document.getElementById ("rpasswordp").innerText = "Not the same as password";
            document.getElementById ("rpasswordp").style.visibility = "visible";
            document.getElementById ("rpasswordp").style.color = "red";
            document.getElementById ("rpasswordp").style.fontWeight = "bold";
        }
    }

    age.onblur = validateAge;
    age.onfocus = hideDiv;

    function validateAge () {
        if (age.value.search (/\d/) == -1) {
            document.getElementById ("agep").innerText = "Not a number";
            document.getElementById ("agep").style.visibility = "visible";
            document.getElementById ("agep").style.color = "red";
            document.getElementById ("agep").style.fontWeight = "bold";
        } else if ( age.value < 18 || age.value % 1 !== 0) {
            document.getElementById ("agep").innerText = "Age must be at least 18 and to be an integer";
            document.getElementById ("agep").style.visibility = "visible";
            document.getElementById ("agep").style.color = "red";
            document.getElementById ("agep").style.fontWeight = "bold";
        }
    }

    telephone.onblur = validateTelephone;
    telephone.onfocus = hideDiv;

    function validateTelephone () {
        if (telephone.value.search (/\d/) == -1 ) {
            document.getElementById ("telephonep").innerText = "Not a number";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
        } else if (telephone.value.search (/\s/) !== -1) {
            document.getElementById ("telephonep").innerText = "There is a space";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
        }   else if (telephone.value.search (/\(/) !== -1 || telephone.value.search (/\)/) !== -1 ) {
            document.getElementById ("telephonep").innerText = "There are parenthesis";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
        }   else if (telephone.value.search (/\-/) !== -1) {
            document.getElementById ("telephonep").innerText = "There are dashs";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
        } else if (telephone.value.length < 7) {
            document.getElementById ("telephonep").innerText = "Telephone number must have at least 7 numbers";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
        }
    }

    adress.onblur = validateAdress;
    adress.onfocus = hideDiv;

    function validateAdress () {
        if ( adress.value.length < 5) {
            document.getElementById ("adressp").innerText = "Adress must have at least 5 characters";
            document.getElementById ("adressp").style.visibility = "visible";
            document.getElementById ("adressp").style.color = "red";
            document.getElementById ("adressp").style.fontWeight = "bold";
        }   else if (adress.value.search (/\w\s\d/) == -1) {
            document.getElementById ("adressp").innerText = "Adress must have characters, numbers and a space between";
            document.getElementById ("adressp").style.visibility = "visible";
            document.getElementById ("adressp").style.color = "red";
            document.getElementById ("adressp").style.fontWeight = "bold";
        }
    }

    city.onblur = validateCity;
    city.onfocus = hideDiv;

    function validateCity () {
        if (city.value.length < 3) {
            document.getElementById ("cityp").innerText = "City must have at least 3 characters";
            document.getElementById ("cityp").style.visibility = "visible";
            document.getElementById ("cityp").style.color = "red";
            document.getElementById ("cityp").style.fontWeight = "bold";
        }
    }

    postal.onblur = validatePostal;
    postal.onfocus = hideDiv;

    function validatePostal () {
        if ( postal.value.length < 3) {
            document.getElementById ("postalp").innerText = "Postal must have at least 3 numbers";
            document.getElementById ("postalp").style.visibility = "visible";
            document.getElementById ("postalp").style.color = "red";
            document.getElementById ("postalp").style.fontWeight = "bold";
        }
    }

    identification.onblur = validateIdentification;
    identification.onfocus = hideDiv;

    function validateIdentification () {
        if (identification.value.search (/\d/) == -1) {
            document.getElementById ("identificationp").innerText = "Identification must be a number";
            document.getElementById ("identificationp").style.visibility = "visible";
            document.getElementById ("identificationp").style.color = "red";
            document.getElementById ("identificationp").style.fontWeight = "bold";
        } else if (identification.value.length > 8 || identification.value.length < 7) {
            document.getElementById ("identificationp").innerText = "Identification must have between 7 and 8 numbers";
            document.getElementById ("identificationp").style.visibility = "visible";
            document.getElementById ("identificationp").style.color = "red";
            document.getElementById ("identificationp").style.fontWeight = "bold";
        }   else if (identification.value % 1 !== 0) {
            document.getElementById ("identificationp").innerText = "Identification must be an integer";
            document.getElementById ("identificationp").style.visibility = "visible";
            document.getElementById ("identificationp").style.color = "red";
            document.getElementById ("identificationp").style.fontWeight = "bold";
        }
    }

    function hideDiv () {
        document.getElementById ("fullnameoutput").style.visibility = "hidden";
        document.getElementById( "emailp").style.visibility = "hidden";
        document.getElementById ("passwordp").style.visibility = "hidden";
        document.getElementById ("rpasswordp").style.visibility = "hidden";
        document.getElementById ("agep").style.visibility = "hidden";
        document.getElementById ("telephonep").style.visibility = "hidden";
        document.getElementById ("adressp").style.visibility = "hidden";
        document.getElementById ("cityp").style.visibility = "hidden";
        document.getElementById ("postalp").style.visibility = "hidden";
        document.getElementById ("identificationp").style.visibility = "hidden";
    }

    button.addEventListener ("click", clickEvent)

    function clickEvent (e) {
        e.preventDefault ();

        alert("Check data: " + " Full name: " + fullname.value + " Email: "
        + email.value + " Password: " + password.value + " Age: " + age.value + " Telephone: " + telephone.value +
        " Adress: " + adress.value + " City: " + city.value + " Postal Code: " + postal.value +
        " Identification Number: " + identification.value);
        return false;
    }
}

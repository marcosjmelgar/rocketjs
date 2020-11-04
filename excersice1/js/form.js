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
    //Vars
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
    var welcome = document.getElementById ("user");

    //Flags
    nameFlagError = 0;
    emailFlagError = 0;
    passwordFlagError = 0;
    rpasswordFlagError = 0;
    ageFlagError = 0;
    telephoneFlagError = 0;
    adressFlagError = 0;
    cityFlagError = 0;
    postalFlagError = 0;
    identificationFlagError = 0;

    var arrayErrors = [];

    //Name Validation
    fullname.onblur = validateName;
    fullname.onfocus = hideDiv;

    function validateName (e) {
        fullname.value = e.target.value;
        if ( fullname.value.length <= 6  || !fullname.value.includes(" ")) {
            document.getElementById ("fullnameoutput").style.visibility = "visible";
            document.getElementById ("fullname").style.backgroundColor = "white";
            nameFlagError = 1;
            var nameerror = document.getElementById("fullnamep").innerText = "Name lower than 6 letters or without space";
        } else {
            document.getElementById ("fullname").style.backgroundColor = "lightgreen";
            nameFlagError = 0;
        }
    }

    //Email Validation
    email.onblur = validateEmail;
    email.onfocus = hideDiv;

    function validateEmail () {
        if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email.value) == true ) {
            document.getElementById ("email").style.backgroundColor = "lightgreen";
            emailFlagError = 0;
            console.log(emailFlagError);
        }   else {document.getElementById ("emailp").innerText = "Invalid Email";
                document.getElementById ("emailp").style.visibility = "visible";
                document.getElementById ("emailp").style.color = "red";
                document.getElementById ("emailp").style.fontWeight = "bold";
                document.getElementById ("email").style.backgroundColor = "white";
                var emailerror = document.getElementById("emailp").innerText = "Invalid Email";
                emailFlagError = 1;
            }
    }

    //Password validation
    password.onblur = validatePassword;
    password.onfocus = hideDiv;

    function validatePassword () {
            if (password.value.length < 8) {
                document.getElementById ("passwordp").innerText = "Password need to be at least 8 characters long";
                document.getElementById ("passwordp").style.visibility = "visible";
                document.getElementById ("passwordp").style.color = "red";
                document.getElementById ("passwordp").style.fontWeight = "bold";
                document.getElementById ("password").style.backgroundColor = "white";
                var passworderror = document.getElementById("passwordp").innerText = "Password need to be at least 8 characters long"
                passwordFlagError = 1;
            } else if (password.value.search(/\d/) == -1) {
                console.log("no_num");
                document.getElementById("passwordp").innerText = "Password need to have at least 1 number";
                document.getElementById ("passwordp").style.visibility = "visible";
                document.getElementById ("passwordp").style.color = "red";
                document.getElementById ("passwordp").style.fontWeight = "bold";
                document.getElementById ("password").style.backgroundColor = "white";
                var passworderror = document.getElementById("passwordp").innerText = "Password need to have at least 1 number";
                passwordFlagError = 1;
            } else if (password.value.search(/[a-zA-Z]/) == -1) {
                document.getElementById ("passwordp").innerText = "Password need to have at least 1 letter";
                document.getElementById ("passwordp").style.visibility = "visible";
                document.getElementById ("passwordp").style.color = "red";
                document.getElementById ("passwordp").style.fontWeight = "bold";
                document.getElementById ("password").style.backgroundColor = "white";
                var passworderror = document.getElementById("passwordp").innerText = "Password need to have at least 1 letter";
                passwordFlagError = 1;
            } else {
                document.getElementById ("password").style.backgroundColor = "lightgreen";
                passwordFlagError = 0;
            }
    }

    //Rpassword validation
    rpassword.onblur = validateRpassword;
    rpassword.onfocus = hideDiv;

    function validateRpassword () {
        if (rpassword.value !== password.value) {
            document.getElementById ("rpasswordp").innerText = "Not the same as password";
            document.getElementById ("rpasswordp").style.visibility = "visible";
            document.getElementById ("rpasswordp").style.color = "red";
            document.getElementById ("rpasswordp").style.fontWeight = "bold";
            document.getElementById ("rpassword").style.backgroundColor = "white";
            var rpassworderror = document.getElementById("passwordp").innerText = "Not the same as password";
            rpasswordFlagError = 1;
        } else {
            document.getElementById ("rpassword").style.backgroundColor = "lightgreen";
            rpasswordFlagError = 0;
        }
    }

    //Age validation
    age.onblur = validateAge;
    age.onfocus = hideDiv;

    function validateAge () {
        if (age.value.search (/\d/) == -1) {
            document.getElementById ("agep").innerText = "Not a number";
            document.getElementById ("agep").style.visibility = "visible";
            document.getElementById ("agep").style.color = "red";
            document.getElementById ("agep").style.fontWeight = "bold";
            document.getElementById ("age").style.backgroundColor = "white";
            var ageerror = document.getElementById("agep").innerText = "Not a number";
            ageFlagError = 1;
        } else if ( age.value < 18 || age.value % 1 !== 0) {
            document.getElementById ("agep").innerText = "Age must be at least 18 and to be an integer";
            document.getElementById ("agep").style.visibility = "visible";
            document.getElementById ("agep").style.color = "red";
            document.getElementById ("agep").style.fontWeight = "bold";
            document.getElementById ("age").style.backgroundColor = "white";
            var ageerror = document.getElementById("agep").innerText = "Age must be at least 18 and to be an integer";
            ageFlagError = 1;
        } else {
            document.getElementById ("age").style.backgroundColor = "lightgreen";
            ageFlagError = 0;
        }
    }

    //Telephone validation
    telephone.onblur = validateTelephone;
    telephone.onfocus = hideDiv;

    function validateTelephone () {
        if (telephone.value.search (/\d/) == -1 ) {
            document.getElementById ("telephonep").innerText = "Not a number";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
            document.getElementById ("telephone").style.backgroundColor = "white";
            var telephoneerror = document.getElementById ("telephonep").innerText = "Not a number";
            telephoneFlagError = 1;
        } else if (telephone.value.search (/\s/) !== -1) {
            document.getElementById ("telephonep").innerText = "Telephone number must not have spaces";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
            document.getElementById ("telephone").style.backgroundColor = "white";
            var telephoneerror = document.getElementById ("telephonep").innerText = "Telephone number must not have spaces";
            telephoneFlagError = 1;
        }   else if (telephone.value.search (/\(/) !== -1 || telephone.value.search (/\)/) !== -1 ) {
            document.getElementById ("telephonep").innerText = "Telephone number must not have parenthesis";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
            document.getElementById ("telephone").style.backgroundColor = "white";
            var telephoneerror = document.getElementById ("telephonep").innerText = "Telephone number must not have parenthesis";
            telephoneFlagError = 1;
        }   else if (telephone.value.search (/\-/) !== -1) {
            document.getElementById ("telephonep").innerText = "Telephone number must not have dashs";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
            document.getElementById ("telephone").style.backgroundColor = "white";
            var telephoneerror = document.getElementById ("telephonep").innerText = "Telephone number must not have dashs";
            telephoneFlagError = 1;
        } else if (telephone.value.length < 7) {
            document.getElementById ("telephonep").innerText = "Telephone number must have at least 7 numbers";
            document.getElementById ("telephonep").style.visibility = "visible";
            document.getElementById ("telephonep").style.color = "red";
            document.getElementById ("telephonep").style.fontWeight = "bold";
            document.getElementById ("telephone").style.backgroundColor = "white";
            var telephoneerror = document.getElementById ("telephonep").innerText = "Telephone number must have at least 7 numbers";
            telephoneFlagError = 1;
        } else {
            document.getElementById ("telephone").style.backgroundColor = "lightgreen";
            telephoneFlagError = 0;
        }
    }

    //Adress validation
    adress.onblur = validateAdress;
    adress.onfocus = hideDiv;

    function validateAdress () {
        if ( adress.value.length < 5) {
            document.getElementById ("adressp").innerText = "Adress must have at least 5 characters";
            document.getElementById ("adressp").style.visibility = "visible";
            document.getElementById ("adressp").style.color = "red";
            document.getElementById ("adressp").style.fontWeight = "bold";
            document.getElementById ("adress").style.backgroundColor = "white";
            var adresserror = document.getElementById ("adressp").innerText = "Adress must have at least 5 characters";
            adressFlagError = 1;
        }   else if (adress.value.search (/\w\s\d/) == -1) {
            document.getElementById ("adressp").innerText = "Adress must have characters, numbers and a space between";
            document.getElementById ("adressp").style.visibility = "visible";
            document.getElementById ("adressp").style.color = "red";
            document.getElementById ("adressp").style.fontWeight = "bold";
            document.getElementById ("adress").style.backgroundColor = "white";
            var adresserror = document.getElementById ("adressp").innerText = "Adress must have characters, numbers and a space between";
            adressFlagError = 1;
        } else {
            document.getElementById ("adress").style.backgroundColor = "lightgreen";
            adressFlagError = 0;
        }
    }

    //City validation
    city.onblur = validateCity;
    city.onfocus = hideDiv;

    function validateCity () {
        if (city.value.length < 3) {
            document.getElementById ("cityp").innerText = "City must have at least 3 characters";
            document.getElementById ("cityp").style.visibility = "visible";
            document.getElementById ("cityp").style.color = "red";
            document.getElementById ("cityp").style.fontWeight = "bold";
            document.getElementById ("city").style.backgroundColor = "white";
            var cityerror = document.getElementById ("cityp").innerText = "City must have at least 3 characters";
            cityFlagError = 1;
        } else {
            document.getElementById ("city").style.backgroundColor = "lightgreen";
            cityFlagError = 0;
        }
    }

    //Postal validation
    postal.onblur = validatePostal;
    postal.onfocus = hideDiv;

    function validatePostal () {
        if ( postal.value.length < 3) {
            document.getElementById ("postalp").innerText = "Postal must have at least 3 numbers";
            document.getElementById ("postalp").style.visibility = "visible";
            document.getElementById ("postalp").style.color = "red";
            document.getElementById ("postalp").style.fontWeight = "bold";
            document.getElementById ("postal").style.backgroundColor = "white";
            var postalerror = document.getElementById ("postalp").innerText = "Postal must have at least 3 numbers";
            postalFlagError = 1;
        } else {
            document.getElementById ("postal").style.backgroundColor = "lightgreen";
            postalFlagError = 0;
        }
    }

    //Identification validation
    identification.onblur = validateIdentification;
    identification.onfocus = hideDiv;

    function validateIdentification () {
        if (identification.value.search (/\d/) == -1) {
            document.getElementById ("identificationp").innerText = "Identification must be a number";
            document.getElementById ("identificationp").style.visibility = "visible";
            document.getElementById ("identificationp").style.color = "red";
            document.getElementById ("identificationp").style.fontWeight = "bold";
            document.getElementById ("identification").style.backgroundColor = "white";
            var identificationerror = document.getElementById ("identificationp").innerText = "Identification must be a number";
            identificationFlagError = 1;
        } else if (identification.value.length > 8 || identification.value.length < 7) {
            document.getElementById ("identificationp").innerText = "Identification must have between 7 and 8 numbers";
            document.getElementById ("identificationp").style.visibility = "visible";
            document.getElementById ("identificationp").style.color = "red";
            document.getElementById ("identificationp").style.fontWeight = "bold";
            document.getElementById ("identification").style.backgroundColor = "white";
            var identificationerror = document.getElementById ("identificationp").innerText = "Identification must have between 7 and 8 numbers";
            identificationFlagError = 1;
        }   else if (identification.value % 1 !== 0) {
            document.getElementById ("identificationp").innerText = "Identification must be an integer";
            document.getElementById ("identificationp").style.visibility = "visible";
            document.getElementById ("identificationp").style.color = "red";
            document.getElementById ("identificationp").style.fontWeight = "bold";
            document.getElementById ("identification").style.backgroundColor = "white";
            var identificationerror = document.getElementById ("identificationp").innerText = "Identification must be an integer";
            identificationFlagError = 1;
        } else {
            document.getElementById ("identification").style.backgroundColor = "lightgreen";
            identificationFlagError = 0;
        }
    }

    //Hide Function
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

    fullname.onkeypress = function (e) {
        welcome.innerHTML = "Hello, " + " " + e.target.value;
    }
    button.addEventListener ("click", clickEvent)

    function clickEvent (e) {
        e.preventDefault ();

        if ( nameFlagError == 1 ) {
            arrayErrors [0] = "Error: " + fullnamep.innerText;
        }   else if ( nameFlagError == 0 ) {
                arrayErrors [0] = " Full name: " + fullname.value;
            }

        if ( emailFlagError == 0 ) {
            arrayErrors [1] = " Email: " + email.value;
        }   else if ( emailFlagError = 1)  {
            arrayErrors [1] = "Error: " + emailp.innerText;
            }

        if ( passwordFlagError == 1 ) {
            arrayErrors [2] = "Error: " +  passwordp.innerText;
        }   else if ( passwordFlagError == 0 ) {
            arrayErrors [2] = "Password: " + password.value;
            }

        if ( rpasswordFlagError == 1 ) {
            arrayErrors [3] = "Error: " +  rpasswordp.innerText;
        }   else if ( passwordFlagError == 0 ) {
            arrayErrors [3] = "Confirmed Password: " + rpassword.value;
            }

        if ( ageFlagError == 1 ) {
            arrayErrors [4] = "Error: " +  agep.innerText;
        }   else if ( ageFlagError == 0) {
            arrayErrors [4] = "Age: " + age.value;
            }

        if ( telephoneFlagError == 1 ) {
            arrayErrors [5] = "Error: " +  telephonep.innerText;
        }   else if ( telephoneFlagError == 0 ) {
            arrayErrors [5] = "Telephone: " + telephone.value;
            }

        if ( adressFlagError == 1) {
            arrayErrors [6] = "Error: " +  adressp.innerText;
        }   else if ( adressFlagError == 0 ) {
            arrayErrors [6] = "Adress: " + adress.value;
                }

        if ( cityFlagError == 1) {
            arrayErrors [7] = "Error: " +  cityp.innerText;
        }   else if ( cityFlagError == 0 ) {
            arrayErrors [7] = "City: " + city.value;
            }

        if ( postalFlagError == 1) {
            arrayErrors [8] = "Error: " + postalp.innerText;
        }   else if ( postalFlagError == 0) {
            arrayErrors [8] = "Postal: " + postal.value;
            }

        if ( identificationFlagError == 1 ) {
            arrayErrors [9] = "Error: " +  identificationp.innerText;
        }   else if ( identificationFlagError == 0 ){
            arrayErrors [9] = "Identification number: " + identification.value;
            }

        alert(arrayErrors.join('\n'))
        return false;
    }
}

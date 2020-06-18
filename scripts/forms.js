//Validation of contact form

function validateName() {
    var name = document.forms["contactForm"]["name"];

    //Validate for non-empty name field
    if (name.value == "") {
        document.getElementById("invalidname").style.display = "block"; //Display error message
        return false;
    } else {
        document.getElementById("invalidname").style.display = "none";
        return true;
    }
}

function validatePhone() {
    var phone = document.forms["contactForm"]["phone"];

    //Validate for non-empty phone number field
    if (phone.value == "") {
        document.getElementById("invalidphone").style.display = "block"; //Set display to block (visible)
        document.getElementById("invalidphone").innerHTML = 'Phone number is required.'; //Error message
        return false;
    } //Validate that phone number is number & 8-digits 
    else if (isNaN(phone.value) || phone.value.length != 8) {
        document.getElementById("invalidphone").style.display = "block";
        document.getElementById("invalidphone").innerHTML = 'Please enter a valid phone number.';
        return false;
    } else {
        document.getElementById("invalidphone").style.display = "none";
        return true;
    }
}

function validateEmail() {
    var email = document.forms["contactForm"]["mail"];
    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");

    //Validate for non-empty email field
    if (email.value == "") {
        document.getElementById("invalidemail").style.display = "block";
        document.getElementById("invalidemail").innerHTML = 'Email is required.';
        return false;
    }
    //Validate for valid email - must contain @ and .
    else if (atpos < 1 || (dotpos - atpos < 2) || dotpos + 2 > email.value.length) {
        document.getElementById("invalidemail").innerHTML = 'Please enter a valid email.';
        document.getElementById("invalidemail").style.display = "block";
        return false;
    } else {
        document.getElementById("invalidemail").style.display = "none";
        return true;
    }
}

function validateInfo() {
    var info = document.forms["contactForm"]["info"];

    //Validate info selection
    if (info.value == "") {
        document.getElementById("invalidinfo").style.display = "block";
        document.getElementById("invalidinfo").innerHTML = 'Please select at least 1.';
        return false;
    } else {
        document.getElementById("invalidinfo").style.display = "none";
        return true;
    }
}

function validateSubject() {
    var subject = document.forms["contactForm"]["subject"];

    //Validate subject selection
    if (subject.value == "") {
        document.getElementById("invalidsubj").style.display = "block";
        document.getElementById("invalidsubj").innerHTML = 'Please select at least 1.';
        return false;
    } else {
        document.getElementById("invalidsubj").style.display = "none";
        return true;
    }
}

function validateMessage() {
    var message = document.forms["contactForm"]["message"];

    //Validate for non-empty message field
    if (message.value == "") {
        document.getElementById("invalidmsg").innerHTML = 'Please enter your message.';
        document.getElementById("invalidmsg").style.display = "block";
        return false;
    } else {
        document.getElementById("invalidmsg").style.display = "none";
        return true;
    }
}

// //Validate when onsubmit
function validateForm() {

    //Store into variable
    var name = validateName();
    var phone = validatePhone();
    var email = validateEmail();
    var info = validateInfo();
    var subj = validateSubject();
    var msg = validateMessage();

    //Check for all validation
    if (name && phone && email && info && subj && msg != false) {
        return true;
    } else {
        return false;
    }
}
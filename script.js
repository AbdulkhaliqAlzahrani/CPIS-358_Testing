function validateSignUp(){

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name == ""){
        document.getElementById("fullname").style.border = "2px solid red";
        alert("Please enter your full name.");
        return false;
    } 
    else{
        document.getElementById("fullname").style.border = "2px solid green";
    }

    if (email == ""){
        document.getElementById("email").style.border = "2px solid red";
        alert("Please enter your email.");
        return false;
    }
    else{
        document.getElementById("email").style.border = "2px solid green";
    }

    if (password.length < 6){
        document.getElementById("password").style.border = "2px solid red";
        alert("Your password should be at least 6 characters long.");
        return false;
    }
    else{
        document.getElementById("password").style.border = "2px solid green";
    }

    return true;

} // End of validateSingUp()

function revealPromo() {
    var promoMessage = document.getElementById("promo-text");
    promoMessage.innerHTML = "Use code <strong>CRYSTAL20</strong> at checkout for 20% off!"
    promoMessage.style.color = "#003366";
    promoMessage.style.fontSize = "22px";
    promoMessage.style.backgroundColor = "#e6f2ff";
    promoMessage.style.padding = "10px";
    promoMessage.style.borderRadius = "5px";
} // End of revealPromo()

function hoverLogo(){
    document.getElementById("logo").src = "Images/Crystal Car Care logo2.png";
} // End of hoverLogo()

function resetLogo(){
    document.getElementById("logo").src = "Images/Crystal Car Care logo.png";
}
// JavaScript source code
function validateForm() {
    var username = document.forms["signUpForm"]["username"].value;
    var password = document.forms["signUpForm"]["password"].value;
    var email = document.forms["signUpForm"]["email"].value;
    var games = document.forms["signUpForm"]["games"].value;
    var team = document.forms["signUpForm"]["team"].value;
    var region = document.forms["signUpForm"]["region"].value;

    if (username == "" || password == "" || email == "" || games == "" || team == "" || region == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!email.includes("@")) {
        alert("Email must be a valid address");
        return false;
    }

    document.getElementById("output-message").innerHTML = "Sign up successful! Thank you for registering.";
    return false;
}
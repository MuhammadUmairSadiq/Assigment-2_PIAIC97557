var password = "umair@99880";

var InputPassword = prompt("Enter your Password");

if (InputPassword == "") {
    alert("Please enter your Password!");
} 
else {
    if (password == InputPassword) {
        alert("Correct Password!");
    }
    else {
        alert("Incorrect Password!");
    }
}    

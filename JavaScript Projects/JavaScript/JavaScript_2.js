function validateForm() {
    var w = document.forms["myJunkform"]["email"].value;
    var x = document.forms["myJunkform"]["fname"].value;
    var y = document.forms["myJunkform"]["lname"].value;
    var z = document.forms["myJunkform"]["ssn"].value;
    if (w == "") {
        alert("Your email must be entered");
        return false;     
    }   else if (x == "") {
        alert("Your first name must be entered");
        return false;
    }   else if (y == "") {
        alert("Your last name must be entered");
        return false;
    }   else if (z == "") {
        alert("Your social security number must be entered");
        return false;
    }
}


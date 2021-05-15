function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("First name must be filled out")
    } else if (y == "") {
        alert("Last name must be filled out")
    } else if (y == "") {
        alert("Email must be filled out")
    }
}
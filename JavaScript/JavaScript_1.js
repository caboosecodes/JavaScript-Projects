function sidesFunction() {
    var output;
    var sides = document.getElementById("sides").value //grabs the value from the input on the html file
    var sidesString = " is a great choice, enjoy your meal!"
    switch(sides) { //switch statement
        case "Fries":
            output = "Fries" + sidesString;
        break;
        case "Baked potatoes":
            output = "Baked poatoes" + sidesString;
        break;
        case "Vegetables":
            output = "Vegetables" + sidesString;
        break;
        case "Garden salad":
            output = "Garden salad" + sidesString;
        break;
        case "Caesar salad":
            output = "Caesar salad" + sidesString;
        break;
        default: 
        output = "Please enter a side exactly as written in the list above." // if none of the input match the elements in the list then this will be displayed
    }
    document.getElementById("sidesOutput").innerHTML = output;
}

//getElementsByClassName()
function elo() {
    var x = document.getElementsByClassName("telephone");
    x[0].innerHTML = "Hello, how are you?"; //[0] means that the string will displayed on the first element with the class "telephone"
}
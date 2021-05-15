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

//canvas
function hi() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); //creates "ConvasRenderingContext2D" object that represents a 2d rendering context
    var img = document.getElementById("ralph");
    ctx.drawImage(img, -20, 0); //img at x, y coordinates
}

//gradient
var c = document.getElementById("grad"); 
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(100, 150, 170, 200); //the gradient of the collor; first 2 numbers are the start point of the gradient (x,y), the last 2 nums. are the endpoint of the gradient.
grd.addColorStop(0, "purple"); //starts purple
grd.addColorStop(1, "red"); //ends red

ctx.fillStyle = grd;
ctx.fillRect(45, 81, 150, 100); //position within canvas

function Call_Loop() {
    var number = "";
    var x = 5;
    while (x > 0) { //while the conditional is true, the block of code will be executed
        number += "<br>" + x;
        x --; //decrement
    }
    document.getElementById("Loop").innerHTML = number;
}

function length()   {
    x = "this variable is a string";
    y = x.length; // .length returns the number of characters in a string
    document.getElementById("string").innerHTML = y;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Cello", "Xylophone"]; //a list or an array
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //while the variable Y is less than the number of ELEMENTS in the ARRAY Instruments, increment Y
        Content += Instruments[Y] + "<br>"; //adds the value of the element at the index of Y
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var groceryList = [];
    groceryList[0] = "milk"; //places the string "milk" at the index of 0 in the list (array)
    groceryList[1] = "eggs";
    groceryList[2] = "flour";
    groceryList[3] = "sugar";
    document.getElementById("Array").innerHTML = "I need " + groceryList[1] + " from the grocery store"; //groceryList[1] is the value at index of 1: "eggs"
}

function constant_function() {
    const cake = {type:"chiffon", flavor:"orange", topping:"frosting"}; //declares constant
    cake.flavor = "lemon"; // changes flavor
    cake.servings = "10"; //has to be a string, you can't have different data types in an array
    document.getElementById("Constant").innerHTML = "my favorite type of cake to make is a " + cake.flavor + " " 
    + cake.type + "cake, one recipe makes " + cake.servings + " servings.";
}

x = 25;
document.getElementById("x").innerHTML = x; //can't use the document.write() method because "defer is in the script element"
{
    let x = 182; //let declares the variable x = 182 only within the block (the curly brackets)
    document.getElementById("x2").innerHTML = x;
}
document.getElementById("x3"). innerHTML = x;

function addTwo(a, b) {
    return a + b; //return stops the execution of the function and returns the value of the function
}
document.getElementById("return").innerHTML = addTwo(5, 6); //writes the value of 5 + 6

let guitar = { //this variable is only accessible through this block of code
    type: "electric ", //creating the properties
    manufacturer: "Fender ",
    body: "Telecaster ",
    year: "2021 ",
    color: "seafoam green ",
    description: function() {
        return "this guitar is a " + guitar.year + guitar.type + guitar.color + guitar.manufacturer + guitar.body;
        } 

};
document.getElementById("description").innerHTML = guitar.description();
 
var x;
var text = "";
for (x = 0; x < 7; x++) { // as long as the variable x < 7 execute the code block and increment x
    if (x == 4) {break;} //breaks (stops executing) the loop when x equals 4
    text += "the number x " + x + "<br>";
}
document.getElementById("break").innerHTML = text;

var x;
var text = "";
for (x = 0; x < 7; x++) { // as long as the variable x < 7 execute the code block and increment x
    if (x == 4) {continue;} //continue skips the loop when x equals 4 and continues with the rest of the loop
    text += "the number x " + x + "<br>";
}
document.getElementById("continue").innerHTML = text;
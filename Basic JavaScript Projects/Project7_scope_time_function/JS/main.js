var x = 45 // global variable
function addTwo() {
    document.write("45 plus 2 is: " + (x + 2));
}
addTwo();

document.write("<br>");

function localFunction() {
    var y = 10;
    document.write("65 minus 10 is: " + (65 - y));
}

function noFunction() {
    var y = 50; // fixed undefined variable
    document.write( "10 plus 50 is: " + (10 + y));
}

localFunction();

document.write("<br>");

noFunction(); // will not display because y is not defined within the function or globally

//use console.log() to debug the above code in chrome dev tools
function consoleFunction() {
    var y = 10;
    console.log(65 - y);
}

function noConsole() {
    console.log(10 + y); //chrome dev tools said y is not defined
}
consoleFunction();
noConsole();

// Dategethours method assignment

function hello() {
    if (new Date().getHours() < 18) { //conditional statement; if the statement is true then "hello, how are you?" will be displayed to the element class "hours"
    document.getElementById("hours").innerHTML = "Hello, how are you?";
    }
}

//my own if statement

function valentinesDay() {
    if (new Date().getMonth() > 2) {
        document.getElementById("valentines").innerHTML = "Valentines day has passed";
    }
}

// Else Statment

function legalAge() {
    age = document.getElementById("drinkingAge").value; // the age entered by user
    if (age >= 21) {
        drink = "You are old enough to purchase an alcoholic beverage" //if true then this message displays to user
    }
    else {
        drink = "You are not old enough to purchase an alcohlic beverage"   //if false thne this message display to user
    }
    document.getElementById("legal").innerHTML = drink; //
}

// Else If Statement

function Time_fuction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) { 
        reply = "Good Morning"; 
    }
    else if (time >= 12 == time < 18) {
        reply = "Good afternoon";
    }
    else {
        reply = "Good Night";
    }
    document.getElementById("Time_of_Day").innerHTML = reply;
}
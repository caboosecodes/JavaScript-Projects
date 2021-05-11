function addition() {
    document.getElementById("Math").innerHTML = 5 + 5; // function named addition, adds 5+5
}

function subtraction() {
    document.getElementById("Math2").innerHTML = 7 - 3; //function named subtraction, subtracts 7-3
}

function multiplication()   {
    var simpleMath = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simpleMath; //function multiplies 6*8
}

function division() {
    var complexMath = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + complexMath; //function divides 48 by 6
}

function multipleOperations() {
    var multiple = ((2+2)*5/2)*3;
    document.getElementById("Math5").innerHTML = "two plus two multiplied by five divided by two and then mutiplied by three is " + multiple;
} //function that uses multiple operators

function modulus()  {
    var remainder = 32 % 7;
    document.getElementById("Math6").innerHTML = "The Remainder from 32 divided by 7 is " + remainder; //function uses the modulus to find the remainder
}

function unary()  {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x; //this function has a negation operator and one operand, the number 10
}

function increment() {
    var x = 10;
    x++;
    document.getElementById("Math8").innerHTML = "increment from 10 is " + x; //increments by one step up
}

function decrement() {
    var x = 10;
    x--;
    document.getElementById("Math9").innerHTML = "decrement from 10 is " + x; //decrements by one step down
}

function random() {
    var x = Math.random() * 100;
    document.getElementById("Math10").innerHTML = "random number: " + x; //generate a random number between 0 and 100
}

function mathObject() {
    var x = Math.sqrt(64);
    document.getElementById("Math11").innerHTML = "square root of 64 is " + x; //uses math object and the sqrt method
}

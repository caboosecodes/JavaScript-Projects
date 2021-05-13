function sentenceAdd()  {
    var pt1 = "This sentence ";
    var pt2 = "is put together by the";
    var pt3 = " concat() method in Javascript.";
    var sen = pt1.concat(pt2, pt3); //concat adds the string to the end of each other starting with pt1
    document.getElementById("sentence").innerHTML = sen;
}

function sentenceSlice() {
    var sentence = "Testing out the slice function method in Javascript"; //index 0 is the letter T
    var word = sentence.slice(15,23); // excludes the letter at the 23rd index
    document.getElementById("slice").innerHTML = word; //displays "slice f"
}

function bigLetters() {
    var little = document.getElementById("lower").innerHTML; //makes variable with the text from within the elements with the id "lower"
    document.getElementById("lower").innerHTML = little.toUpperCase(); //capitalize
}

function where() {
    var sen = "Hello, how are you doing?"; //I wrote the string from the html doc instead of "document.getElementById("search").innerHTML" 
    //because the result would replace the sentence with the index position of "you"
    document.getElementById("search").innerHTML = sen.search("you"); //returns 15
}

function numString() {
    var x = 79;
    document.getElementById("string").innerHTML = x.toString(); //displays 79 as a string
    //toString() method can output numbers from base 2 to 32
    //select the number base and place between the () in the method
}

function pFunction() {
    var x = 21.258741258542584256985852;
    document.getElementById("five").innerHTML = x.toPrecision(5); //rounds up
}

function places() {
    var x = 5.24865258965;
    document.getElementById("three").innerHTML = x.toFixed(3); //converts num to string also rounds up
}

function num() {
    var x = 45687152;
    document.getElementById("number").innerHTML = x.valueOf(); // returns a number as a number
}
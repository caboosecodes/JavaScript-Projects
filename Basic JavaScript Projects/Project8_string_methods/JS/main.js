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
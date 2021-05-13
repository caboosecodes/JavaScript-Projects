function sentenceAdd()  {
    var pt1 = "This sentence ";
    var pt2 = "is put together by the";
    var pt3 = " concat() method in Javascript.";
    var sen = pt1.concat(pt2, pt3);
    document.getElementById("sentence").innerHTML = sen;
}






function sentenceSlice() {
    var sentence = "Testing out the slice function method in Javascript"; //index 0 is the letter T
    var word = sentence.slice(15,23); // excludes the letter at the 23th index
    document.getElementById("slice").innerHTML = word; //displays "slice f"
}
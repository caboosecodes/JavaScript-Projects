function countdown() {
    var seconds = document.getElementById("seconds").value; //number of seconds inputed by the user

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds; 
        setTimeout(tick, 1000);//the program is pausing for 1000 miliseconds(1 second)
    if (seconds == -1) {
        alert("Time's up");
    }
        }
    tick();
}

// SLIDESHOW SECTION

var slideIndex = 1; //global variable
showSlides(slideIndex);

// next and previous button controls
function plusSlides(n) {
    showSlides(slideIndex += n); //increments the slideIndex variable by n
}

//image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slideIndex; i++) { //for statement; it loops through the block of code; if i is greaters than slide index then increment i
        slides[i].style.display = "none"; //[] mean index of an array, so [2] is the INDEX position of 2
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //makes it so the other images do not show up
    dots[slideIndex-1].className += " active"; //makes it so the other dots do not have .active styling
}
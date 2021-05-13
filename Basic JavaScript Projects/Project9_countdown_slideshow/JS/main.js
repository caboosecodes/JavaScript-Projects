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


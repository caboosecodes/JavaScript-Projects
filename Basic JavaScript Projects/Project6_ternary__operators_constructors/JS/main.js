function rideFunction() {
    var height, canRide; //variables
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short":"You are tall enough"; // tenary operators
    document.getElementById("ride").innerHTML = canRide + " to ride"; //writes to the html page
}

function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age >= 18) ? "You are old enough":"You are not old enough"; // tenary operators
    document.getElementById("vote").innerHTML = canVote + " to vote."
}

function computer(cpu, gpu, mobo) {
    this.computer_cpu = cpu;
    this.computer_gpu = gpu;
    this.computer_mobo = mobo;
}

var Chad = new computer("AMD Ryzen 9 5950X", "Asus 3090 TUF", "Asus ROG Crosshair VIII Hero");

function myFunction()   {
    document.getElementById("new_and_this").innerHTML = "Chad has a gaming pc with a "
    + Chad.computer_cpu + " cpu, " + Chad.computer_gpu + " gpu, and a " + 
    Chad.computer_mobo + " motherboard.";
}

function myFunction()   {
    document.getElementById("nested_function").innerHTML = decrement();
    function decrement() {
        var start = 11
        function down() {start -= 1;}
        down();
        return start;
    }
}
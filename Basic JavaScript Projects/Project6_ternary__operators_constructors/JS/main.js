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
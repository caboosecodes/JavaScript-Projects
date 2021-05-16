function showDetails(guitar) {
    var guitarType = guitar.getAttribute("data-guitar-type");
    alert("the " + guitar.innerHTML + " is manufactured by " + guitarType + ".");
}
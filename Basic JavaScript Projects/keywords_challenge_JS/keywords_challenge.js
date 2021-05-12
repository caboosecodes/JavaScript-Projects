function vehicle(Make, Model, Year, Color) {
    this.vehichle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2020, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 2020, "Mustar");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.vehicle_color + "-colored "
    + Erik.vehicle_model + " manufactured in " + Erik.vehicle_year;
}
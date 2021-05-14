function sidesFunction() {
    var output;
    var sides = document.getElementById("sides").value
    var sidesString = " is a great choice, enjoy your meal!"
    switch(sides) {
        case "Fries":
            output = "Fries" + sidesString;
        break;
        case "Baked potatoes":
            output = "Baked poatoes" + sidesString;
        break;
        case "Vegetables":
            output = "Vegetables" + sidesString;
        break;
        case "Garden salad":
            output = "Garden salad" + sidesString;
        break;
        case "Caesar salad":
            output = "Caesar salad" + sidesString;
        break;
        default:
        output = "Please enter a side exactly as written in the list above."
    }
    document.getElementById("sidesOutput").innerHTML = output;
}
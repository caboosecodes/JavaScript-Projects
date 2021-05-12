function myDictionary() { //making a dictionary
    var animal = {
        species:"Cat",
        color:"Black",
        breed:"Maine Coon",
        age: 2,
        sound:"Meow",
    };
    document.getElementById("Dictionary").innerHTML = animal.breed;
    
}

function doubleDictionary() { //dictionary to see what happends when you double a key value
    var animal = {
        species:"Cat",
        color:"Black",
        breed:"Maine Coon",
        age: 2,
        sound:"Meow",
        sound:"hiss",
    };
    delete animal.sound; //deleting the sound value
    document.getElementById("Dictionary2").innerHTML = animal.sound;
}

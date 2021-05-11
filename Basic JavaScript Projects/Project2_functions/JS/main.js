function simonGarfunkel() {
    var lyric = "Hello darkness my old friend";
    var colorLyric = lyric.fontcolor("red");
    document.getElementById("talk").innerHTML = colorLyric; //function with two variables, fontcolor method, and "talk" id 
}

function theBeatles()   {
    var sun = "Here comes the sun,"
    sun += " doo da doo doo"
    document.getElementById("lyric").innerHTML = sun; //function with a concatenated variable, "lyric" id
}

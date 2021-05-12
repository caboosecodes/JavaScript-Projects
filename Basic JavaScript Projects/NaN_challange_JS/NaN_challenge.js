function test1() {
    document.getElementById("true").innerHTML = isNaN("this is a string");
}

function test2()    {
    document.getElementById("false").innerHTML = isNaN(75);
}

document.write("<br>");
document.write(2E600);// this will display above the previous functions because this is not tied to any html element
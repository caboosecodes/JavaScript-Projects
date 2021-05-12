document.write(typeof(5)); //typeof() lists the the type of data
document.write("<br>");
document.write(typeof("hello"));
document.write("<br>");
document.write("100" + 6); //displays the string and number together as 1006
document.write("<br>");
document.write(63E500); //number is bigger than javascript can handle so display infinity
document.write("<br>");
document.write(-32E400); // negative infinity
document.write("<br>");
document.write(6 >= 6); // true/false operators (boolean)
document.write("<br>");
document.write(5 > 6);
document.write("<br>");
console.log(5*5); //does not display on the webpage but in the console
document.write("<br>");
console.log(10 < 5); // boolean operator in console
document.write(15/5 == 3); // equals to operator
document.write("<br>");
document.write(20 == 2*12); 
document.write("<br>");
a = 10 //variables
b = 10
c = 15
d = "larry"
e = "dale"
f = "10"
g = 5
document.write(a === b); // "===" compares DATA TYPE and DATA VALUE
document.write("<br>");
document.write(a === d);
document.write("<br>");
document.write(a === f);
document.write("<br>");
document.write(d === e);
document.write("<br>");
document.write(c > a && a > g); // "&&" represents AND in boolean logic
document.write("<br>");
document.write(a > c && a > g);
document.write("<br>");
document.write(a > c || a > g); // "||" represents AND in boolean logic
document.write("<br>");
document.write(a > c || a < g);
document.write("<br>");
document.write(!(5 > 3)); // "!()" represents NOT in boolean logic
document.write("<br>");
document.write(!(3 > 5));
document.write(typeof 1);

function NaN_1() {
    document.getElementById("p_1").innerHTML = isNaN("This is a string");
}

function NaN_2() {
    document.getElementById("p_2").innerHTML = isNaN(187);
}

document.write(2E310);

document.write(-3E310);

// ---------- Boolean Logic ------------------

document.write(2E310 > -3E310);

document.write(12 > 1258);

console.log(50+25);

document.write("115" + 30);

console.log(50 < 25);

document.write(14 == 7+7);  // == is comparing two values and returning true or false

document.write(14 == 7+6);

var v = 11
var w = 10
var x = 10
var y = "ten"
var z = "10"

document.write(w===x);  // === is comparing both data types AND values then returning true or false
document.write(w===y);
document.write(w===z);
document.write(w===v);

document.write(5>2 && 5>3);  // && is the Boolean AND.  Both sets need to be true to receive a true return.
document.write(5>6 && 5>3);

document.write(5>6 || 5>3);  // || is the Boolean OR.  One set needs to be true to receive a true return.
document.write(5>6 || 5<3);


function NOT_1() {         // ! is the Boolean NOT.  It will give the opposite result of a true false.     
    document.getElementById("Not_1").innerHTML=!(50>1);
}

function NOT_2() {
    document.getElementById("Not_2").innerHTML=!(50<1);
}


var x = 5;
var z = 5;

function Basic_1() {
    var y = 2;
    document.write(x + y);
}

function wrong_1() {         //corrected!
    document.write(x + z);
}

function late() {
    if (new Date().getHours() > 8) {
    document.getElementById("bad").innerHTML = "You\'re fired!";
    }
    else {
    document.getElementById("bad").innerHTML = "Safe!";
    }
}

function age() {
    var Age;
    Age = document.getElementById("Age").value;
    if (Age >= 10) {
    document.getElementById("Cheese").innerHTML = "You are indeed old enough to eat off the ceremonial block.";
    }
    else {
    document.getElementById("Cheese").innerHTML = "Remove thy grubby paws from this holy church of cheese!  Thou ist far too young to accept thine blessing!";
    }
}   

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function Call_Loop() {
    var Digit = "";
    var X = 1
    var Y = document.getElementById("user_input").value;
    while (X <= Y) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function StringLength() {
    var sentence = "This is my string variable.";
    var length = sentence.length;
    document.getElementById("stringlength").innerHTML = length;
}

var animals = ["Aarvark", "Balleen Whale", "Cougar", "Dolphin", "Echidna", "Falcon", "Gypsy Moth", "Humming Bird"];
var zoo = "";
var X;
function for_loop() {
    for (X = 0; X < animals.length; X++) {
        zoo += animals[X] + "<br>";
    }
    document.getElementById("List_of_animals").innerHTML = zoo;
}

function array_Function() {
    var Bigfoot_sighting = []
    Bigfoot_sighting[0] = "near Astoria";
    Bigfoot_sighting[1] = "south of Vernonia";
    Bigfoot_sighting[2] = "slopes of Mt. St. Helens";
    Bigfoot_sighting[3] = "soldier Mountain";
    document.getElementById("Array").innerHTML = "This location is " + Bigfoot_sighting[1] + "."
}

function constant_function() {
    const ship = {type:"sailboat", masts:"two", color:"red and white"}
    ship.hull_length = "28 ft";
    ship.color = "white";
    document.getElementById("Constant").innerHTML = "My ship is a " + ship.type + " with " + ship.masts + " masts.  It is " + ship.hull_length + " long and is " + ship.color + ".";
}

function let_function() {
    var car = "red";
    document.getElementById("let_1").innerHTML = car;
    {
    let car = "blue";
    document.getElementById("let_2").innerHTML = car;
    }
}

function return_function() {
    var x = 100;
    var m = 25;
    var j = 2;
    return x/m*2;
}
document.getElementById("return_1").innerHTML = return_function()

let rock = {
    name: "Gneiss",
    type: "metamorphic",
    composition: "quartz, feldspar, and mica",
    original_rock: "granite and gabbro",
    identifier : function() {
        return "This rock is " + this.name + ", which is a " + this.type + " rock made up of " + this.composition + ". It is metamorphosed from " + this.original_rock + ".";
    }
}
document.getElementById("rock_object").innerHTML = rock.identifier();

function break_continue() {
    var text = "";
    var m;
    for (m = 0; m < 10; m++) {
        if (m === 5) {
            continue;
        }   
        if (m === 9) {
            break;
        }
        text += m + "<br>";
    }
    document.getElementById("Break_Continue").innerHTML = text;
}

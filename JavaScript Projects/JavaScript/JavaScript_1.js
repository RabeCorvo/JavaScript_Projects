function Aircraft_Function() {
    var aircraft_Output;
    var aircraft = document.getElementById("Aircraft").value;
    var aircraft_string = " is a mighty choice!";
    switch(aircraft) {
        case "P-40":
            aircraft_Output = "The P-40 Warhawk" + aircraft_string;
        break;
        case "F6F":
            aircraft_Output = "The F6F Wildcat" + aircraft_string;
        break;
        case "P-51":
            aircraft_Output = "The P-51 Mustang" + aircraft_string;
        break;
        case "P-63":
            aircraft_Output = "The P-63 Kingcobra" + aircraft_string;
        break;
        case "F4U":
            aircraft_Output = "The F4U Corsair" + aircraft_string;
        break;
        case "P-38":
            aircraft_Output = "The P-38 Lightning" + aircraft_string;
        break;
        default:
        aircraft_Output = "Please enter an aircraft exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = aircraft_Output;
}

function magic() {
    var A = document.getElementsByClassName("Illusion");
    A[1].innerHTML = "Tomato"
}

var c = document.getElementById("jsCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "Green");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
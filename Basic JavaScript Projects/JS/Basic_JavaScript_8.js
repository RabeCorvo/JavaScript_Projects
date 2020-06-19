function samurai() {
    var words = "I am a master of the sword" 
    var slice = words.slice(0,13);
    document.getElementById("Sentence").innerHTML = slice;
}

function Uppercase() {
    var help = "Please help."
    var HELP = help.toUpperCase();
    document.getElementById("Call_loud").innerHTML = HELP;
}

function search() {
    var test = "Hello there big guy."
    var answer = test.search("big");
    document.getElementById("search").innerHTML = answer;
}

function string_num() {
    var x = 1942;
    document.getElementById("Strings").innerHTML = x.toString();
}

function On_Target() {
    var y = 1459.2564;
    document.getElementById("Precise").innerHTML = y.toPrecision(6);
}

function To_fixed() {
    var z = 1459.2564
    document.getElementById("tofixed").innerHTML = z.toFixed(3);
}

function primitive() {
    var a = 1459.2564
    var b = a.valueOf();
    document.getElementById("ancient").innerHTML = b;
}

function All_this() {
    var t_1 = "Teenage ";
    var t_2 = "Mutant ";
    var t_3 = "Ninja ";
    var t_4 = "Badgers";
    var logo = t_1.concat(t_2, t_3, t_4);
    document.getElementById("team_name").innerHTML = logo;
}
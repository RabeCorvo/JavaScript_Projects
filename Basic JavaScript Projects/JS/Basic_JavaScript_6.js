function War_Function() {
    var Height, Can_war;
    Height = document.getElementById("Height").value;
    Can_war = (Height < 52) ? "You are too short":"Grab your guns son, you are going";
    document.getElementById("War").innerHTML= Can_war + " to war!";
}

function vote() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You can";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Sam = new Vehicle("GM", "Hummer H3", 2007, "Grey");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(Age, Eyecolor, Haircolor, Sex) {
    this.Person_Age = Age;
    this.Person_Eyecolor = Eyecolor;
    this.Person_Haircolor = Haircolor;
    this.Person_Sex = Sex;
}
var Tom = new Person(44, "blue", "bald", "male");
var Sally = new Person(39, "hazel", "black", "female");
var Sam = new Person(37, "green", "brown", "male");
var Cindy = new Person(29, "blue", "blonde", "female");
function Client() {
    document.getElementById("New_and_This").innerHTML=
    "Sam is a " + Sam.Person_Age + " year old " + Sam.Person_Sex + " with " + Sam.Person_Haircolor + 
    " hair and " + Sam.Person_Eyecolor + " eyes."
}

function house(stories, bedrooms, bathrooms, garage) {
    this.house_stories = stories;
    this.house_bedrooms = bedrooms;
    this.house_bathrooms = bathrooms;
    this.house_garage = garage;
}

function product_Function() {
    document.getElementById("Nested_Function").innerHTML = Product();
    function Product() {
        var Starting_point = 10;
        function Times_Three() {Starting_point *= 3;}
        Times_Three();
        return Starting_point;
    }
}

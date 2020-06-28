function displayType (starfighter) {
    var starfighterType = starfighter.getAttribute("data-starfighter_type");
    alert("The Alliance used the " + starfighter.innerHTML + " as their primary " + starfighterType + "!");
}
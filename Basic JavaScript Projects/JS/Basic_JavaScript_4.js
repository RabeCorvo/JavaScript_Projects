function Alliance_Starships() {
    var Fighter = {
        Class: "Bomber",
        Speed: 80,
        Hull: "Heavy",
        Lasers: 2,
        Ions: 2,
        Torpedoes: 6,
    };
    delete Fighter.Speed;
    document.getElementById("Dictionary").innerHTML = Fighter.Speed;
}
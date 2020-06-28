// function myFunction() {
//    var Dog = "Gus"
//    document.getElementById("pet").innerHTML = "I have one dog and his name is " + Dog + "!";
//}

var Dog;
myFunction = (val) => "I have one dog and his name is " + val + "!" ;
document.getElementById('pet').innerHTML = myFunction("Gus");

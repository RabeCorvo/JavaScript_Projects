function math_1() {         //Addtion
    var apples = 0 + 4;
    document.getElementById("Collect").innerHTML = "You bought " + apples + " apples!";
}

function math_2() {         //Subtraction
    var monkey = 4-3;
    document.getElementById("monkeyThief").innerHTML = "That monkey stole your apples!  You only have " + monkey + " left!";
}

function math_3() {         //Multiplication
    var family = 2*5;
    document.getElementById("reinforcements").innerHTML = family + " more of the monkey\'s family surround you!";
}

function math_4() {         //Division
    var kungfu = 10/5;
    document.getElementById("monkeyFight").innerHTML = "Are you crazy?!  You get your butt kicked and only have " + kungfu + " teeth left in your head.";
}

function math_5() {         //Multiple Operations
    var knockout = (3+2)*2/2-5;
    document.getElementById("Revenge").innerHTML = "Victory! " + knockout + " monkeys remain standing."
}

function math_6() {         //Modulus Operator
    var leftover = 8 % 3;
    document.getElementById("fruit").innerHTML = "You find " + leftover + " apples."
}

function math_7() {         //Negation Operator
    var food = -1;
    document.getElementById("throw").innerHTML = "You hurl one of your apples at the monkey and it smashes right into its face!  You now have " + -food + " apple left."
}

var findapple = 0           //Increment Operator
findapple++;
document.write(findapple);

var eatapple = 1            //Decrement Operator
eatapple--;
document.write(eatapple);

function experience() {     //Random number & Math Object & Math Object Method
    var xp = (Math.random()*100);
    var exp = Math.round(xp)
    document.getElementById("levelup").innerHTML = "You gain " + exp +" experience points!"
}
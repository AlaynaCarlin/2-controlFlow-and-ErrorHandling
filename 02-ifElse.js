let elevatorUp = true;
let elevatorDown = true;
let elevatorBroken = true;
let elevatorStuchWhileWeAreOnIt = true;
let elevatorNumber = 13;

if (elevatorUp = true){
    console.log("Going up!");
} else{
    console.log("Going down");
}

if (elevatorBroken = true) {
    console.log("Bummer. Let's take the stairs.");
} else {
    console.log("Which floor?");
}

if(elevatorStuchWhileWeAreOnIt){
    console.log('Oh no! We are stuck!');
} else {
    console.log('This elevator is fast.')
}

if (elevatorBroken && elevatorDown){
    console.log("I hope this thing doesn't statr lfying down!");
} else {
    console.log("How long are you in town for?");
}

if (elevatorBroken || elevatorStuchWhileWeAreOnIt){
    console.log("Hi Bob, this is Bob with maintenance. How can I help?");
}

if(elevatorNumber === 13 && elevatorStuchWhileWeAreOnIt){
     console.log("This is not our lucky day!");
}

//mine
let coffeeBrewing = true;
let coffeeMade = true;
let coffeeGone = true;

if(coffeeBrewing){
    console.log("It'll be ready in five!");
} else {
    console.log("Why not?! Go make some!")
}

if(coffeeMade){
    console.log("ready for coffee!");
} else {
    console.log("Need Coffee!")
}

if(coffeeGone){
    console.log("Where did all the coffee go? *looks at mug*");
} else {
    console.log("I love coffee");
}

//challenge 2
let bankAccount = 7000;
let debt = 4200;
let difference = bankAccount-debt;

console.log("I ahve $" + bankAccount, "in my bank account, and I am $" + debt, "in debt");

if (difference > 700){
    console.log("I have some extra money. I should pay off my debt. I'll have $" + difference, "leftover.");
} else {
    console.log("It probably isn't a good time to pay off my debt.");
}


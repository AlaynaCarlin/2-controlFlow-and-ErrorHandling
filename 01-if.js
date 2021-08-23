/*
IF CONDITIONALS
*/

let isOn = true;
if (isOn) {
    console.log('The light is on');
} 

let weather = 65;
if (weather < 70){
    console.log('wear a jacket');
}

let string = 'Alayna';
if (string === 'Alayna' || false){
    console.log('if statements and conditionals are powerful!');
}

//if else
 weather = 75;
if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary');
}

// you can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log('this weather is amazing!');
} else {
    console.log('either the temperature is cool, the variable is not a string, or both');
}


let roomClean = true;
if(roomClean){
    console.log('I can take the Ferrari out!');
}

let imSleepy = true;
if(imSleepy){
    console.log('GO TO BED!!!');
}

let fanOn = true;
if(fanOn){
    console.log('*hair blows*');
}

let roomTemp = 80;
if(roomTemp => 75){
    console.log('Turn the fan on!');
}

let workTime = 3;
if(workTime = 3){
    console.log('quitting time!');
}

let friendRespond = true;
if(friendRespond){
    console.log('We can hang out tomorrow!');
}
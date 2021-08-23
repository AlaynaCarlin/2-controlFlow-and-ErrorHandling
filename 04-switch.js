/*
SWITCH STATEMENTS
*/ 
let friend = 'Ken';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when will you bring sour dough bread for me?');
       break;
    case 'Ken':
        console.log('Hey Ken, do you own a wolf in your backyard?');
        break;
    case 'Eli':
        console.log('Hey Eli, how many magic cards do you own?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a boolean');       
}
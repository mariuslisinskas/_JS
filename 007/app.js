function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// BRAKE
for(var i = 0; i < 5; i++){
    
    if(i === 3){
        break;
    }

    console.log(i);
}

console.log("The End");

// CONTINUE
for(var i = 0; i < 5; i++){
    
    if(i === 3){
        continue;
    }

    console.log(i);
}

console.log("The End");

// SWITCH
var A = 6;

if(A === 6){
    console.log('A == 6');
}
else if(A === 8){
    console.log('A == 8');
}
else if(A === 10){
    console.log('A == 10');
}
else{
    console.log('Nei 6, nei 8, nei 10');
}


switch(A){
    case 6: console.log('A == 6');
    break;

    case 8: console.log('A == 8');
    break;
    
    case 10: console.log('A == 10');
    break;
    
    default: console.log('Nei 6, nei 8, nei 10');
    
}

// OMNIVA
// S,M,L,XL

var pack = 'M';

switch(pack){
    case 'S': console.log('galim deti i S');break;
    case 'M': console.log('galim deti i M');break;
    case 'L': console.log('galim deti i L');break;
    default: console.log('galim deti i XL');

}
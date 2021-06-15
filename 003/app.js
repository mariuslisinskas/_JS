function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// uzduotis 1
var animal;

if(rand(0, 1) === 0){
    animal = 'Dramblys'
}
else {
    animal = 'Asilas'
}
console.log(animal);
// lygiai tas pats kas virsuje tik trumpiau>>
var animal2 = rand(0, 1) === 0 ? 'Dramblys' : 'Asilas';
console.log(animal);

// uzduotis 2
var animal;

if(rand(0, 2) === 0){
    animal = 'Dramblys'
}
else {
    if(rand(0, 1) === 0){
        animal = 'Krokodilas'
    }
    else{
        animal = 'Asilas'
    }
}
console.log(animal);
// lygiai taip pat
var animal2 = rand(0, 2) === 0 ? 'Dramblys' : (rand(0, 1) === 0 ? 'Krokodilas' : 'Asilas');
console.log(animal);


// uzduotis 3 ??
var bird;
var now = bird;

// var now = (typeof bird === 'undefined') ? 'zylute' : bird;
// atsarginis priskyrimas jei nezinom undefined or null kas yra bird
var now = bird ?? 'zylute';

console.log('now', now);

// uzduotis 4 ARBA ||
// IR &&

console.log('true || true', true || true);
console.log('false || true', false || true);
console.log('true || false', true || false);
console.log('false || false', false || false);

// jei viena is salygu yra true tada visas atsakymas konsoleje yra true galima kelti i if vie dvi tris ir tt salygu
console.log(2 > 5 || 7 > 5 || 7 < 15);

console.log('true && true', true && true);
console.log('false && true', false && true);
console.log('true && false', true && false);
console.log('false && false', false && false);

// jei visos salygos yra true tada visas atsakymas konsoleje yra true galima kelti i if vie dvi tris ir tt salygu
// jei viena is salygu ne tada false
console.log(2 < 5 && 7 > 5 && 7 < 15);

// uzduotis 5

var a1 = null;
var a2 = 3;
var a3 = 0;

var end = a1 || a2 || a3; //einam iki pirmo true rezultato ir eina iki galo jei visoso false ir priskiria paskutine
var end2 = a1 && a2 && a3; // gaudo pirma false reiksme ir priskiria jei jos nera paskutine reiksme eileje
var end3 = a1 ?? a2 ?? a3; // iesko pirmos reiksmes kas nera null arba undefined - nulis ir tuscias stringas tinka. Jei nera null undef pasilieka prie pirmo

console.log(end);
console.log(end2);
console.log(end3);
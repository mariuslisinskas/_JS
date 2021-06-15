//mokomes
console.log('Gera diena');
console.log('Labas');

if(2 > 3){
    console.log('Tai tiesa');
    console.log('Bla bla');

}

else{
    console.log('Tai yra');
    console.log('Bur bur bur');
}

console.log('Labanakt');

// Uzduotis Sukurti 2 kintamuosius. Vieno vardas one, kito two.
// Priskirti jiems bet kokius skaicius.
// Parasyti if else kuris consoleje atspausdintu one yra didesnis arba two yra didesnis priklausomai nuo skaiciu.

var one = 5;
var two = 5;

if(one > two){
    console.log('One more than two');
}
else if( one < 6){
    console.log('MAN AISKU!!!')
}
else if(one == two){
    console.log('One is equal to two')
}
else{
    console.log('Two is more than one');
}

//else if naudojamas kiek nori kartu
if(1 > 2){
    console.log('Kairen');
}
else if(1 > 2){
    console.log('Tiesiai');
}
else if(1 < 2){
    console.log('Kitas tiesiai');
}

else{
    console.log('Desinen');
}
// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :

// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

var name = 'Marius';
var surname = 'Lisinskas';
var birth = 1987;
var date = 2021;
var age = (date - birth);

if(age <= 9){
    console.log( `"Aš esu ${name} ${surname}. Man yra ${age} metai."`);
}
else if(age >= 21){
    console.log( `"Aš esu ${name} ${surname}. Man yra ${age} metai."`);
}
else{
    console.log( `"Aš esu ${name} ${surname}. Man yra ${age} metų."`);
}


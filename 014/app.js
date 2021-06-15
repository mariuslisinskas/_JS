function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// tevas prototype

const logHi = function(){
    console.log(this.valueOf());
}
const letterACounter = function(){
    let counter = 0;
    for(let i = 0; i < this.length; i++){
        if(this[i] === 'a'){
            counter++;
        }
    }
    console.log('A: ', counter);
}

String.prototype.log = logHi;
String.prototype.getA = letterACounter;

// logHi();
// logHi();
// logHi();

const kate = new String('dvi kates');
const suo = new String('trys sunys');
const pele = new String('daug daug baltu peliu');

// console.log(kate.indexOf('at'));
// console.log(kate.valueOf());


kate.log();//paziureti koks primityvus value, nes sitie stringai jau moka console.log aprasyta virsuje
suo.log();
pele.log();
pele.getA();
suo.getA();

//naujas 

function all(){
    console.log(this);
}
all();

// OBJ = {prop1: 'labas'}
const ufo = {
    fly2: function(arr){
        console.log(this);
    },
    fly1(arr){
        console.log(this);
    }
}

ufo.fly1([5,9,77]);

//
// const ufo2 = {
//     fly(arr){
//         console.log(this);
//         console.log(arr);
//         const go = () =>{
//             console.log(this);
//         }
//       arr.forEach('go viduje', this);
//     }
// }

// ufo2.fly([5,9,77]);

//galim perziuret visa narsykles turini html
console.log(document);
//vidurkio skaiciavimas naudojant spreaf operator ...arg

const vidurkis = (...arg) =>{
    let total = 0;
    for(let i = 0; i < arg.length; i++){
    total += arg[i];
    }
    console.log(total/arg.length);
}

vidurkis(55,9,10,10,200,500,3);

// paskutinis objektu dalykas

const obj = new Object();
console.log(typeof obj);

//ka daryt jei objektas butu tiesiog 'kate' neapibreztas - reikia pasidaryti kates planas (class)

class Kate{
    constructor(){
        console.log('Nauja kate');
        this.age = rand(1, 8); //kates savybes constructor yra funkcija
    }
    voice = () => console.log('miau'); //kates metodas
    getAge = () => console.log(this.age);
}

const ka1 = new Kate();
const ka2 = new Kate();

console.log(ka1);
console.log(ka2);

ka2.voice();
console.log(ka2.getAge());
setTimeout(ka1.getAge, 1000);

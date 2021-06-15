//Funkcijos turi:
//1. Deklaracija pati nevykdoma jei nera iskvietimo
function duokObuoli(){
    vienaVieninteli = 'Imk Obuoli'; //aprasome kintamaji
    return vienaVieninteli //atidejimas - grazinam kintamaji kai isvieciame
}

//2. Iskvietimas butina ()
duokObuoli(); //kvieciame funkcija
console.log(duokObuoli()); //perziurim stringa
console.log(duokObuoli); //perziurim funkcija

let manoObolis = duokObuoli(); //bet koks kintamasis kuriam priskirtas stringas 'imk obuoli'
console.log(manoObolis);


//----------UZDUOTIS ------------
//1. Parasyti dvi funkcijas be parametru red() ir green(). Funkcijos turi grazinti atitinkamus stringus "red" ir "green". Pademonstruoti veikima;
console.log('---------- 1 -----------');
function red(){

    return 'RED'
}
function green(){

    return 'GREEN'
}
console.log(green(), red());

//Parasyti funkcija color(what). Funkcija turi grazinti spalva, priklausomai nuo argumento:
//Jeigu what == 1 - stringa "white", jeigu what == 2 - stringa "black"
//kitais atvejais - "no color". Pademonstruoti veikima;
console.log('---------- 2 -----------');
function color(what){
    if(what == 1){
        return 'white';
    }
    else if(what == 2){
        return 'black';
        }
    else{
        return 'no color';
    }  
}
console.log(color(2));

//Parasykite dvi funkcijas sum(a, b) ir diff(a. b). Pirma funkcija turi suskaiciuoti suma(a+b), o kita skirtuma(a - b)
// su argumentais a ir b ir grazinti rezultata. Pademonstruokite veikima 
console.log('---------- 3 -----------');
function sum(a, b){
    let sum = a + b;
    return sum
}
function diff(a, b){
    let diff = a - b;
    return diff
}
console.log(diff(5, 3));

// Papildyti pries tai buvusi uzdavini, kad a ir b parametrai
// turetu default argumentus lygius 0. Pademionstruoti veikima.
console.log('---------- 4 -----------');
// sum diff(a = 0, b = 0)

//sukurkite masyva ab['A', 'B'], masyva cd['C', 'D'] ir masyva fe['E', 'F']
//Masyvai nera funkcijos viduje. Parasykite funkcija changeArray(array)
//kuri sukeistu vietomis perduodamo masyvo reiksmes.Pademonstruoti.
console.log('---------- 5 -----------');
// let m = ['A', 'B']; PAVYZDYS
// let tmp = m[0]; //tarpinis kintamasis 
// m[0] = m[1]; // overwritinu pirma reiksme
// m[1] = tmp; // tapinis kintamasis eina i masyva
// console.log(m);

let ab = ['A', 'B'];
let cb = ['C', 'D'];
let fe = ['F', 'E'];

function changeArray(array){
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
    return array;
}

ab.push('C')

console.log('before ab:', ab);
console.log('after ab:', changeArray(ab));


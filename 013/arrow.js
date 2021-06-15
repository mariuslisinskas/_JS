function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//ANONIMINE FUNKCIJA

const A = 1;
const B = 3;
const C = 2;

//UNIVERSALI FUNKCIJU BIBLIOTEKA
function sum(a, b, c, funk){
    let s = a + b + funk(c);
    return s;
};


//PASIRINKIMAS KA PRIDESIME I FUNKCIJA Virsuje
const resA = sum(A, B, C, function(h){
    let r = 10 * h;
    return r;
});

//analogiskas arrow function aprasymas
const resB = sum(A, B, C, h => 10 * h);

console.log('resB', resB);

console.log('------------UZDUOTIS 7------------');
//Parasyti funkcija kuri masyve visas jo reiksmes pakeistu i atsitiktinai sugeneruotas spalvu stringais red, blue arba green.
//Funkcija turi tureti du argumentus vienas generuojamas masyvas o kitas funkcija - spalvu generatorius.
//Pademonstruoti veikima

const mas = [1, 2, 3];
console.log(mas);
function f7(mass, fun){
    for(let i = 0; i < mas.length; i++){
        mas[i] = fun();
    }
}
f7(mas, () => ['red', 'blue', 'green'][rand(0, 2)]);

console.log(mas);

console.log('------------UZDUOTIS 8------------');
//Yra masyvas[8, 9, 7, 6, 12, 48, 0, 6] isrusiuoti masyva nuo didziausio iki maziausio naudojant sort ir
//rusiavimo funcija.

const masyvas = [8, 9, 7, 6, 12, 48, 0, 6];
masyvas.sort((b, a) => a - b);
console.log(masyvas);


console.log('------------UZDUOTIS 9------------');
//yra masyvas [pingvinas, zebras, voras, vilkas, zuikis]
//Sukurti nauja masyva naudojant map ir atskira funkcija
//kuriame atitinkami indeksai atitiktu zodziu ilgi

const zverys = ['pingvinas', 'zebras', 'voras', 'vilkas', 'zuikis'];

const map = zverys.map(x => x.length);

console.log(map);

console.log('------------UZDUOTIS 10------------');
//Yra masyvas [8, 'B', 9, 7, 'A', 6, 12,'B', 'B', 'A', 48, 0, 'A', 6]isrusiuoti masuva nuo didziausios iki maziausios reiksmes naudojant sort
//ir atskira rusiavimo funkcija.
//A raidees turi eiti paciame gale o B paciame priekyje

const m = [8, 'B', 9, 7, 'A', 6, 12,'B', 'B', 'A', 48, 0, 'A', 6];

m.sort((a, b) => {
    if(a === 'A') return 1;
    if(b === 'B') return 1;
    if(b === 'A') return -1;
    if(a === 'B') return -1;
    return b - a;
});

console.log(m);

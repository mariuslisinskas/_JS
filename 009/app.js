function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės
// yra atsitiktiniai skaičiai nuo 5 iki 25.

let masyvas = [];

for(let i = 0; i < 30; i++){
    masyvas.push(rand(5, 25));
}

console.log('1. MASYVAS START', masyvas.slice());
//2. a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log('------------ A -----------');
let did10 = 0;
for(let i = 0; i < masyvas.length; i++){
    // masyvas[i] > 10 ? did10++ : did10; hipsteriskai
    if(masyvas[i] > 10){
        did10++;
    }
}
console.log(did10);

// b) Raskite didžiausią masyvo reikšmes ir ju indeksus;
console.log('------------ B -----------');
let did = 5;
let didIndex = [];
for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] > did){
        did = masyvas[i];
        didIndex = []; //isvalome masyva radus nauja didesni skaiciu
        // didziausios reiksmes suradimas
    }
    if(masyvas[i] === did){
        didIndex.push(i);
    }
}
console.log('did, didIndex', did, didIndex);

// c) Suskaičiuokite visų lyginiu reikšmių indeksų sumą;
console.log('------------ C -----------');
let indexSuma = 0;
let indexNSuma = 0;

for(let i = 0; i < masyvas.length; i++){
    if(i % 2 === 0){
        indexSuma += masyvas[i]; //poriniai
    }
    else{
        indexNSuma += masyvas[i]; //neporiniai
    }
}
console.log('indexSuma', indexSuma, indexNSuma);

// d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
console.log('------------ D -----------');
const naujasMasyvas = []; // kad niekas kitas kode nepriskirinetu naujasMasyvas'ui
for(let i = 0; i < masyvas.length; i++){
   naujasMasyvas.push(masyvas[i] - i);
}
console.log('naujasMasyvas', naujasMasyvas);

// e) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
console.log('------------ E -----------');
for(let i = 0; i < 10; i++){
   masyvas.push(rand(5, 25));
}
console.log('Masyvas', masyvas.slice()); //darom momentine nuotrauka

// f) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
console.log('------------ F -----------');
const porMas = [];
const neporMas = [];

for(let i = 0; i < masyvas.length; i++){
    if(i % 2 === 0){
        porMas.push(rand(5, 25));
        //poriniai
    }
    else{
        neporMas.push(rand(5, 25)); //neporiniai
    }
}
console.log('porMas, neporMas', porMas, neporMas);

// g) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
console.log('------------ G -----------');
for(let i = 0; i < masyvas.length; i += 2){
    if(masyvas[i] > 15){
        masyvas[i] = 0;
    }
}
console.log('Masyvas', masyvas.slice());

// h) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
console.log('------------ H -----------');
let index1 = -1; //nerastas
let ii = 0; //pradedam nuo 0
do{
    if(masyvas[ii] > 10){
        index1 = ii;
    }
    ii++
}while(index1 === -1 && ii < masyvas.length); //kad neuzsiciklintu dedam antra dali jei nebus rezultato
console.log('index1', index1);

// i) Naudodami funkcija splice is masyvo istrinkite visus elementus turincius porini indeksa;
console.log('------------ I -----------');
for(let i = 0; i < masyvas.length; i++){
    masyvas.splice(i, 1);
}
console.log('Masyvas', masyvas.slice());

//3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log('------------ 3. -----------');
const abcd = ['A', 'B', 'C', 'D'];
const masyvas3 = [];

for(let i = 0; i < 200; i++){
    masyvas3.push(abcd[rand(0, 3)]);
}
console.log('masyvas3', masyvas3.slice());

const counter = [0, 0, 0, 0,];
for(let i = 0; i < masyvas3.length; i++){
    counter[abcd.indexOf(masyvas3[i])]++;
}
console.log('counter', counter);

// 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log('------------ 4. -----------');
// const abcde = ['A', 'B', 'C', 'D'];
// const masyvai = [[], [], []];
// const triraidis = [];
// const uniValue = [];
// const uniComb = [];

// for(let j = 0; j < 3; j++){
//     for(let i = 0; i < 200; i++){
//     masyvai[j].push(abcde[rand(0, 3)]);
//     }
// }
// for(let i = 0; i < 200; i++){
//     triraidis.push(masyvai[0][i]+masyvai[1][i]+masyvai[2][i]);
// }

// top:for(let i = 0; i < triraidis.length; i++){
    
//     // Unikali
//     if(uniComb.indexOf(triraids[i]) === -1){
//         uniComb.push(triraidis[i]);
//     }
//     // Vienetine
//     let now = triraidis[i];
//     let counter = 0;
//     for(let j = 0; i < triraidis.length; j++){
//         if(triraidis[j] == now){
//             counter++;
//             if(counter > 1){
//                 continue top
//             }
//         }
//     }
//     uniValue.push(now);
    
// }

// // console.log('masyvai', masyvai.slice());
// // console.log('triraidis', triraidis.slice());
// console.log('uniValue', uniValue.slice());



// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
console.log('------------ 5. -----------');
const masyvai5 = [[], []];
let count = 0;

for(let j = 0; j < 2; j++){
    do{
        count++;
        let random = rand(100, 210);
        if(masyvai5[j].indexOf(random) === -1){
            masyvai5[j].push(random);
        }
    }while(masyvai5[j].length < 100);
}
console.log(masyvai5, count);
// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
console.log('------------ 6. -----------');
const m6 = [];

for(let i = 0; i < masyvai5[0].length; i++){
    if(masyvai5[1].indexOf(masyvai5[0][i]) === -1){
        m6.push(masyvai5[0][i])
    }
}
console.log(m6);

// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
console.log('------------ 7. -----------');

const m7 = [];
for(let i = 0; i < masyvai5[0].length; i++){
    if(masyvai5[1].indexOf(masyvai5[0][i]) === -1){
        m6.push(masyvai5[0][i]);
    }
    else{
        m7.push(masyvai5[0][i]);
    }
}
console.log(m7);


// 8. Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės būtų iš  antrojo masyvo.
console.log('------------ 8. -----------');
const funny = [];

for(let i = 0; i < masyvai5[0].length; i++){
    funny[masyvai5[0][i]] = masyvai5[1][i];
}
console.log(funny);
// 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
console.log('------------ 9. -----------');
const fm = [];

fm.push(rand(5, 25));
fm.push(rand(5, 25));

for(let j = 2; j < 10; j++){
    let sum = fm[j-1] + fm[j-2];
    fm.push(sum);
}
console.log(fm);
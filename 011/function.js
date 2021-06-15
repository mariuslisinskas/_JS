
//funkcijos deklaracija
function zebras(v)//v yra parametras
{
    return v * v + 38 - 37 + 40;//grazinam tik viena daikta objekta, viena masyva(su keliom reiksmem), stringa
}

let A = 5;//ABC yra argumentai duomenys
let B = 6;
let C = 7;
//funkcijos iskvietimas
let AA = zebras(A);//imituojam sudetinga koda
console.log(AA);
let BB = zebras(B);//imituojam sudetinga koda
console.log(BB);
let CC = zebras(C);//imituojam sudetinga koda
console.log(CC);

//3 masyvai su 3 kart iskviesta viena funkcija, kad galima butu uzduoti ju ilgi, viduje "A" reiksmes;

function main(x)
{
    const masyvas = [];
    for(let i = 0; i < x; i++){
    masyvas.push('A');
    }
    return masyvas;
}

let f1 = 6;
let f2 = 10;
let f3 = 15;

let mas1 = main(f1);
console.log('MASYVAS 1', mas1);
let mas2 = main(f2);
console.log('MASYVAS 2', mas2);
let mas3 = main(f3);
console.log('MASYVAS 3', mas3);

// UZDUOTIS 1.
function main2(long, fill)
{
    const masyvas = [];
    for(let i = 0; i < long; i++){
        masyvas.push(fill);
    }
    return masyvas;
}

let f4 = 5;
let f5 = 6;
let f6 = 7;

let mas4 = main2(f4, 'Trius');//f4 = long, 'Trius' = fill
console.log(mas4);
let mas5 = main2(f5, 'Zebrs');//f5 = long, 'Trius' = fill
console.log(mas5);
let mas6 = main2(f6, 'Bebrs');//f6 = long, 'Trius' = fill
console.log(mas6);

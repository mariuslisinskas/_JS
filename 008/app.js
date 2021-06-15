function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var komoda = ['obuolys', 'gyvate', 58, 'geles', 'lape', 'kate'];

console.log('Pradine kopija masyvo', komoda.slice());
// ieskojimas pozicijos jei yra dvi vienodos - ras pirma ir sustos ieskoti
console.log(komoda.indexOf(58)); 
// splice - ispjauna porcija masyvo nuo kurioe elemento ir kiek elementu ispjauti (3, 1)
komoda.splice(2, 1);
console.log('SPLICE', komoda.splice(2, 1));
// surandame ir ismetame 
var b = komoda.indexOf('kate');
console.log('splice', komoda.splice(b, 1));



komoda[1] = 'anakonda';
komoda[2]++;

console.log(komoda);
console.log(komoda[2]);

console.log('masyvo ilgis', komoda.length);

console.log('masyvo paskutinis stalcius', komoda[komoda.length - 1]);

// Masyvo sujungimas su ciklus

for( var index = 0; index < komoda.length; index++){
    console.log('Stalcius Nr.' + index, komoda[index]);
}

// Uzduotis 1

var masyvas = ['Preke 1', 'Preke 2', 'Preke 3', 'Preke 4'];


// Kaip ideti push objektai masyva teisingai - bus ikelta i masyvo gala
masyvas.push('Pele');
masyvas.push('Kate');
// ideti i pradzia
masyvas.unshift('Padanga');
// isimame is masyvo priekio
masyvas.shift();
// isimame elementa is pabaigos
masyvas.pop();



console.log('Masyvas', masyvas);
console.log('Masyvo ilgis', masyvas.length);
console.log('Masyvo ilgis', masyvas.push('Varle'));

for(var item = 0; item < masyvas.length; item++){
    console.log('Eile ' + item, masyvas[item]);
}

// Uzduotis 2
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės
// yra atsitiktiniai skaičiai nuo 5 iki 25.

var tuscias = [];

for(ciklas = 0; ciklas < 30; ciklas++){
    tuscias.push(rand(5, 25));
}

console.log('MASYVAS', tuscias);

// naujas splice

var sk = [58, 45, 32, 47, 58, 32, 100, 147, 32];

// pmatyti pradine masyvo foto rasome su slice
console.log('Pradine kopija masyvo', sk.slice());
// istrinti visus lygius 58

while((trinti = sk.indexOf(58)) >= 0){
    sk.splice(trinti, 1);
}

console.log('Skaiciai', sk);

// slice - pagrindine uzduotis daryti kopijas ir naudojamas prisideti momentine masyvo nuotrauka rasant koda.

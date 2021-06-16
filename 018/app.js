// 1. Atskiri elementai
// a. Tamsiai žaliai nuspalvinti h1 tagą;
// b. Tagui i pridėti klasę small;
// c. Iš tago h1 pašalinti klasę main;
// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti
// klasę main;
// e. Span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai


// 2. Elemetų grupės (nodeList)
// a. Suskaičiuoti kiek yra h2 tagų;
console.log('-------------2.A--------------');

let counter = 0;

document.querySelectorAll('h2').forEach( () => counter++ );
console.log(counter);
// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log('-------------2.B--------------');

let counterF = 0;
document.querySelectorAll('h2').forEach( (h2) => {
    if(!(h2.classList.contains('.first'))){
        counterF++;
    }
});
console.log(counterF);
// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
console.log('-------------2.C--------------');
document.querySelectorAll('h2').forEach((h2) => h2.style.color = 'blue');

// d. Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;
console.log('-------------2.D--------------');

const priceTag = document.querySelector('.prices');
priceTag.querySelectorAll('h2').forEach( h2 => h2.classList.add('price-tag'));


// e. Pabraukti visus tagus su klase new;
console.log('-------------2.E--------------');
document.querySelectorAll('.new').forEach((e) => e.style.textDecoration = 'underline');

// f. Suskaičiuoti kiek yra gyvūnų kategorijų (jos yra ul tagai);
console.log('-------------2.F--------------');

let kat = 0;
document.querySelectorAll('ul').forEach( () => kat++);
console.log(kat);
// g. Ul tagus apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir
// 50px paddingą kairėje ir dešinėje;
console.log('-------------2.G--------------');
document.querySelectorAll('ul').forEach((e) =>{
    e.style.border = '1px solid black';
    e.style.padding = '15px, 50px, 15px, 50px';
    
});
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log('-------------2.H--------------');

let newCount = 0;
const newanimal = document.querySelector('.animals');
newanimal.querySelectorAll('.new').forEach(() => newCount++);
console.log(newCount);

// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje
console.log('-------------2.I--------------');
const newAnimalsList = {};

document.querySelectorAll('ul').forEach( ul => {

    let count = 0;

    ul.querySelectorAll('li').forEach( li => {

        if (li.classList.contains('new')) {

            count++;

        }

    });

    newAnimalsList[ul.id] = count;

});

console.log(newAnimalsList);

// console.log(newAnimalsList);
// const newAnimalsList = {};

// const uls = document.querySelectorAll('ul');

// for (let i = 0; i < uls.length; i++) {

//     let count = 0;

//     const lis = uls[i].querySelectorAll('li');

//     for (let j = 0; j < lis.length; j++) {

//         if (lis[j].classList.contains('new')) {

//             count++;

//         }

//     }

//     newAnimalsList[uls[i].id] = count;

// }

// console.log(newAnimalsList);

//4.A
document.querySelectorAll('.new').forEach(animal => {
    animal.addEventListener('dblclick', e => {
        e.target.style.color = 'red';
    })
});
//rasome rasome


//3c uzduotis
// const u3c = document.querySelector('.prices');



// const backgroundGray = el => {

//     if (el.target.style.backgroundColor === '' || el.target.style.backgroundColor === 'white'){

//         el.target.style.backgroundColor = 'gray';

//     }

//     else {el.target.style.backgroundColor = 'white'};

// }



// u3c.addEventListener('click', backgroundGray);
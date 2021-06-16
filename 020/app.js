


const linkas = document.querySelector('a');

const vzLinkas = 'https://www.vz.lt';
const cvLinkas = 'https://www.cv.lt';

console.log(linkas.getAttribute('href'));

linkas.setAttribute('title', 'Go go go');

linkas.removeAttribute('href');

const vz = document.querySelector('#vz');
const cv = document.querySelector('#cv');

document.querySelector('#cv').addEventListener('click', () => linkas.setAttribute('href', cvLinkas));
document.querySelector('#vz').addEventListener('click', () => linkas.setAttribute('href', vzLinkas));

// --------1. UZDUOTIS-----------------
const nuoroda = document.querySelector('img');

const tr1Linkas = 'http://127.0.0.1:5500/020/tractor1.jpg';
const tr2Linkas = 'http://127.0.0.1:5500/020/tractor2.jpg';
const tr3Linkas = 'http://127.0.0.1:5500/020/tractor3.jpg';

const tr1 = document.querySelector('#t1');
const tr2 = document.querySelector('#t2');
const tr3 = document.querySelector('#t3');

document.querySelector('#t1').addEventListener('click', () => nuoroda.setAttribute('src', tr1Linkas));
document.querySelector('#t2').addEventListener('click', () => nuoroda.setAttribute('src', tr2Linkas));
document.querySelector('#t3').addEventListener('click', () => nuoroda.setAttribute('src', tr3Linkas));

// ------------------2----------------------------
const div = document.querySelector('div');
const img = div.querySelector('img');

document.querySelector('.buttons').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
            img.setAttribute('src', img.dataset[b.id]);
    })
})
// ------------------3 INPUTAI----------------------------

const labas = document.querySelector('[name = labas]')
labas.addEventListener('input', () =>{
    console.log(labas.value);
})

const selis = document.querySelector('[name = selis]')
selis.addEventListener('input', (b) =>{
    console.log(selis.value);
    img.setAttribute('src', img.dataset[selis.value]);
    
})

const selis2 = document.querySelector('[name = selis2]')
selis2.addEventListener('input', (b) =>{
    console.log(selis2.value);
    img.setAttribute('src', img.dataset.value);
    
})


//    <!-- INNER HTML INNER TEXT paspaudio Do tada textas tampa h1 dalimi-->

const h1 = document.querySelector('h1');
const h1Input = document.querySelector('[name=h1]');
const h1Do = document.querySelector('#h1');

h1Do.addEventListener('click', () => {
    const valueText = h1Input.value;
    h1.innerText = valueText;
})

//inner html
const h2Do = document.querySelector('#h2');
const html = '<h2>Labas Vakaras</h2>'; //inner html pvz

h2Do.addEventListener('click', () => {
    document.body.innerHTML = html; //document.body rasome nuoroda kur ideti html kintamaji
})

//selektas is triju pasirinkimu, kiekvienas is ju iraso pasveikinima i h1 tada

const h1sel = document.querySelector('h1');
const h1op = document.querySelector('[name=selektas]');
const input = h1op.querySelectorAll('option.value');

h1op.addEventListener('input', () =>{
    
    const text = input;
    h1sel.innerText = text;
})




































































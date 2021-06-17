const words = ['Labas Rytas', 'Laba diena', 'Labas vakaras'];
const h1 = document.querySelector('h1');

document.querySelector('#case-1').addEventListener('change', (select) => {
    h1.innerText = select.target.value;
});

document.querySelector('#case-2').addEventListener('change', (select) => {
    h1.innerText = words[select.target.value];
});

const h = document.querySelector('#h1');

document.querySelector('#case-3').addEventListener('change', (select) =>{
    h.style = select.target.value;
});

const button = document.querySelector('button');
const uz = document.querySelector('#h1');
const html = '<h1>HELLO</h1>';

button.addEventListener('click', () => {
    uz.innerHTML = html; //document.body rasome nuoroda kur ideti html kintamaji
});


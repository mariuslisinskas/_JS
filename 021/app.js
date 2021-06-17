

const abc = {
    a: 'b',
    b: {k: 1, z: 22, z: "abc  de"},
    c: [1,2,3]
};//objektas abc

console.log(JSON.stringify(abc));//naudojam JSON  kad obekta abc paverstume stringu

const js = JSON.stringify(abc);

console.log(js);//perziurim stringa
console.log(JSON.parse(js));//pasidarome is stringo koda

// fetch('https://www.vz.lt/')//kodas vykdomas palei eilute kai pirma padaryta eina iantra
// .then(response => response.text())
// .then(data => console.log(data));



//UZduotis 1.

const h = document.querySelector('h1');

document.querySelector('button').addEventListener('click', () => {
    fetch('http://127.0.0.1:5500/021/labas.txt')
    .then(response => response.text())
    .then(data => h.innerText = data);
});

//Uduotis 2. 

// fetch('https://picsum.photos/v2/list')

//   .then(response => response.json())//gauname objekta - masyva

//   .then(data => console.log(data));
const ul = document.querySelector('ul');

fetch('https://in3.dev/vinted/api/brands/all')
.then(response => response.json())
.then(data => {
    data.forEach(element =>{
        // console.log(element.title);
        h.innerHTML = element.title;
        console.log(h.innerHTML)
        // ul.innerHTML = '<li>' +brand+ '</li>';
    })
});


// const brand = '';
// ul.innerHTML = '<li>' +brand+ '</li>';

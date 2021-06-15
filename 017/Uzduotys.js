//1.A
const linkas = document.querySelector("a");
linkas.style.color = "green";

const labas = document.querySelector("h1");
labas.style.color = 'red';
//1.B
const change = function (eventas) {
    labas.style.color = 'blue';
    eventas.preventDefault();
}
linkas.addEventListener('click', change);
//1.C //1.D
const divs = document.querySelectorAll("div");
const remove = function (eventas) {
 //1.C   // eventas.target.style.display = 'none';
    eventas.target.remove();
}

for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', remove);
}
//1.E
const dukraSpan = document.querySelector("span span");

const killFamily = function(e){
    console.log(e.target.closest('.a'));//targetinam dukra
    e.target.closest('.a').remove();
}

dukraSpan.addEventListener('click', killFamily);


// ----------- Naujo Elemento sukurimas------------
const newDukra = document.createElement('span');//dokumente sukuriam nauja dukra bet jos dar nera DOM nes jis nera idetas

const nameOfDukra = document.createTextNode('Dukra 2');//ka mes norime matyti naujo elemto viduryje

newDukra.appendChild(nameOfDukra);//i spana dedame dukra 2

const oldDukra = document.querySelector('span'); //vietakur desime surandame

//tevas.appendChild(newDukra); idesime i teva dukra i gala
// document.body.insertBefore(newDukra, oldDukra);//nurodome ka dedame ir pries ka dedame
//document.body tiesiog galima irasyti objekta kur desime, bet reiks susikurti const dedam = document.querryselector('i span ir tt')
//reik nurodyt tevini elementa


// ----------F------------

const irasas = document.querySelectorAll('h2');

for(let i = 0; i < irasas.length; i++){
    const sp = document.createElement('span');
    const ir = document.createTextNode('Mano vardas Marius');
    const nr = document.createTextNode(i + 1 + ' ');
    sp.appendChild(nr);
    sp.appendChild(ir);
    irasas[i].appendChild(sp);
}



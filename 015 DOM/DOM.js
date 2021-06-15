function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document);

//kaip prieiname prie html h1 tago
const h1 = document.querySelectorAll('h1');
console.log(h1);

console.log(h1[0]);

console.log(h1[1]);

// h1.style.color = 'green';
// setTimeout(() => h1.style.color = 'green', 2000);

// UZDUOTIS 1

// const ul = document.querySelector('ul');
// const li = ul.querySelectorAll('li');
// li.forEach(e => e.style.fontSize = rand(10, 30) + 'px'); //jei naudotume forEach tam paciam


const ul = document.querySelectorAll('ul');
let colors = ['green', 'blue', 'yellow'];

    for(let j = 0; j < ul.length; j++){
        ul[j].style.color = colors[j];
        console.log(ul[j]);
        
        const li = ul[j].querySelectorAll('li');
        for(let i = 0; i < li.length; i++){
            li[i].style.fontSize = rand(10, 30) + 'px';
            console.log(li[i]);
        }
    
    }

    // const ul = document.querySelectorAll('ul');

    // const color = ['green', 'yellow', 'blue'];
    
    // const cl = ['one', 'two', 'three']
    
    
    
    // for (let i = 0; i < ul.length; i++) {
    
    //    const li = ul[i].querySelectorAll('li');
    
    
    
    //    for (let j = 0; j < li.length; j++) {
    
    //      li[j].style.color = color[i % 3];
    
    //      li[j].style.fontSize = rand(10, 30) + 'px';
    
    //      li[j].classList.add(cl[j % 3]);
    
    //    }
    
    // }


// const ul = document.querySelectorAll('li');
// for(let i = 0; i < ul.length; i++){
//     let colors = ['green', 'blue', 'yellow'];
//     ul[i].style.fontSize = rand(10, 30) + 'px';
//     ul[i].style.color = colors[i];

//     console.log(ul[i]);
// }

// const ul = document.querySelector('ul');
// const li = ul.querySelectorAll('li');
// li.forEach(e => e.style.color = 'blue');


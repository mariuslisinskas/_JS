
const divs = document.querySelectorAll('div');

console.log(divs);

for(let i = 0; i < divs.length; i++){
   
    console.log(i, i % 2);
    if(i % 2 === 0){
    divs[i].classList.add('abc');

    }
    else{
    divs[i].style.height = '100px';
    divs[i].style.width = '100px';
    divs[i].style.backgroundColor = 'grey';

    }
}
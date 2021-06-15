//1 mouse eventas click//////
const gs = document.querySelector('.grey-square');
const goClick = function (eventas) {
    console.log('pele klik padare');
    console.log(eventas.target);

}
    
gs.addEventListener('click', goClick);
//2. event listener//
const circle = document.querySelector('.red-circle');
const color = function(eventas) {
    // eventas.target.classList.toggle('grey');
    //eventas.stopPropagation(); sustabdom propagacijas kad nepersiduotu tevui
    //eventas.preventDefault(); sustabdo visus defaultus pvz. puslapio reload arba ejimas linku
    if(eventas.target.classList.contains('grey')){
        eventas.target.classList.remove('grey');
    }
    else{
        eventas.target.classList.add('grey')
    }

}
circle.addEventListener('click', color);
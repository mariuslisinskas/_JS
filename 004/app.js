function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// A.
// sugeneruojam 21 atsitiktini skaiciu nuo 10 iki 29 ir sulipinam i viena stringa ir skaicius atskirti kableliais. Po paskutinio kablelio nera. ir stringa atspausdinti.

var i; 
var answer = '';

for (i = 1; i <=21; i++){
    
    if (i !== 1){
        answer += ',';
    }
    // answer=answer+rand(10, 99);
    answer += rand(10, 99);  
}

console.log(answer);

// B.
// Patobulinam, generuoti skaicius tol kol ju suma bus ne didesne uz 250.


var count = 0, sum = 0, atsakymas = '', atsakymas2 = '', firsttime = true, digit;

do {
    if(!firsttime){
        atsakymas2 += ', ';
        atsakymas += ', ';

    }
    firsttime = false;
    digit = rand(10, 99);
    if(digit < 30){
        atsakymas2 += digit;
    }
    
    atsakymas += digit;
    sum += digit;
    count++;
   
    
} while (sum <= 250);

console.log(atsakymas2);
console.log(atsakymas);
console.log(sum - digit);
console.log(count);

// C. Skaiciai mezesni nei 30 turi buti surasyti i atskira eilute.
// 


// ciklas while

// console.log('pries');
// var cycle = 1;

// while (cycle <= 5){
//     console.log('cikle', cycle);
//     cycle++;
// }

// console.log('po');

//  do while

// var counter = 0;
// var h = 0;
// var coin;

// do {
//     coin = rand(0, 1) ? 'H' : 'D';
//     if (coin == 'H'){
//         h++;
//     }
//     console.log('cikle', ++counter, h);
    
// } while (h < 3);

// for
// console.log('pries for');

// for(var cycle3 = 1; cycle3 <=5; cycle3++){
//     console.log('cikle', cycle3);
// }
// console.log('po for');

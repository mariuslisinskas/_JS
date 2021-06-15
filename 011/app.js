console.log('-----------STRING---------');

//stringas
const A = 'Aš galingas stringas';// = stringas primityvas limituotos savybes - naudojamas laikyti primityvia reiksme
let B = new String('As irgi stringas');//String yra prototipas/objektas su savo savybemis = objektas

B.labas = 'visogero';//savybe labas - gali buti naudojama saugoti pasikartojanciu raidziu kieki paciame stringe nekuriant naujo kintamojo


console.log('A', A, typeof A, A.length, A.indexOf('i'));
console.log('B', B, typeof B, B.length, B.indexOf('i'), B[4]);

//eval() komanda
const F = '2 + 5';//primityvas
const F2 = new String('2 + 5');//objektas
console.log(eval(F));
console.log(eval(F2.valueOf()));//F2.valueof grazins objektui primityve reiksme ir tada apskaiciuos uzduoti

//templatinimas jei norime prie stringo prideti kazka
let V1 ='***' + A + '***';
let V2 =`*** ${A} ***`;

console.log(V1);
console.log(V2);

//populiariausi paveldimi stringo metodai is stringo prototipo
console.log('indexOf', A.indexOf('i'));//paeme pirma rasta simboli
console.log('charAt', A.charAt(8));
console.log('[]', A[8]);
console.log('charcodeat', A.charCodeAt(8));
console.log('lastindexOf', A.lastIndexOf('i'));//randa paskutini rasta simboli


console.log('-----------NUMBER---------');
//--------NUMBER--------
//prototipas Number 

let X = new Number(33);
let zz = 0.2;
let vv = 0.4;
let kitas = zz + vv;

console.log(kitas.toFixed(2), kitas.toPrecision(2));//verciam nuymberi i sringa tofixed po kablelio skaiciuoja, toprecision viso skaitmenu kieki


console.log('-----------Matematika---------');


console.log(Math.PI);
console.log(Math.random());//randomu generatorius nuo 0 iki 1
console.log(Math.round(Math.PI));//apvalinimas iki sveiko skaiciau

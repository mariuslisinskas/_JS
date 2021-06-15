function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//----------------OBJEKTAI---------------
const obj = {forest: 'Gump', digit2: 555, arr:[5, 8, 9]};

obj.color = 'black';
obj.what = 'cat';
obj.digit = 888;
obj.abc ={a: 'A', b: 'B', c: 'C'};


console.log(obj);
console.log('color', obj.color);
console.log('b:', obj.abc.b);

console.log('Nera savybes:', obj.abzz);

let obj2 = obj;

let A = 5;
let B = 12;
A = B; //Priskyrimas 5 priskirta reiksme 12
B = 45; // 45

let T;
let C = {A: 5};
let D = {B: 12};
C = D; // dabar C rodys i D. C lieka tik nuoroda i D. lieka rodykle nuoroda
T = D; // dabar T rodys nuoroda i D. realiai T nebelieka kaip atskiro objekto.

C.A = 123;// C.A bus priskirta ir C ir D

console.log('C:', C, 'D:', D, 'T:', T);

console.log('A:', A, 'B:', B);

//uzduotis sugeneruoti random savybe
obj.f2 = 'feDU';
obj.f1 = 'feVienas';
obj.f3 = 'feTrys';

const prop = 'f' + rand(1, 3);
console.log(obj[prop]);//console parasys savybe stringa


// let prop = 'what';//kintamasis su stringu
// console.log(obj[prop]);//savybe obj yra kintamasis prop 


//OBJEKTU ITERACIJA KAIP PERZIURETI VISKA KAS YRA OBJ
//Naujas ciklas

console.log('-----------------OBJ-------------------')
// i vidinis kintam
for(let i in obj){
    
    console.log(i, obj[i]);

}
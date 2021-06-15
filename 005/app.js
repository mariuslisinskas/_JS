function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.A. Uzduotis
var a, b, c, d;

a = rand(5, 25);
b = rand(5, 25);
c = rand(5, 25);

d = a + b + c;

console.log('1A.', d);

// B.
var kint;
var string = '';

for(kint = 1; kint <= 3; kint++){
    string = string + rand(5, 25);
}
console.log('1B.', string);

// C.
var kint;
var string = '';

for(kint = 1; kint <= 3; kint++){
    if( kint !== 1){
        string = string + " "
        }
    string = string + rand(5, 25);
}
console.log('1C.', string);

// D.
var kint;
var string = '';
var sum = 0;
var ran;

for(kint = 1; kint <= 3; kint++){
    if(kint !== 1){
        string = string + ', ';
    }
    ran = rand(5, 25);
    string = string + ran;
    sum = sum + ran;

}

console.log('1D.', string, sum);

// 2. Uzduotis
var az;

az = rand(5, 10);

console.log("2.", az);

// 3. Uzduotis

var z;
var st = 'Labas';

    for(z = 1; z <=5; z++){
        
        // st = st + "Labas";
        console.log("3.", st);

    }

// console.log("3.", st);

// 4. Uzduotis

var z;
var st = '';

    for(z = 1; z <= 7; z++){
        st = az;
        console.log("4.", st);
    }
// console.log("4.", st);

// 5. Uzduotis
var z;
var st = '';

for(z = 1; z <= az; z++){
    st = az;
    console.log("5.", st);

}
// console.log("5.", st);

// 6. Uzduotis
var z;
var st = '';

if(az > 7){

for(z = 1; z <= az; z++){
    st = az;
    console.log("6.", st);

}
}
else{
    st = az;
    console.log("6.", st);
}

// 7.A Uzduotis

var out;
var time;

for(time = 1; time <= 5; time++){
    u = rand(10, 20);
    out = u;
    console.log("7.A", out);

}
// 7.B Uzduotis

var su = 0;

for(time = 1; time <= 5; time++){
    u = rand(10, 20);
    su += u;
    console.log("7.B", u);

}
console.log("7.B", su);
// 7.C Uzduotis

var out;
var time;
var str = '';

for(time = 1; time <= 5; time++){
    if(time !== 1){
        str = str + " ";
    }
    ra = rand(10, 20);
    str = str + ra;
}
console.log("7.C", str);

// 7.D Uzduotis
var out;
var time;
var str = '';
var summ = 0;

for(time = 1; time <= 5; time++){
    if(time !== 1){
        str = str + " ";
    }
    ra = rand(10, 20);
    str = str + ra;
    su += ra;
}
console.log("7.D", str, su);

// 8.A Uzduotis 

var kin1, kin2 = 0, kin3 = 0, kin4 = 0, kin5 = 0, lyg = 0, nelyg = 0;

do{
    var gen = rand(10, 25);
    kin1 = gen;
    kin2++;
    console.log("Iskrite skaiciai", kin1);
    if(gen % 2 == 0){
        lyg++;
    }
    else{
        nelyg++;
    }
    if(gen <= 18){
        kin3 += gen;
    }
    else{
        kin5++;
        kin4 += gen;   
    }
    
   if(gen <= 12){
       break;
   }
}while(true);

console.log("8.A", kin1);

// 8.B Uzduotis 

console.log("8.B", kin2);

// 8.C Uzduotis 

console.log("8.C", kin3);

// 8.D Uzduotis 

console.log("8.D", kin5, kin4);

// 8.E Uzduotis 

console.log("8.E", "Lyginiai", lyg, "Nelyginiai", nelyg);

// 8.F Uzduotis 
var kin1, kin2 = 0, kin3 = 0, kin4 = 0, kin5 = 0, lyg = 0, nelyg = 0;
var countSmall;
var countBig = 0; //pakartojimai prasides nuo 0
var countSmallALL = 0; //bendras mazo ciklo iteraciju kiekis nuo 0

do{
    countSmall = 0;
    do{
        gen = rand(10, 25);
        countSmall++;
        countSmallALL++;
    }while(gen >= 12);
countBig++;
}while(countSmall < 80);

console.log("8.F",'BIG', countBig);
console.log("8.F",'ALL', countSmallALL);

// 9.A Uzduotis

var k1 = 0, k2, k3, k4, k5, k6;

do{
    var gen = rand(5, 10);
    k3 = gen;
    k1++;
   for(k2 = 1; k2 <= gen; k2++){
       k3++;
   }

}while(gen !== 5);
    console.log("Isores ciklai", k1);
    console.log("Vidaus ciklai", k3);

// 9.B Uzduotis
var k1 = 0, k2, k3, k4, k5, k6;
var count5 = 0;

do{
    var gen = rand(5, 10);
    k3 = gen;
    k1++;
    if(gen === 5){
        count5++;
    }
   for(k2 = 1; k2 <= gen; k2++){
       k3++;
   }
   console.log("Skaiciai", gen);
}while(!(gen == 5 && count5 >= 3));

console.log("viso ciklu", k1);


    // 10. Uzduotis
var kazys, petras;
var taskai1 = 0, taskai2 = 0;
var str = '';
var win = '';


do{
kazys = rand(5, 25);
kazys++;
taskai1 = taskai1 + kazys;
petras = rand(10, 20);
petras++;
taskai2 = taskai2 + petras;

if( kazys > petras ){
    str += 'Partiją laimėjo: Kazys';
}
else{
    str += 'Partiją laimėjo: Petras';
}
}while(taskai1 <= 222 && taskai2 <= 222);

if(taskai1 > taskai2){
    win += 'Zadima laimejo Kazys';
}
else{
    win += 'Zadima laimejo Petras';

}
console.log(taskai1, taskai2);
console.log(win);
console.log(str);
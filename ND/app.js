function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}    


// 1.
var a = rand(0, 4);
var b = rand(0, 4);
var div = '';

if(b == 0){
    div = "Dalyba iš Nulio negalima"
}
if( a > b && b !== 0 && a !== 0){
    div = a / b;
}

if(b > a && a !== 0 && b !==0 ){
    div = b / a;
}

console.log("1.", a, b, div);

// 2.
var a, b, c, mid;

a = rand(0, 25);
b = rand(0, 25);
c = rand(0, 25);

if(a > b && b > c){
    mid = b;
}
else if(a > b && c < a) || (a < b && b > c){
    mid = c;

}
else if(c < a && a < b){
    mid = a;
}

else if( a == b || a == c){
mid = "Nera vidurines reiksmes"
}
console.log(a, b, c,mid);
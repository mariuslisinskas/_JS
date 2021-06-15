
//Skaiciu palyginimas
//kintamieji
var n = 2;
var m = 3;

console.log(m > n, 'm > n'); //daugiau
console.log(n < m);          //maziau
console.log(m == n, 'm = n');//lygu
console.log(m != n, 'm != n');//nelygu
console.log(m >= n, 'm >= n');//daugiau arba lygu
console.log(m <= n, 'm <= n');//maziau arba lygu



//Stringu palyginimas
//stringas buna '' viduje kiekvienas

console.log('A' > 'Z', 'A > Z'); //daugiau
console.log('A' < 'Z', 'A < Z');          //maziau
console.log('A' == 'Z', 'A == Z');//lygu
console.log('A' != 'Z', 'A != Z');//nelygu
console.log('A' >= 'Z', 'A >= Z');//daugiau arba lygu
console.log('A' <= 'Z', 'A <= Z');//maziau arba lygu
console.log('CAA' > 'CA', 'CAA > CA'); //daugiau
console.log('A' < 'a', 'A < a'); //maziau
console.log('Z' < 'a', 'Z < a'); //maziau

//misrus palyginimas
var number = 2;
var string = '2';

console.log('2 == "2"', number == string);//lygu
console.log('1 == "A"', 1 == 'A'); //lygu
console.log('1 === "1"', 1 === '1'); //identiska
console.log('1 !== "1"', 1 !== '1'); //neidentiska
console.log('false == "0"', false == 0); //lygu
console.log('true == "1"', true == 1); //lygu
console.log('false == ""', false == ''); //lygu
console.log('false === ""', false === ''); //identiska


var nothing = null;// nera nulis o tiesiog niekas tuscia vieta juodoji sklyle :)
var undefine;//dar neaisku kas bus

console.log(typeof nothing); 
console.log('nothing == undefine', nothing == undefine); //lygu

console.log('null == 0', null == 0); //lygu

var bool = true;
bool = string(bool); 

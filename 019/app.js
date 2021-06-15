// 1. Atskiri elementai
// a. Tamsiai žaliai nuspalvinti h1 tagą;
// b. Tagui i pridėti klasę small;
// c. Iš tago h1 pašalinti klasę main;
// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti
// klasę main;
// e. Span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
// 2. Elemetų grupės (nodeList)
// a. Suskaičiuoti kiek yra h2 tagų;
// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
// d. Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;
// e. Pabraukti visus tagus su klase new;
// f. Suskaičiuoti kiek yra gyvūnų kategorijų (jos yra ul tagai);
// g. Ul tagus apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir
// 50px paddingą kairėje ir dešinėje;
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje

//4.A
document.querySelectorAll('.new').forEach(animal => {
    animal.addEventListener('dblclick', e => {
        e.target.style.color = 'red';
    })
});



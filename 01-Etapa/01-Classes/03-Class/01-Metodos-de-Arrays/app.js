//----------------------------------------------
// Arrays
//----------------------------------------------
let heroes = ['Batman', 'Catwoman', 'Iron man'];

// Sobrescrevendo o valor de heroes[2]
heroes[2] = 'Spider Man';

// console.log(heroes);
// console.log(heroes.length);


//----------------------------------------------
// Métodos de Arrays
//----------------------------------------------

//----------------------------------------------
// join()
//----------------------------------------------
// Retorna uma nova string com os items concatenados
// e separados por uma virgula

const joinHeroes = heroes.join();
// const joinHeroes = heroes.join('-');
// const joinHeroes = heroes.join('|');
// console.log(joinHeroes);

//----------------------------------------------
// indexOf()
//----------------------------------------------
// Obtém o index da primeira ocorrencia passada
// como argumento. Exemplo abaixo:
const ages = [12, 43, 21, 12];

const indexOf21 = ages.indexOf(12);

// console.log(indexOf21);

//----------------------------------------------
// concat()
//----------------------------------------------
// Concatena, junta dois arrays e não modifica o
// array original. Exemplo abaixo:

let newHeroes = ['Wonder Woman', 'Catwoman', 'Flash'];
const moreHeroes = newHeroes.concat(heroes);

// console.log(moreHeroes);

//----------------------------------------------
// push()
//----------------------------------------------
// Adidiciona valores ao array original
// Altera o array original. Exemplo abaixo:

const pushToHeroes = newHeroes.push('Spider Man', 'Iron man');
// console.log(newHeroes);
// console.log(pushToHeroes);

//----------------------------------------------
// pop()
//----------------------------------------------
// Remove o último item de um array
// Altera o array original. Exemplo abaixo:
// Não possui parâmetros

const popHeroes = newHeroes.pop();
console.log(popHeroes);
console.log(newHeroes);

//----------------------------------------------
// includes()
//----------------------------------------------
// Verifica se determinado valor do array, possuí um
// valor específico.

// O includes() faz um match, e retorna true or false
const includesHero = newHeroes.includes('Batman');
console.log(includesHero);

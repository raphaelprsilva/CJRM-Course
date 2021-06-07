/*---------------------------------------------------
  O objeto Math
---------------------------------------------------*/

console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

// Arredonda o número para cima ou para baixo
// Ex. 7.2 -> Arredonda para 7
// Ex. 7.7 -> Arredonda para 8
console.log(Math.round(area));


// Sempre Arredonda para BAIXO, o número em questão
console.log(Math.floor(area));

// Sempre arredonda para CIMA, o número em questão
console.log(Math.ceil(area));

// Trunca o número, ou seja, remove o decimal do número
// e retorna a parte inteira dele
console.log(Math.trunc(area));


// NÚMEROS ALEATÓRIOS

// Sempre gera um número aleatório entre 0 e 1
const randomNumber = Math.random();

console.log(randomNumber);

// Obtém um número aleatório entre 0 e 100
console.log(Math.round(randomNumber * 100));


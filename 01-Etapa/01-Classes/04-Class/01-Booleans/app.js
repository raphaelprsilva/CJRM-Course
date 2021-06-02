/* -----------------------------------------------
  Booleans e Comparações
------------------------------------------------ */
// console.log(true, false, 'true', 'false');


/* -----------------------------------------------
  Booleans e Comparações
------------------------------------------------ */
const email = 'raphael@gmail.com';

// O método includes verifica se a string em questão
// possui a string passada como argumento do método,
// retornando um boolean, ou seja, 'true' ou 'false'
const includes = email.includes('raphael');
// console.log(includes);


const names = ['baby', 'zord', 'calvin'];
const namesIncludes = names.includes('bab');

// Verifique o resultado descomentando o console.log
// console.log(namesIncludes);

/* -----------------------------------------------
  Booleans e Comparações
------------------------------------------------ */
const age = 31;

// Descomente para ver os resultados
// console.log(age !== 32);
// console.log(age === 32);
// console.log(age > 32);
// console.log(age >= 31);
// console.log(age < 31);
// console.log(age <= 31);

const name = 'raphael';

// Descomente para ver o resultado da comparação
// console.log(name === 'Raphael');
// console.log(name === 'raphael');
// console.log(name > 'belinha');
// console.log(name > 'Raphael');

/* -----------------------------------------------
  Conversão explícitas de tipos de dados
------------------------------------------------ */

/*
  Valores falsy:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN

  Valores truthy:
    - Qualquer valor que não é falsy
*/

// Exemplo:

console.log(Boolean(null));
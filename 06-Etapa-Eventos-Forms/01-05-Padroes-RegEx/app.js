/*----------------------------------------------------------------------
 RegEx - Regular Expressions
----------------------------------------------------------------------*/

/*
  
*/

const form = document.querySelector('.signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target.username.value);
});

const username = 'raphael';
// Padrão regex -> na constante, estou especificando que eu desejo que o
// 'username', tenha letras minúsculas, com o mínimo de 6 caracteres.
const pattern = /^[a-z]{6,}$/;

// Aqui, estou testando se a constante 'pattern' dá um 'match' com a constante
// 'username'. Se for verdadeiro, o retorno será 'true', senão, será 'false'.
// const isAMatch = pattern.test(username);

// if (isAMatch) {
//   console.log('O teste da regex passou');
// } else {
//   console.log('Não passou!')
// }

// OUTRA MANEIRA DE TESTAR

// search -> é um método de string e retorna a posição onde o 'match' ocorreu.
// Se o resultado for 'true', ou seja, ocorrer o 'match', o retorno de
// 'result', será '0'. Caso contrário, teremos como retorno: '-1'.
const result = username.search(pattern);

console.log(result);

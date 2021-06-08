/*---------------------------------------------------
  querySelector e querySelectorAll
---------------------------------------------------*/

// Vamos usar sempre o objeto 'document'
// const h1 = document.querySelector('body > h1');

// console.log(h1);

const paragraphs = document.querySelectorAll('p');


// NodeList -> Lista de Nós
// Nodelist -> Não é um array
// Nodelist -> pode ser percorrido com um forEach

// paragraphs.forEach(paragraph => console.log(paragraph));


const errors = document.querySelectorAll('.error');

console.log(errors);
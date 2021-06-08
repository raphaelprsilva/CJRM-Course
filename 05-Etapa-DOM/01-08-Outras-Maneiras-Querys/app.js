/*---------------------------------------------------
  queries
---------------------------------------------------*/

// Query através de id
const title = document.getElementById('title');
// console.log(title);

// Query através do nome da Classe
const errors = document.getElementsByClassName('error');
// HTMLCollection -> semelhante a um Nodelist
// HTMLCollection -> Não dá para iterar sobre (forEach p.e.)
// console.log(errors);

// Query através da TAG
const paragraphs = document.getElementsByTagName('p');
// Veremos um HTMLCollection com todos os parágrafos
// console.log(paragraphs);


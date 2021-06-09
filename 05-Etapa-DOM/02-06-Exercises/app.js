/*
  01
  - Faça com que o texto do h1 do index.html seja exibido com todas as letras  
    maiúsculas.
*/

// Obtém a referência de h1 e armazena numa 'const'
const title = document.querySelector('h1');

title.textContent = title.textContent.toUpperCase();

// Errei

/*
  02
  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ];

const ul = document.querySelector('ul');

const insertNumberIntoUl = number => {
  ul.innerHTML += `<li class="number">${ number }</li>`
};

numbers.forEach(insertNumberIntoUl);

// Acertei, só fiz diferente, criando uma let = templateHTML

/*
  03
  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

const li = document.querySelectorAll('li');

const changeLiColor = item => {
  const isEven = Number(item.innerText) % 2 === 0;

  if ( isEven ) {
    item.setAttribute('style', 'color: lightblue;');
    return;
  }

  item.setAttribute('style', 'color: pink');
};

li.forEach(changeLiColor);

// Acertei

/*
  04
  - Adicione a classe "body-background" no corpo do index.html;
  P.s: a classe "body-background" já está declarada no style.css.
*/

const body = document.querySelector('body');

// O professor utilizou 'body.classList.add'
body.classList.toggle('body-background');

/*
  05
  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const link = document.querySelector('a');

link.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo');



/*
06
- Exiba o novo valor do atributo href do link no console.
*/


console.log(link.getAttribute('href'));

/*
  07
  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser  
    manipuladas via JS no h1.
*/

console.log(title.style);

/*
  08
  - Remova a classe "body-background", do elemento body.
*/

body.classList.toggle('body-background');

/*
  09
  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

link.classList.toggle('link');
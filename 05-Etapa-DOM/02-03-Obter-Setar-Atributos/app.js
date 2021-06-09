const link = document.querySelector('a');

// Pega o conteúdo do atributo 'href' do link 'a'
// console.log(link.getAttribute('href'));

// Atribui um novo valor para o 'href' do link
link.setAttribute('href', 'https://www.globoesporte.globo.com');

// Altera o texto do link 'a'
link.innerText = 'Globo Esporte';

// Pega o parágrafo no DOM
const paragraph = document.querySelector('p');

// pega o atributo da classe
console.log(paragraph.getAttribute('class'));

// Seta um novo atributo para a 'class', então, ao invés de ser 'error'
// será 'success'
paragraph.setAttribute('class', 'success');

// Setar um atributo que não existe, no caso o 'style'
// Não é algo recomendado, pois se eu fizer um novo setAttribute,
// ele irá sobrescrever o estilo anterior
paragraph.setAttribute('style', 'color: green');

// --------------------------------------------------------------
const h1 = document.querySelector('h1');

h1.setAttribute('style', 'border: 2px solid red;');

// Obteremos um objeto com todas as propriedades CSS do h1
// console.log(h1.style);

console.log(h1.style.border);

// Adiciona um estilo sem sobrescrever o anterior
// Usar o estilo com 'style' é mais eficiente
h1.style.backgroundColor = 'grey';
h1.style.color = 'pink';
h1.style.borderRadius = '5px';


// Quero remover um estilo
h1.style.backgroundColor = '';
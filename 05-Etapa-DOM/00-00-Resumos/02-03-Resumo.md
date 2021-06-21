# Resumo - Etapa 05 - Aula 02-03

## 1. Obtendo e setando atributos

- Existem maneiras de se **pegar** atributos de elementos;

**Exemplo 1**:

~~~javascript
const link = document.querySelector('a');

// Pega o conteúdo do atributo 'href' do link 'a'
console.log(link.getAttribute('href'));
~~~

- Também posso **settar/definir** novos atributos para um elemento;

~~~javascript
const link = document.querySelector('a');

// Atribui um novo valor para o 'href' do link
console.log(link.setAttribute('href', 'https://www.meusite.com'));
~~~

- Eu posso settar/definir um atributo do tipo ``class`` para um elemento;

~~~javascript
// Pega o parágrafo no DOM
const paragraph = document.querySelector('p');

// Mostra o atributo da classe
console.log(paragraph.getAttribute('class')); // 'error'

// Seta um novo atributo para a 'class', então, ao invés de ser 'error'
// será 'success'
paragraph.setAttribute('class', 'success');

console.log(paragraph.getAttribute('class')); // 'success'
~~~

- Settar um atributo em um elemento utilizando o ``settAttribute()``, não é algo recomendado, pois, com o método, iremos sobrescrever, caso já exista algum definido;

- Setando um atributo, sem sobrescrever os demais;

~~~javascript
const h1 = document.querySelector('h1');

// Setando um novo atributo do tipo 'style'
h1.setAttribute('style', 'border: 2px solid red;');

// Obteremos um objeto com todas as propriedades CSS do h1
console.log(h1.style);

console.log(h1.style.border);

// Adiciona um estilo sem sobrescrever o anterior
// Usar o estilo com 'style' é mais eficiente
h1.style.backgroundColor = 'grey';
h1.style.color = 'pink';
h1.style.borderRadius = '5px';


// Quero remover um estilo
h1.style.backgroundColor = '';
~~~

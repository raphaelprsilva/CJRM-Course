# Resumo - Etapa 05 - Aula 02-05

## 1. Obtendo, adicionando, removendo e alterando classes CSS

- Eu consigo adicionar, alterar, obter e remover classes css via JS;

**Exemplo 1**:

~~~javascript
// Captura um elemento 'p'
const paragraph = document.querySelector('p');

// Adiciona uma classe CSS, 'error'
paragraph.classList.add('error');

// Remove uma classe CSS, 'error'
paragraph.classList.remove('error');

// Adiciona uma class CSS, 'success'
paragraph.classList.add('success');

// Posso adicionar duas ou mais classes css, e elas não se sobrescreverão
paragraph.classList.add('new-class-1');
paragraph.classList.add('new-class-2');

// Obtém um DOMTokenlist com as classes do elemento 'p'
console.log(paragraph.classList);
// <p class="success new-class-1 new-class-2">lorem error lorem</p>
~~~

- O ``toggle``, faz com que, quando o elemento não possui uma classe, ele adiciona uma classe, no elemento.;

- Se o elemento já possuir a mesma classe, ele remove;

~~~javascript
const title = document.querySelector('h1');

// Adiciona classe
title.classList.toggle('test');

// Remove classe
title.classList.toggle('test');
~~~

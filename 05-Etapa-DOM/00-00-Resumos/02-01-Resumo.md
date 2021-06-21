# Resumo - Etapa 05 - Aula 02-01

## 1. Adicionando e modificando conteúdo em uma página

- Existem maneiras de se alterar e adicionar o conteúdo em uma página;

- Os elementos, assim que capturados, via ``queries``, possuem algumas propriedades. Podemos citar algumas:
    - ``innerText``;
    - ``textContent``;
    - ``innerHTML``;

**Exemplo 1**: eu posso capturar o elemento, e inserir um texto dentro dentro da tag, dinamicamente;

~~~javascript
const paragraph = document.querySelector('p');

paragraph.innerText += ' Texto inserido';
~~~

**Exemplo 2**: eu posso capturar vários elementos, via ``querySelectorAll()``, e depois alterar o conteúdo destes;

~~~javascript
const allParagraphs = document.querySelectorAll('p');

allParagraphs.forEach((paragraph, index) => {
  paragraph.innerText += ` Novo Texto ${index + 1}`;
});
~~~

**Exemplo 3**: eu posso capturar elemento, via ``querySelector()``, e depois adicionar um elemento em uma ``tag``;

~~~javascript
const div = document.querySelector('.content');

div.innerHTML += `<h2>Novo h2</h2>`;
~~~

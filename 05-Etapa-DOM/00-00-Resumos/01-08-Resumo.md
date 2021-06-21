# Resumo - Etapa 05 - Aula 01-08

## 1. Outras ``queries``

- Existem outras ``queries`` para manipular o **DOM**;
- Entre elas, temos:
    - ``getElementById()``;
    - ``getElementByClassName()``;
    - ``getElementByTagName()``;

~~~HTML
<body>
  <h1 id="title">Query selector & query selector all</h1>

  <div>
    <p>Hello world!</p>
    <p>Oi</p>
    <p class="error">Essa é uma mensagem de erro</p>
  </div>

  <div class="error">Outra mensagem de erro</div>

</body>
~~~

~~~javascript
// Query através de id
const title = document.getElementById('title');
console.log(title);

// Query através do nome da Classe
const errors = document.getElementsByClassName('error');
// HTMLCollection -> semelhante a um Nodelist
// HTMLCollection -> Não dá para iterar sobre (forEach p.e.)
console.log(errors);

// Query através da TAG
const paragraphs = document.getElementsByTagName('p');
// Veremos um HTMLCollection com todos os parágrafos
console.log(paragraphs);

~~~

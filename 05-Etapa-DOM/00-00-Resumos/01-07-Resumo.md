# Resumo - Etapa 05 - Aula 01-07

## 1. ``querySelector`` e ``querySelectorAll``

- Para capturar a referência do objeto que desejamos no **DOM**, é necessário utilizar o objeto ``document``;

- Atrelado ao ``document``, podemos inserir:
    - ``querySelector``;
    - ``querySelectorAll``;

- Então, teríamos algo assim:
    - ``document.querySelector``;
    - ``document.querySelectorAll``;

- Mas isso não é o suficiente. Precisamos inserir um parâmetro dentro dos querys. Por exemplo:
    - ``document.querySelector('h1')``;
    - ``document.querySelectorAll('h1')``;

## 2. Diferença entre ``querySelector`` e ``querySelectorAll``

### 2.1. ``querySelector``

- O ``querySelector()`` retorna apenas um elemento, no caso, aquele passado por parâmetro;

- Se eu quiser "capturar" o elemento ``h1``, eu posso passar a referência deste, na ``querySelector``, e o elemento será retornado.

~~~HTML
<body>
  <h1>Query selector & query selector all</h1>

  <div>
    <p>Hello world!</p>
    <p>Oi</p>
    <p class="error">Essa é uma mensagem de erro</p>
  </div>
</body>
~~~

~~~javascript
const h1 = document.querySelector('h1');

console.log(h1);
// <h1>Query selector & query selector all</h1>
~~~

### 2.1. ``querySelectorAll()``

- O ``querySelectorAll()`` retorna uma **NodeList**;
- Uma **NodeList** não é um array;
- Essa **NodeList** pode ser percorrida por um ``forEach``;

~~~HTML
<body>
  <h1>Query selector & query selector all</h1>

  <div>
    <p>Hello world!</p>
    <p>Oi</p>
    <p class="error">Essa é uma mensagem de erro</p>
  </div>
</body>
~~~

~~~javascript
const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
/*
NodeList(3) [p, p, p.error]
0: p
1: p
2: p.error
length: 3
__proto__: NodeList
*/

// Iterando sobre o NodeList
paragraphs.forEach((paragraph) => console.log(paragraph));
// <p>Hello world!</p>
// <p>Oi</p>
// <p class="error">Essa é uma mensagem de erro</p>
~~~
# Resumo - Etapa 07 - Aula 02-03

## setInterval() e animação da pontuação

- O ``setInterval()`` é semelhante ao ``setTimeout()``. A única diferença, é que o primeiro, executa a ação predefinida, a cada intervalo de tempo especificado. Já o segundo, executa a ação, somente, depois do tempo especificado;
    - Ex.:
~~~javascript
  setInterval(() => {
    console.log ('1 segundo se passou.')}, 1000);
/*
É como se falássemos para a função mostrar a cada 1 segundo, o conteúdo no console.
*/
~~~

  - Como parar o ``setInterval()``?
      - Ex.:

  - Quando a função ``setIntervalo()`` é executada, ela gera um **id único**, então, nós vamos armazenar a chamada da função, em uma variável, para armazenar o **id**;

~~~javascript
const timer = setInterval(() => {
  console.log ('1 segundo se passou.');
}, 1000);
~~~

  - Vamos também, inserir um contador, para incrementar a cada chamada do ``setInterval()``. Também, vamos estipular, que o contador, pare quando desejarmos;

~~~javascript
let counter = 0;

const timer = setInterval(() => {
  console.log ('1 segundo se passou.');
  counter += 1;
}, 1000);
~~~

  - Agora, precisamos definir, quando ele vai parar. E desejamos que ele pare, após 5 segundos;

~~~javascript
let counter = 0;

const timer = setInterval(() => {
  console.log ('1 segundo se passou.');
  counter += 1;

  if (counter === 5) {
    // O que vamos inserir aqui?
  }
}, 1000);
~~~

  - Precisamos inserir uma função que para o ``setInterval()``. A função, é a ``clearInterval()``;
  - Só que a ``clearInterval()`` precisa ter um parâmetro, indicando quando parar;
  - Este parâmetro, será o **id** que a ``setInterval()`` gera, que no caso, é o **timer**;

~~~javascript
let counter = 0;

const timer = setInterval(() => {
  console.log ('1 segundo se passou.');
  counter += 1;

  if (counter === 5) {
    clearInterval(timer);
  }
}, 1000);
~~~

# Resumo - Etapa 03 - Aula 01-03

## Funções

### 1. Function Declaration

-  Com a function declaration, precisamos utilizar a palavra reservada, ``function``, quando formos implementar uma nova função;

~~~javascript
function sayHi() {
  console.log('oi');
}
~~~

### 2. Function Expression

-  Com a function expression, utilizamos uma ``let`` ou uma ``const`` que irá armazenar a nossa função, e depois utilizamos a palavra reservada ``function``, quando formos implementar uma nova função;

~~~javascript
const showFood = function () {
  console.log('pizza');
}
~~~

### 3. Hoisting

- ``Hoisting`` em tradução livre, significa içamento, puxar para cima, elevar;
- Quando utilizo uma '**function declaration**' e invoco a mesma, e, caso ela não esteja no topo do arquivo, por 'baixo dos panos', o JS 'puxa' ela para o topo;
- Já com a '**function expression**', isso não acontece, ou seja, não é feito o 'hoisting';

**Exemplo:** Se eu invocar a função ``sayHi()``, antes de declará-la, o **hoisting** será feito, e 'oi' será exibido no console.

~~~javascript
sayHi();


function sayHi() {
  console.log('oi');
}

// Aqui, o JS fará o hoinsting!
~~~

**Exemplo:** Se eu invocar a função ``showFood()``, antes dela ser declarada, ocorrerá um **ReferenceError**, *"Cannot access 'showFood' before initialization"*, pois, ``showFood()`` foi declarada como uma 'Function Expression".

~~~javascript
showFood();

const showFood = function () {
  console.log('pizza');
}

/* Neste caso, não ocorre o 'hoisting', ou seja,
obteremos um erro! */
~~~

**Observação:** Mantenha sempre a previsibilidade, ou seja, prefira declarar as funções, sempre no topo do código.
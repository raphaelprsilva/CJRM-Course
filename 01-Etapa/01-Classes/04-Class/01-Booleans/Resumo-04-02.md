# Resumo - Etapa 01 - Aula 04-02 e Aula 04-03

## Booleans e Comparações

### 1. ``true`` e ``false``.

- o símbolo ``=`` em JS, significa **atribuição** de valor, por exemplo;
- 
- ``true`` e ``false`` são tipos de dados ou valores, que são comumente utilizados para fazer verificações, se um determinado tipo de comparação, por exemplo, é verdadeira ou falsa;
- Eles são chamados de ``booleans``;

**Exemplo 1**: Vamos utilizar o método ``includes()`` para verificar se o nome ``raphael`` existe na const ``email``. Veja o retorno:

~~~javascript
const email = 'raphael@gmail.com';

const includes = email.includes('raphael');

console.log(includes);

(Retorno: true);
~~~

### 2. Comparações.

- Vamos fazer algumas comparações e ver o resultado delas;

**Exemplo 2**: Comparações com números

~~~javascript
const age = 31;

console.log(age !== 32);
(Lê-se: 'a variável age é estritamente diferente de 32?')
(Retorno: true)

console.log(age === 32);
(Lê-se: 'a variável age é estritamente igual de 32?')
(Retorno: false)

console.log(age > 32);
(Lê-se: 'a variável age é maior do que 32?')
(Retorno: false)

console.log(age >= 31);
(Lê-se: 'a variável age é maior ou igual a 31?')
(Retorno: true)

console.log(age < 31);
(Lê-se: 'a variável age é menor do que 31?')
(Retorno: false)

console.log(age <= 31);
(Lê-se: 'a variável age é menor ou igual a 31?')
(Retorno: true)
~~~

**Exemplo 3**: Comparações com strings

~~~javascript
const name = 'raphael';

console.log(name == 'Raphael');
(Lê-se: 'a variável name é igual à string "Raphael"?')
(Retorno: false)

console.log(name != 'Raphael');
(Lê-se: 'a variável name é igual à string "Raphael"?')
(Retorno: true)

console.log(name === 'Raphael');
(Lê-se: 'a variável name é estritamente igual à string "Raphael"?')
(Retorno: false)

console.log(name === 'raphael');
(Lê-se: 'a variável name é estritamente igual à string "raphael"?')
(Retorno: true)

console.log(name > 'belinha');
(Interpretação: 'Como a string "raphael" começa com a letra "r", o JS, entende que "r" vem depois de "b" no alfabeto, por isso o retorno dessa comparação será true.')
(Retorno: true)

console.log(name > 'Raphael');
(Interpretação: 'Como a string "raphael" começa com a letra "r", o JS, entende que "r" vem antes de "R" no alfabeto, por isso o retorno dessa comparação será true.')
(Retorno: true)
~~~~
# Resumo - Etapa 01 - Aula 02-04

## Métodos de Strings

### 1. Métodos e funções.

- ``Método`` é diferente de ``Função``;
- ``Função``: pedaço de um código que executa uma ação específica;
- ``Método``: É uma função que está associada a um objeto ou um método em particular;

### 2. Métodos de string

#### 2.1 Métodos ``toUpperCase()`` e ``toLowerCase()``

- ``toUpperCase()``: transforma todos os caracteres da ``string`` para "caixa alta";
- ``toLowerCase()``: transforma todos os caracteres da ``string`` para "caixa baixa";
- Os dois métodos abaixo, não alteram o valor original;

Exemplo:
~~~javascript
const fullName = 'Michael Jackson';

console.log(fullName.toUpperCase());
(Retorno: 'MICHAEL JACKSON')

console.log(fullName.toLowerCase());
(Retorno: 'michael jackson')
~~~

#### 2.2. Método ``indexOf()``

- ``indexOf(parametroDesejado)``: retorna o primeiro indíce em que o elemento pode ser encontrado na string;
- Caso não seja encontrado nenhum elemento, o retorno será ``-1``;

~~~javascript
const email = 'meuemail@jackson.com';
console.log(email.indexOf('@'));
(Retorno: '8')

console.log(email.indexOf('y'));
(Retorno: '-1', pois não foi encontrado nenhum 'y' na string)
~~~

#### 2.2. Método ``lastIndexOf()``

- ``indexOf()``: retorna o último indíce em que o elemento pode ser encontrado na string;
- Caso não seja encontrado nenhum elemento, o retorno será ``-1``;

~~~javascript
const email = 'meuemail@jackson.com';
console.log(email.lastIndexOf('a'));
(Retorno: '11')

console.log(email.indexOf('b'));
(Retorno: '-1', pois não foi encontrado nenhum 'b' na string)
~~~

#### 2.2. Método ``slice()``

- "Fatia", "pega um pedaço" da string;
- **Não altera** a string original;
- **Primeiro Argumento**: Aquele que eu desejo iniciar o slice;
- **Segundo Argumento**: Até onde eu desejo fatiar a string;

~~~javascript
const myName = 'Michael Jordan';
console.log(myName.slice(8, 14));
(Retorno: 'Jordan')

- Primeiro parâmetro: '8', ou seja, na letra 'j';
- Segundo parâmetro: '14', ou seja, após a letra 'n';

Alternativa:

console.log(myName.slice(8));
(Retorno: 'Jordan')
- Isso acontece, pois desejamos a última palavra;
~~~

#### 2.2. Método ``replace()``

- Substitui um caractere ou conjunto de caracteres por outro, em uma string;
- Substitui só a **PRIMEIRA OCORRÊNCIA**, neste caso;
- **Não** altera a string original;
- **Primeiro Argumento**: String que eu quero substituir;
- **Segundo Argumento**: O que eu desejo colocar no lugar do que será substituido;

- Caso 1: substituindo o conjunto de caracteres
~~~javascript
const email = 'tomcruise@gmail.com';
const replaceWordAtEmail = myNewEmail.replace('tomcruise', 'bradpity');

console.log(replaceWordAtEmail);
(Retorno: 'bradpity@gmail.com')
~~~

- Caso 2: 
~~~javascript
const email = 'tomcruise@gmail.com';
const replaceWordAtEmail = myNewEmail.replace('tm', 'bradpity');

console.log(replaceWordAtEmail);
(Retorno: 'bradpity@gmail.com')
~~~

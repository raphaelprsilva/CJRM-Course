# Resumo - Etapa 03 - Aula 01-04

## Funções

### 1. Argumentos e Parâmetros

- Quando estamos criando uma função, esta, pode receber, o que comumente, chamamos de **parâmetros**. Veja o exemplo abaixo, para entendermos melhor:

**Exemplo 1:**
~~~javascript
const sumTwoNumbers = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// firstNumber e secondNumber são chamados de parâmetros
~~~

- Agora, quando eu invoco a função, desejando que ela execute aquilo que eu desejo, eu passo para ela, o que, comumente chamamos de, **argumentos**;

**Exemplo 2:**
~~~javascript
const result = sumTwoNumbers(1, 2);

console.log(result); // 3

// '1' e '2' são chamados de argumentos;
~~~

### 2. Default Parameters

- Ao criar uma função, eu posso passar para ela, **parâmetros-padrão**, ou **default parameters**, para a mesma;
- Qual o objetivo de se fazer isso?;
    - Isso é legal de ser feito, para casos onde, se deseja que a função retorne algo, mesmo que alguém, esqueça de passar os parâmetros para a função.

~~~javascript
const myFunc = function (name = 'Estroncio', lastName = 'Almeida') {
  console.log(`Oi, ${ name } ${ lastName }!`);
};
// Para 'name' e 'lastName', forma passados 'Estrôncio' e 'Almeida', como default parameters;

// Se eu invocar a função 'myFunc()', o retorno será:
myFunc(); // 'Olá Estrôncio Almeida'

// Se eu invocar a função 'myFunc()', o retorno será:
myFunc('Raphael', 'Silva'); // 'Olá Raphael Silva'
~~~

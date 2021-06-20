# Resumo - Etapa 03 - Aula 02-02

## Funções

### 1. Arrow Functions

- É uma feature mais recente do JS;
- Foram adicionadas pois, são uma maneira mais simples e fácil de se escrever funções;

**Exemplo 1:**

~~~javascript
// Declarando uma arrow function
const double = number => number * 2;

const result = double(3);

console.log(result); // 6
~~~

**Exemplo 2:**

~~~javascript
// Quando existe mais de um parâmetro, colocar os parêntesis
// Não há a necessidade de se colocar o 'return', nesses casos
const multiplyTwoNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;

const result = multiplyTwoNumbers(3, 3);

console.log(result); // 9
~~~

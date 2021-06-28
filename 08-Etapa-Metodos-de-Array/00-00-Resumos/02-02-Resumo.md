# Resumo - Etapa 08 - Aula 02-02

## Método ``sort``

- É um método de array, que é usado, ordenar os items de um array, de acordo com o desejado;

- Modifica o array original;

- **Array de Strings**;

~~~javascript
const names = ['Raphael', 'Danielle', 'Neide'];

names.sort();

console.log(names);
~~~

- **Array de Números**;

~~~javascript
const scores = [10, 50, 20, 5, 35, 70, 45];

// Se eu fizer assim, os números serão ordenados de maneira DECRESCENTE
scores.sort((number1, number2) => number2 - number1);

// Se eu fizer assim, os números serão ordenados de maneira CRESCENTE
// scores.sort((number1, number2) => number1 - number2);

console.log(scores);
~~~

- **Array de Objetos**;

~~~javascript
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
];

// Ordenará o array de objetos, do maior score, para o menor score
theBigFamily.sort((item1, item2) => item2.score - item1.score);

console.log(theBigFamily);
~~~

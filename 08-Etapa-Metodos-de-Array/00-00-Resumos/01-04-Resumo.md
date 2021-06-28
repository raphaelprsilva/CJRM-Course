# Resumo - Etapa 08 - Aula 01-04

## Método ``reduce``

- É um método de array, que é usado, reduzir um array a qualquer outro tipo de valor;

- Ele vai percorrer cada item do array, vai alterar cada item, conforme nossa orientação, gerando qualquer tipo de valor desejado;

- O array original não é modificado;

~~~javascript
const numbers = [1, 2, 3];

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

// 1ª iteração
// accumulator = 0;
// accumulator + item = 0 + 1 = 1;

// 2ª iteração
// accumulator = 1;
// accumulator + item = 1 + 2 = 3;

// 3ª iteração
// accumulator = 3;
// accumulator + item = 3 + 3;

// sumResult = 6;

console.log(sumResult);
~~~

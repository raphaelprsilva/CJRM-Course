# Resumo - Etapa 08 - Aula 01-02

## Método ``map``

- É um método de array, que é usado, quando se deseja gerar um novo array, com a mesma quantidade de items do array original, só que transformado;

- Ele vai percorrer cada item do array, vai transformar cada item, conforme nossa orientação, gerando um novo array;

- O array original, não é modificado;

~~~javascript
const numbers = [1, 2, 3];

// item - OBRIGATÓRIO
// index - OPCIONAL
// array - OPCIONAL
numbers.map((item, index, array) => {
  // Lógica que eu desejo implementar no array
})
~~~

- Multiplicando por 2, cada número de um array

~~~javascript
const numbers = [1, 2, 3];

const double = numbers.map((item) => item * 2);

console.log(double); // [2, 4, 6]
~~~

- Essa função precisa **SEMPRE** retornar um valor;
# Resumo - Etapa 08 - Aula 01-03

## Método ``filter``

- É um método de array, que é usado, quando se deseja gerar um novo array, dada uma certa condição;

- Ele vai percorrer cada item do array, vai filtrar cada item, conforme nossa orientação, gerando um novo array;

- O array original não é modificado;

- Sempre deve retornar um boolean ao fazer a verificação que desejamos;

~~~javascript
const randomNumbers = [36, 99, 37, 63];

// item - OBRIGATÓRIO
// index - OPCIONAL
// array - OPCIONAL
randomNumbers.filter((item, index, array) => {
  // Lógica que eu desejo implementar no array
})
~~~

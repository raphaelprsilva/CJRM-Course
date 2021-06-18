# Resumo - Etapa 02 - Aula 01-03

## Controle de Fluxo

### 1 - For Loop

- O propósito do loop for é iterar sobre determinados items por 'n' vezes;

Exemplo 1:

~~~javascript
for (let index = 0; index < 5; index++) {
  console.log(`Dentro do loop: ${index}`);
}
// Será exibida a mensagem 'Dentro do loop: 1' 5 vezes
~~~

Exemplo 2:

~~~javascript
let names = ['Linus', 'Ada', 'Bill'];

// O 'loop for', irá iterar a quantidade de items que o array possuí
for (let index = 0; index < names.length; index += 1) {
  console.log(names[index]);
}
~~~
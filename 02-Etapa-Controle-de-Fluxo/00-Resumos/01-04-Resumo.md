# Resumo - Etapa 02 - Aula 01-04

## Controle de Fluxo

### 2 - While Loop

- A única diferença do 'for' para o 'while' é a maneira como são escritas;

Exemplo 1:

~~~javascript
let index = 0;

while (index < 5) {
  console.log(`Dentro do loop: ${index}`);
  index += 1;
}
~~~

Exemplo 2:

~~~javascript
const names = ['Thiago', 'Neves', 'Zezé'];
let index = 0;

while (index < names.length) {
  console.log(names[index]);

  index += 1;
}
~~~
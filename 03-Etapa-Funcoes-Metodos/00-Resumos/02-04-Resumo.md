# Resumo - Etapa 03 - Aula 02-04

## ``forEach`` e Callbacks

### 1. ``forEach``

- O ``forEach`` é um método utilizado em ``arrays``;
- Sua declaração, é da seguinte maneira:
    - Inserir o array, seguido do "``.forEach()``";
    - Dentro do ``forEach``, inserimos uma ``arrow function``;
    - Dentro da ``arrow function``, podemos inserir três parâmetros:
        - 1º - item a ser iterado;
        - 2º - index;
        - 3º - array;


**Exemplo 1:**

~~~javascript
arrayDesejado.forEach((item, index, array) => {
  console.log(item, index, array);
})
~~~

**Exemplo 2:**

~~~javascript
const socialNeworks = ['youtube', 'facebook', 'twitter'];

const logArrayInfo = (socialNework, index, array) => {
  console.log(index, socialNework, array);
};

socialNeworks.forEach(logArrayInfo);
~~~

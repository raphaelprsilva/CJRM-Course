# Resumo - Etapa 02 - Aula 03-02

## Operador Lógico ``Not - (!)``

- O operador lógico ``!``, é usado para negar algo;

Exemplo 1:

~~~javascript
const isUserLoggedIn = false;

// !isUserLoggedIn = true;
if(!isUserLoggedIn) {
  console.log('Você precisa fazer login para continuar');
}
~~~

Exemplo 2:

~~~javascript
console.log(!null); // not null = true
console.log(!undefined); // not undefined = true
console.log(!NaN); // not NaN = true
~~~
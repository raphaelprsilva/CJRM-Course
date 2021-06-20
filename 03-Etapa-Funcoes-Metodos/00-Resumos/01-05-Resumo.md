# Resumo - Etapa 03 - Aula 01-05

## Funções

### 1. Retornando valores

- Funções podem ou não, retornar valores;
- Quando desejamos que elas retornem algo, precisamos inserir a palavra **return** no final do escopo da mesma;

**Exemplo 1:**

~~~javascript
const double = function (number) {
  return number * 2;
};

const result = double(3);

const showResult = function (value) {
  return `O resultado é: ${value}`;
};

console.log(showResult(result)); // O resultado é: 6
~~~

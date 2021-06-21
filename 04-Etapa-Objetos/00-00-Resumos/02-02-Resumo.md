# Resumo - Etapa 04 - Aula 02-02

## Variáveis e escopo de bloco

- Uma variável, pode ter um escopo global ou local;

- Quando eu declaro uma variável em um escopo global, como a ``age``, ela pode ser acessada em outros escopos internos;

- Agora, quando eu declaro uma variável, em um escopo menor, e tento acessar ela, fora do escopo, no caso, um externo, obteremos um erro;

- **Exemplo 1**:

~~~javascript
// 'age' está declarada no 'escopo global'
const age = 31;

if (true) {
  // Esta 'age' pode ser criada dentro deste escopo
  // Ela só pode ser acessada dentro deste escopo local
  const age = 41;
  console.log(`Dentro do 1º bloco de código: ${age}`);

  if (true) {
    const age = 51;
    console.log(`Dentro do 2º bloco de código: ${age}`);
  }
}

console.log(`Fora do 1º bloco de código: ${age}`);
~~~

# Resumo - Etapa 05 - Aula 01-03

## Escopos

- Quando se fala de escopo, se diz sobre a visibilidade da variável, em determinado local (escopo);

- **Exemplo 1**: Eu posso declarar duas funções, com variáveis com o mesmo "nome", porém, elas só serão acessíveis, dentro do escopo de cada função em específico;

~~~javascript
function myFunc() {
  let dog = 'Milo';
  const age = 3;
  let color = 'white';
  console.log(age);
}

function myFunc2() {
  let dog = 'Milo';
  const age = 5;
  let color = 'white';
  console.log(age);
}

myFunc(); // 3
myFunc2(); // 5

/*
Se eu tentar acessar a variável 'cat', fora do escopo ao
qual ela foi declarada, recebemos um erro no retorno;
*/
console.log(cat); // Erro: cat is not defined
~~~

- **Exemplo 2**: Se eu tentar acessar a var ``x``, declarada no ``internal()``, eu não consigo acessar ela, fora do escopo de ``internal()``. Então, o padrão é de fora para dentro ``console.log(x)``;

~~~javascript
const external = () => {
  const book = 'Sapiens';

  const internal = () => {
    let x = 10;
    console.log(book.toUpperCase());
  };

  internal();
};

external();
~~~

- **Observação**: Se eu tentar invocar a função ``internal()`` no escopo global, eu obeterei um erro, pois, eu não tenho acesso a ela, no escopo da função ``external()``.
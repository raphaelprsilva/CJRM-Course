/*---------------------------------------------------
  Escopos
---------------------------------------------------*/

// Diz sobre a visibilidade da variável

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

// myFunc(); // 3
// myFunc2(); // 5
// console.log(cat); // Erro: cat is not defined


const external = () => {
  const book = 'Sapiens';

  const internal = () => {
    let x = 10;
    console.log(book.toUpperCase());
  };

  internal();
  // Se eu tentar acessar a var 'x', declarada no internal, eu
  // não consigo acessar ela, fora do escopo de internal.
  // Então, o padrão é de fora para dentro
  // console.log(x);
};

// Se eu tentar invocar a função internal(), eu obeterei um erro,
// pois, eu não tenho acesso a ela, fora de external.

// internal(); // Erro exibido: internal is not defined
external();

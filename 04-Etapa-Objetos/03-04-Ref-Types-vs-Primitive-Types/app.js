/*---------------------------------------------------
  Tipos Primitivos
---------------------------------------------------*/

/*
  Tipos primitivos (números, strings e undefined, null),
  quando criados e referenciados através de uma variável,
  são armazenados em um local, chamado 'stack'. Isso acon-
  tece, pois são tipos mais simples e menores de dados,
  portanto, são mais fáceis de acessar.
  Então, se eu criar uma variável: let score = 100, depois
  fizer uma cópia dela, assim: let secondScore = score,
  a secondScore será empilhada na 'stack'. Se por acaso, eu
  alterar diretamente o score, fazendo 'score = 200', somente
  o 'score' será alterado.

  O mesmo não ocorre para os tipos de Referência, como por
  exemplo objetos.
  Ex. let userOne = { name: 'Raphael', score: 100 }
    A variável 'userOne' será ARMAZENADA na 'STACK' através
    de um ponteiro, que irá apontar para o 'userOne' no 'heap'.

    Se eu criar uma cópia da userOne, assim: let userTwo = userOne,
    não será feita uma cópia do userOne, apeanas será criado um outro
    ponteiro, apontando para objeto original, no caso, 'userOne'.
    Então, se eu fizer algo como: userOne.score = 10, essa alteração
    irá refletir tanto no userOne, quanto no userTwo, pois, na 'stack',
    apenas o ponteiro está fazendo referência aos objetos.

    Resumindo:
    Ao fazer cópia de um 'Tipo de Referência', estamos apenas fazendo
    uma cópia do ponteiro que aponta para o 'heap'.
*/


// Valores Primitivos

// let scoreOne = 50;

// let scoreTwo = scoreOne;

// console.log(`socreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`socreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);


// Valores de Referência

let userOne = { name: 'Raphael', age: 28 };
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 32;

console.log(userOne, userTwo);


/* ----------------------------------------------
    While Loop
-----------------------------------------------*/

/* ----------------------------------------------
    Exemplo 01 

    A única diferença do 'for' para o 'while' é
    a maneira como são escritas
-----------------------------------------------*/

// let index = 0;

// while (index < 5) {
//   console.log(`Dentro do loop: ${index}`);
//   index += 1;
// }

/* ----------------------------------------------
    Exemplo 02
-----------------------------------------------*/

const names = ['Thiago', 'Neves', 'Zezé'];
let index = 0;

while (index < names.length) {
  console.log(names[index]);

  index += 1;
}

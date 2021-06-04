/* ----------------------------------------------
    For Loop
-----------------------------------------------*/

/*
  Exemplo 01
  -----------------------------------------------
  O propósito do loop for é iterar sobre determinados
  items por 'n' vezes.
*/

// for (let index = 0; index < 5; index ++) {
//   console.log(`Dentro do loop: ${index}`);
// }

/*-----------------------------------------------
  Exemplo 02
-----------------------------------------------*/

let names = ['Linus', 'Ada', 'Bill'];

// for (let index = 0; index < names.length; index += 1) {
//   console.log(names[index]);
// }

/*-----------------------------------------------
  Exemplo 03
-----------------------------------------------*/

for (let index = 0; index < names.length; index += 1) {
  const HTMLTemplate = `<p>${names[index]}</p>`;
  console.log(HTMLTemplate);
}

/*-----------------------------------------------
  Percorrer array = iterar no loop
-----------------------------------------------*/

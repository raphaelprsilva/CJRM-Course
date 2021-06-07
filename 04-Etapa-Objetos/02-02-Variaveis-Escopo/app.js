/*---------------------------------------------------
  Variáveis e escopo de bloco
---------------------------------------------------*/

// Uma variável, pode ter um escopo global ou local;

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







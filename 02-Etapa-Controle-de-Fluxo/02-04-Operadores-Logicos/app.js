/* ----------------------------------------------
    Operadores Lógicos "OU - ||" e "E - &&"
-----------------------------------------------*/

/* ----------------------------------------------
    Exemplo 01
-----------------------------------------------*/

const password = 'oi10';

if (password.length >= 12 && password.includes('1')) {
  console.log('Senha muito forte. 😃');
} else if (password.length >= 8 || password.includes('1')) {
  console.log('Senha forte.');
} else {
  console.log('Sua senha deve conter 8 ou mais caracteres');
}

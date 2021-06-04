/* ----------------------------------------------
    'If-Else' Statement
-----------------------------------------------*/

/* ----------------------------------------------
    Exemplo 01
-----------------------------------------------*/

const password = 'oi1231';

if (password.length >= 12) {
  console.log('Senha muito forte. 😃');
} else if (password.length >= 8) {
  console.log('Essa senha tem 8 ou mais caracteres');
} else {
  console.log('Sua senha deve conter 8 ou mais caracteres');
}

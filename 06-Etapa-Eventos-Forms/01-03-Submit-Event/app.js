/*----------------------------------------------------------------------
 FORMS
----------------------------------------------------------------------*/

/*
  Quando eu quiser atrelar um eventListener em um formulário, eu preciso
  colocá-lo, no form, e não no botão, como estávamos fazendo.
*/

const form = document.querySelector('.signup-form');
const usernameInput = document.querySelector('#username');

form.addEventListener('submit', (event) => {
  // Previne o recarregamento da página, ao enviar o form
  event.preventDefault();

  // É uma maneira de se capturar o que foi digitado pelo usuário
  // no input
  console.log(usernameInput.value);

  // Outra maneira, é através do 'id', presente campo 'input' do 'form'
  // console.log(form.username);

  // Se eu quiser o valor dentro do input, podemos fazer:
  console.log(form.username.value);

  // Se eu substituir o 'id' por 'name', na prop do 'input', eu consigo
  // capturar o valor digitado no 'input'

  // Também consigo capturar o valor do 'input', fazendo assim:
  console.log(event.target.username.value);
});
/*----------------------------------------------------------------------
 RegEx - Regular Expressions
----------------------------------------------------------------------*/

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const isAValidUsername = testUsername(username);

  if (isAValidUsername) {
    feedback.textContent = 'username válido =)';
    return;
  }

  feedback.textContent = 'o Username deve ter entre 6 a 12 caracteres e deve conter apenas letras';

  console.log(username);
});

form.username.addEventListener('keyup', event => {
  const isAValidUsername = testUsername(event.target.value);

  if (isAValidUsername) {
    form.username.setAttribute('class', 'success');
    return;
  }

  form.username.setAttribute('class', 'error');
});

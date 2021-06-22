# Resumo - Etapa 06 - Aula 01-03

## Forms

- Quando eu quiser atrelar um ``eventListener`` em um formulário, eu preciso colocá-lo, no ``form``, e não no botão, como estávamos fazendo;

- **Exemplo 1**

~~~HTML
<form class="signup-form">
    <input type="text" id="username" placeholder="username" autofocus>
    <button>Enviar</button>
  </form>
~~~

~~~javascript
const form = document.querySelector('.signup-form');
const usernameInput = document.querySelector('#username');

form.addEventListener('submit', (event) => {
  // Previne que a página seja recarregada, ao clicar no botão 'enviar'
  event.preventDefault();

  // É uma maneira de se capturar o que foi digitado pelo usuário no input
  console.log(usernameInput.value);

  // Se eu quiser o valor dentro do input, podemos fazer:
  console.log(form.username.value);

  // Também consigo capturar o valor do 'input', fazendo assim:
  console.log(event.target.username.value);
});
~~~
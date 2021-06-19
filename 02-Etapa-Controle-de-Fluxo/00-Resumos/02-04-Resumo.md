# Resumo - Etapa 02 - Aula 02-04

## Operadores Lógicos "OU - ||" e "E - &&"

- Os operadores lógicos, ``e (&&)`` e ``ou (||)``, são bastante utilizados com ``if`` e ``else``;

- A lógica é basicamente essa:
    - "Se uma coisa ``e`` outra coisa forem verdadeiras, faça algo";
    - "Se uma coisa ``ou`` outra coisa forem verdadeiras, faça algo";

Exemplo 1:

~~~javascript
const password = 'oiasd10';

if (password.length >= 12 && password.includes('1')) {
  console.log('Senha muito forte. 😃');
} else if (password.length >= 8 || password.includes('1')) {
  console.log('Senha forte.');
} else {
  console.log('Sua senha deve conter 8 ou mais caracteres');
}
~~~

- Com isso, deixamos ainda mais poderosas as nossas verificações de condições;
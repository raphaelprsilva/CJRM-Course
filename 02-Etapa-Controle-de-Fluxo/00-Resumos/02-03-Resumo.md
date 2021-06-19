# Resumo - Etapa 02 - Aula 02-03

## 'If-Else' Statement

- Com o ``if`` statement, significa basicamente que iremos testar uma condição. Mas agora, vamos adicionar um ``else``.

- ``else`` em tradução livre para o português, significa, **"senão"**, ou seja, *"**se** a condição que eu estabeleci for verdadeira, faça algo, **senão**, faça outra coisa.*";

Exemplo 1: Se a constante ``password`` tiver um comprimento maior que 12, printe no console, **'Senha muito forte. 😃'**, senão se, o comprimento for maior ou igual a 8, printe **'Essa senha tem 8 ou mais caracteres'**, senão printe **'Sua senha deve conter 8 ou mais caracteres'**;

~~~javascript
const password = 'oi1231';

if (password.length >= 12) {
  console.log('Senha muito forte. 😃');
} else if (password.length >= 8) {
  console.log('Essa senha tem 8 ou mais caracteres');
} else {
  console.log('Sua senha deve conter 8 ou mais caracteres');
}
~~~

- Com isso, é possível aninhar vários ``if's`` e ``elses``, e testar muitas condições;

- Mas ao longo do curso, veremos que, essa não é uma prática muito recomendada, em algumas circunstâncias;
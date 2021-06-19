# Resumo - Etapa 02 - Aula 02-02

## 'If' Statement

- O ``if`` statement, significa basicamente que iremos testar uma condição;

- Em tradução livre, ``if`` significa, **"se"**, ou seja, vamos usar ele, pensando na seguinte lógica:

    - "Se a condição for satisfeita, faça algo";

Exemplo 1: Se a constante ``age`` for maior que 18, printe no console, uma mensagem.

~~~javascript
const age = 19;

if (age > 18) {
  console.log('Você tem mais de 18 anos.');
}
~~~

Exemplo 2: Se o comprimento da constante ``soccerPlayers`` for maior ou igual a 4, mostre uma mensagem no console.

~~~javascript
const soccerPlayers = ['Thiago', 'Neves', 'Fala Zezé'];

if (soccerPlayers.length >= 4) {
  console.log('O array tem bastante personagens');
}
~~~

- Podemos testar qualquer tipo de condição em um ``if``;

- Isso nos abre para muitas possibilidades;
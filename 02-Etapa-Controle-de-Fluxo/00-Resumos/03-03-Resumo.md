# Resumo - Etapa 02 - Aula 03-03

## ``break`` e ``continue``

- A expressão ``break`` para a iteração, quando o loop "atinge" o local onde definimos o ``break``;
- A expressão ``continue`` continua a iteração, mas pula a atual, caso seja satisfeita a condição;

Exemplo 1:

~~~javascript
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let index = 0; index < scores.length; index += 1) {

// Se algum item do array for igual a zero, ele "pula" o item
// e não mostra no console, a pontuação
  if (scores[index] === 0) {
    continue;
  }

  console.log(`Sua pontuação foi: ${scores[index]}`);

/* Se algum item do array for igual a 100, "entramos" dentro do if
É exibido no console, a mensagem, e a iteração é pausada, pois
"atingimos nosso objetivo" */
  if(scores[index] === 100) {
    console.log('Parabéns, você atingiu a pontuação máxima');
    break;
  }
}
~~~

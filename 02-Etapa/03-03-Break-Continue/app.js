/* ----------------------------------------------
    'break' e 'continue'
-----------------------------------------------*/

/* ----------------------------------------------
    Exemplo 01
-----------------------------------------------*/

/*
  'break': para a iteração, quando o loop "atinge" a expressão
*/

/*
  'continue': continua a iteração, mas pula a atual, caso seja satisfeita a condição
*/

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let index = 0; index < scores.length; index += 1) {

  if (scores[index] === 0) {
    continue;
  }

  console.log(`Sua pontuação foi: ${scores[index]}`);

  if(scores[index] === 100) {
    console.log('Parabéns, você atingiu a pontuação máxima');
    break;
  }
}

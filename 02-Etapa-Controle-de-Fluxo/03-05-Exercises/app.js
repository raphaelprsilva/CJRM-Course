/*
  01
  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

// console.log(!true, !false);

// Acertei

/*
  02
  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo', 'leão'];

// for (let index = 0; index < animals.length; index += 1) {
//   const desiredAnimal = 'leão';
//   const isNotDesiredAnimal = !animals.includes(desiredAnimal);

//   if(isNotDesiredAnimal) {
//     console.log('Não existe "leão" no array animals.');
//   } else {
//     console.log('Existe um leão no array animals.');
//   }
// }

// Acertei

/*
  03
  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43];
let numbersSum = 0;
const maxValue = 400;

// for (let index = 0; index < randomNumbers.length; index += 1) {
//   if (numbersSum > maxValue) {
//     console.log(`A soma ultrapassou ${maxValue}. Até aqui, o valor atual é ${numbersSum}.`);
//     break;
//   }
//   numbersSum += randomNumbers[index];
// }

// ERREI
// Corrigido


/*
  04
  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.'];

let concatSentence = '';

for (let index = 0; index < sentence.length; index += 1) {

  const wordToVerify = 'certeza';
  const isMatchedWord = sentence[index] === wordToVerify;
  const isIndexEqualLastIndex = index === sentence.length - 1;

  if (isMatchedWord) {
    continue;
  } else if (isIndexEqualLastIndex) {
    concatSentence += sentence[index];
  } else {
    concatSentence += `${sentence[index]} `;
  }
}

// console.log(concatSentence);

// Acertei

/*
  05
  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo as informações corretas:
  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null];

let amountOfStrings = 0;
let firstFourStrings = [];
let amountOfBooleans = 0;
let amountOfIterations = 0;


for (let index = 0; index < randomValues.length; index += 1) {
  const stringValue = randomValues[index];
  const typeIsString = typeof randomValues[index] === 'string';
  const typeIsBoolean = typeof randomValues[index] === 'boolean';

  if (amountOfStrings === 4) {
    break;
  }

  if (typeIsString) {
    firstFourStrings.push(stringValue);
    amountOfStrings += 1;
  }

  if (typeIsBoolean) {
    amountOfBooleans += 1;
  }

  amountOfIterations += 1;
}

let lastItem = firstFourStrings[firstFourStrings.length - 1];
let firstFourItems = firstFourStrings.join(', ').replace(`, ${lastItem}`, ` e ${lastItem}`);

// console.log(`3 informações sobre o array randomValues:
//   - As primeiras 4 strings são ${firstFourItems};
//   - Até que as primeiras 4 strings fossem iteradas, ${amountOfBooleans} booleans foram iterados;
//   - O array foi iterado por ${amountOfIterations} vezes.`);

// Errei
// Corrigido

/*
  06
  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'águaa';
let drinkMessage = null;

switch (drinkType) {
  case 'água':
    drinkMessage = 'Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.';
    break;
  case 'refrigerante':
    drinkMessage = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.';
    break;
  case 'suco':
    drinkMessage = 'Bebida produzida do líquido extraído de frutos.';
    break;
  default:
    drinkMessage = 'Bebida desconhecida.';
}

// console.log(drinkMessage);

// Acertei, só não coloquei a 'drinkMessage'

/*
  07
  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const number = 4;
const numberMessage = 'O valor de "number" é';

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

// switch (number) {
//   case 0:
//     console.log(`${numberMessage} ${number}`);
//     break;
//   case 1:
//     console.log(`${numberMessage} ${number}`);
//     break;
//   default:
//     console.log(`${numberMessage} qualquer número, exceto 0 e 1`);
// }

// Acertei, só faltou refatorar

// Acertos = 5
// Erros = 2
// Total de Questões = 7
// Aproveitamento = 70%
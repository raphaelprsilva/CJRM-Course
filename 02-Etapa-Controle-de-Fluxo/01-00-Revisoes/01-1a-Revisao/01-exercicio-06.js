/*
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!
  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".
    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01
  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/

const fruits = ['morango', 'banana', 'mamão'];

const isAbacaxiIncludedInArray = fruits.includes('abacaxi');
const isPeraIncludedInArray = fruits.includes('pera');
let message = '';

if (isAbacaxiIncludedInArray) {
  message = 'A string "abacaxi" existe no array fruits.';
} else if (isPeraIncludedInArray) {
  message = 'A string "pera" existe no array fruits.';
} else {
  message = 'Nem pera nem abacaxi existem no array "fruits".';
}

// console.log(message);

/*
  02
  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".
  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/

const currentHour = 6;
let dayMessage = '';
const isCurrentHourInMorning = currentHour >= 6 && currentHour <= 11;
const isCurrentHourInEvening = currentHour >= 12 && currentHour <= 17;

if (isCurrentHourInMorning) {
  dayMessage = 'Bom dia!';
} else if (isCurrentHourInEvening) {
  dayMessage = 'Boa tarde!';
} else {
  dayMessage = 'Boa noite!';
}

// console.log(dayMessage);

/*
  03
  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
    armazenada em uma variável;
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/

const myAge = 6;
let showMessage = '';
const isOlderThan7 = myAge > 7;
const isYoungerThan65 = myAge < 65;

if (isOlderThan7 && isYoungerThan65) {
  showMessage = 'A entrada é R$ 30,00.';
} else {
  showMessage = 'Para você, a entrada é grátis!';
}

// console.log(showMessage);

/*
  04
  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];
let numbersBetween11And90 = [];

for (let index = 0; index <= numbers.length; index += 1) {
  const number = numbers[index];
  const isBiggerThan11 = number >= 11;
  const isLowerThan90 = number <= 90;

  if (isBiggerThan11 && isLowerThan90) {
    numbersBetween11And90.push(number);
  }
}

// console.log(numbersBetween11And90);

/*
  05
  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.
  "O crazyArray tem X booleans, X números e X strings."
*/

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false];

let sumOfBooleanElements = 0;
let sumOfNumberElements = 0;
let sumOfStringElements = 0;

for (let index = 0; index < crazyArray.length; index += 1) {
  const arrayItem = crazyArray[index];
  const isArrayItemABoolean = typeof arrayItem === 'boolean';
  const isArrayItemANumber = typeof arrayItem === 'number';

  if (isArrayItemABoolean) {
    sumOfBooleanElements += 1;
  } else if (isArrayItemANumber) {
    sumOfNumberElements += 1;
  } else {
    sumOfStringElements += 1;
  }
}

// console.log(`O crazyArray tem ${sumOfBooleanElements} booleans, ${sumOfNumberElements} números e ${sumOfStringElements} strings.`);

/*
  06
  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.
  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/

const randomNumbers = [73, 4, 67, 10, 31, 58];
let evenNumbers = [];
let oddNumbers = [];

for (let index = 0; index < randomNumbers.length; index += 1) {
  const number = randomNumbers[index];
  const isAOddNumber = number % 2 === 1;

  if (isAOddNumber) {
    oddNumbers.push(number);
  } else {
    evenNumbers.push(number);
  }
}

const lastOddItem = oddNumbers[oddNumbers.length - 1];
const oddArrayItems = oddNumbers.join(', ').replace(`, ${lastOddItem}`, ` e ${lastOddItem}`);
const lastEvenItem = evenNumbers[evenNumbers.length - 1];
const evenArrayItems = evenNumbers.join(', ').replace(`, ${lastEvenItem}`, ` e ${lastEvenItem}`);
const numbersMessage = `Números ímpares: ${oddArrayItems}.
Números pares: ${evenArrayItems}.`;

console.log(numbersMessage);

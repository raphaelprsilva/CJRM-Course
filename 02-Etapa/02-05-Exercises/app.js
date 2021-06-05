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

// const fruits = ['morango', 'banana', 'mamão'];

// if (fruits.includes('abacaxi')) {
//   console.log(`A string "abacaxi" existe no array  
//   fruits."`);
// } else if (fruits.includes('pera')) {
//   console.log(`A string "pera" existe no array  
//   fruits."`);
// } else {
//   console.log('Nem pera nem abacaxi existem no array "fruits".');
// }

// ACERETEI - 01

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

// const currentHour = 18;
// const isMorning = currentHour >= 6 && currentHour < 12;
// const isAfeternoon = currentHour >= 12 && currentHour < 18;

// if (isMorning) {
//   console.log('Bom dia!');
// } else if (isAfeternoon) {
//   console.log('Boa tarde!');
// } else {
//   console.log('Boa noite!');
// }

// ACERETEI - 02

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

// const myAge = 31;
// let priceMessage = null;
// const isLowerThan7 = myAge <= 7;
// const isBiggerThan65 = myAge >= 65;

// if (isLowerThan7 || isBiggerThan65) {
//   priceMessage = 'Para você, a entrada é grátis!';
// } else {
//   priceMessage = 'A entrada é R$ 30,00.';
// }

// console.log(priceMessage);

// ACERETEI - 03

/*
  04
  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

// const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];
// const numbersBetween11And90 = [];

// for (let index = 0; index < numbers.length; index += 1) {
//   const number = numbers[index];
//   const isNumberBetween11And90 = number >= 11 && number <= 90;
//   if (isNumberBetween11And90) {
//     numbersBetween11And90.push(numbers[index]);
//   }
// }

// console.log(numbersBetween11And90);

// ACERETEI - 04

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

// const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false];
// let booleans = 0;
// let numbers = 0;
// let strings = 0;

// for (let index = 0; index < crazyArray.length; index += 1) {
//   let typeOfCrazyArrayItem = typeof crazyArray[index];
//   const isItemABoolean = typeOfCrazyArrayItem === 'boolean';
//   const isItemANumber = typeOfCrazyArrayItem === 'number';

//   if (isItemABoolean) {
//     booleans += 1;
//   } else if (isItemANumber) {
//     numbers += 1;
//   } else {
//     strings += 1;
//   }
// }

// console.log(`O crazyArray tem ${booleans} booleans, ${numbers} números e ${strings} strings.`);

// ACERETEI - 05

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
const oddNumbers = [];
const evenNumbers = [];

for (let index = 0; index < randomNumbers.length; index += 1) {

  const number = randomNumbers[index];
  const isEvenNumber = number % 2 === 0;

  if(isEvenNumber) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
}

const evenNumbersString = oddNumbers.join(', ').replace(', 3', ' e 3');

const oddNumbersString = evenNumbers.join(', ').replace(', 5', ' e 5');

console.log(`Numeros ímpares: ${evenNumbersString}. Números pares: ${oddNumbersString}.`);


// ERREI - 05
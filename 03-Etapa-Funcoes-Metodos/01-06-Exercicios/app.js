/*
  01
  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

// function multiplyTwoNumbers (firstNumber = 0, secondNumber = 0) {
//   return firstNumber * secondNumber;
// }

// const result = multiplyTwoNumbers(2, 2);

// console.log(result);

// Acertei


/*
  02
  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

// const divideTwoNumbers = function (firstNumber = 0, secondNumber = 1) {
//   return firstNumber / secondNumber;
// };

// const result = divideTwoNumbers(9, 3);

// console.log(result);

// Acertei

/*
  03
  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().
  "Esta é a Xª vez que essa string é exibida."
*/

const showParameter = function (value = 'Você deve passar um valor como argumento') {
  console.log(value);
}

const show7Times = function(callback) {

  let message = null;

  for (let index = 1; index <= 7; index += 1) {
    message = `Esta é a ${index}ª vez que esta string é exibida`;
    callback(message);
  }
}

// show7Times(showParameter);

// Acertei

/*
  04
  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail'];

const transformToUpperCase = function (arrayParameter = []) {

  const itemsUpperCase = [];

  for (let index = 0; index < arrayParameter.length; index += 1) {
    const wordInUpperCase = arrayParameter[index].toUpperCase();
    itemsUpperCase.push(wordInUpperCase);
  }

  return itemsUpperCase;
}

// const myResult = transformToUpperCase(millennialWords);

// console.log(myResult);

// Acertei

/*
  05
  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.
  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

const positiveNumber = function (arrayWithNumbers) {
  let positiveNumbers = 0;
  let negativeNumbers = 0;

  for (let index = 0; index < arrayWithNumbers.length; index += 1) {
    const isPositiveNumber = arrayWithNumbers[index] > 0;
    if (isPositiveNumber) {
      positiveNumbers += 1;
    } else {
      negativeNumbers += 1;
    }
  }

  const message = `O array "randomNumbers" possui ${arrayWithNumbers.length} números, sendo ${positiveNumbers} positivos e ${negativeNumbers} negativos.`;

  return message;
}

// const myPositiveNumbers = positiveNumber(randomNumbers);

// console.log(myPositiveNumbers);

// Acertei


/*
  06
  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const getOddNumbers = function (arrayWithNumbers) {

  let oddNumbers = [];

  for (let index = 0; index < arrayWithNumbers.length; index += 1) {
    const number = arrayWithNumbers[index];
    const isOddNumber = number % 2 !== 0;

    if (isOddNumber) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
}

const odd = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]);

// console.log(odd);

// Acertei

/*
  07
  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
];

const showPhrase = function (array) {

  let myPhrase = '';

  for (let index = 0; index < array.length; index += 1) {
    const string = `${array[index]()} `;
    myPhrase += string;
  }

  return console.log(myPhrase);
}

// showPhrase(functions);
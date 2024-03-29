/*
  01

  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do 
    seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário 
    do GitHub.
*/

const fetchGithubUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const userData = await response.json();
  return userData;
};

const logUserData = async (userName) => {
  const userData = await fetchGithubUserData(userName);
  console.log('userData:', userData);
};

// logUserData('raphaelprsilva');

/*
  02

  - A partir do array numbers (abaixo), crie um novo array que contém somente 
    os números do array numbers que são divisíveis por 2 ou 3;
  - Exiba esse novo array no console.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getDivisible = (number, divisor) => number % divisor === 0

const getNumbersDivisibleBy2Or3 = (number) =>
  getDivisible(number, 2) || getDivisible(number, 3);

const numbersDivisibleBy2And3 = numbers.filter(getNumbersDivisibleBy2Or3)

// console.log('numbersDivisibleBy2And3:', numbersDivisibleBy2And3);

/*
  03

  - Declare um array no qual cada item desse array seja uma sílaba do seu nome.
  - A partir desse array, gere o seu nome usando a "língua do 'P'";
  - A língua do "P" é uma brincadeira onde você coloca a letra "P" antes de 
    cada sílaba de uma palavra falada, como se você estivesse falando em 
    código;
  - Exemplos de nomes na "língua do 'P'":
    - Roger => "PRoPger";
    - Natália => "PNaPtáPlia";
    - Rafaela => "PRaPfaPePla".
*/

const nameLetters = ['Na', 'tá', 'lia'];
const raphaelName = ['ra', 'pha', 'el'];

const getNewName = (array) =>
  array.reduce((accumulator, silaba) => {
    accumulator += 'P' + silaba;
    return accumulator;
  }, '');

// console.log(getNewName(raphaelName))

/*
  04

  - Declare uma constante que receba seu primeiro nome;
  - Exiba no console todas as letras do seu nome separadas, com a seguinte
    mensagem: '"LETRA" é a POSIÇÃOª letra do meu nome.';
  - Por exemplo, se o nome é "Roger", as mensagens exibidas no console devem 
    ser:
      - "R" é a 1ª letra do meu nome;
      - "o" é a 2ª letra do meu nome;
      - E assim por diante, até a última letra.

  Dica: pesquise pelo método split.
*/


const myName = 'raphael';

// console.log(myName.split(''))

const getLettersPosition = (name) => {
  const nameAsArray = name.split('');
  return nameAsArray.reduce((accumulator, letter, index) => {
    accumulator += `- "${letter}" é a ${index + 1}ª letra do meu nome;\n`
    return accumulator;
  }, '')
};

// console.log(getLettersPosition(myName));

/*
  05

  - Crie um objeto com as seguintes propriedades e tipos de valores:
    - name: String
    - lastname: String
    - age: Number
  - Exiba no console, em um array, todas as propriedades do objeto acima;
  - Não use nenhuma estrutura de repetição, nem crie o array manualmente.

  Dica: pesquise pelo método Object.keys().
*/

const obj = {
  name: 'Raphael',
  lastName: 'Silva',
  age: 28,
};

const objProperties = Object.keys(obj);

// console.log(objProperties);

/*
  06

  - Implemente uma função que retorna as ocorrências de um determinado valor em 
    um array;
  - A função deve receber um array como 1º argumento e o valor a ser buscado no 
    array como 2º argumento;
  - Exemplo: se na invocação da função o array [1, 2, 3, 1] é passado como 1º 
    argumento e o número 1 é passado como 2º argumento, a função deve retornar 
    2, pois há duas ocorrências do número 1 no array;
  - Utilize o array abaixo para testar a função.
*/

const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60];

const getFrequencyNumber = (array, valueToFind) => {
  return array.reduce((accumulator, number) => {
    number === valueToFind ? accumulator += 1 : accumulator
    return accumulator;
  }, 0)
};

// console.log(getFrequencyNumber(scores, 100));

/*
  07

  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método  
    filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];
    - filter([0, 1, 2], item => item) // [1, 2];
    - filter([1, 2, 3], item => item < 2) // [1];
    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
    - filter([1, 2, 3, 2, 1, 5], (item, index, array) =>
        index === array.indexOf(item)) // [1, 2, 3, 5];
  - Utilize os casos acima para testar sua função;
  - Se você não se lembra como o método filter funciona, há 2 opções:
    1) Reassistir à aula "O método filter" - Aula 01-03 da etapa 08;
    2) Pesquisar no MDN.
  
  Dica: lembre-se que o método filter inclui o item em questão no novo array 
  que está sendo gerado **apenas** se a função retorna um valor truthy.
*/

const filter = (array, callback) => {
  let newArray = [];
  
  array.forEach((item, index, array) => {
    callback(item, index, array) ? newArray.push(item) : null
  })

  return newArray;
};

console.log(filter([1, 2, 3], item => item < 2));
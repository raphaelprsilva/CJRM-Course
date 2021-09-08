/*
  01

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/

localStorage.clear();

const userData = {
  name: 'Raphael',
  lastName: 'Silva',
  age: 28,
};

const stringfiedUserData = JSON.stringify(userData);

localStorage.setItem('userData', stringfiedUserData);


const getItemFromLocalStorage = (key) => {
  const localStorageItem = localStorage.getItem(key);
  return JSON.parse(localStorageItem);
};

// console.log(getItemFromLocalStorage('userData'));

/*
  02

  - Mesmo com um input type="number", a expressão `event.target.value` abaixo 
    resulta em uma string;
  - Exiba, no console, o valor que foi inserido no input;
  - O exibido valor deve ser do tipo number;
  - Não utilize a invocação da Number() ou qualquer outro método que converta 
    strings em number.

  Dica: pesquise por valueAsNumber.
*/

const input = document.querySelector('[data-js="input"]');

input.addEventListener('input', event => {
  console.log(event.target.valueAsNumber)
});

/*
  03

  - Implemente uma função 'combineOperations' que recebe 2 parâmetros:
    - Um valor inicial, do tipo number;
    - Um array de funções.
  - A combineOperations deve: 
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 1ª função para a 2ª função, e 
      assim por diante. Até que cada função do array tenha sido invocada;
    - Retornar o valor que a invocação da última função do array retornou.
  - Descomente o código abaixo. A primeira invocação da combineOperations deve 
    retornar 60 e a segunda invocação, 10.
*/

const add100 = (num) => num + 100;
const divByFive = (num) => num / 5;
const multiplyByThree = (num) => num * 3;
const multiplyFive = (num) => num * 5;
const addTen = (num) => num + 10;

const combineOperations = (initialValue, funcArray) => {
  // Primeira resolucao
  // const [funcOne, funcTwo, funcThree] = funcArray;
  // const resultFuncOne = funcOne(initialValue); // 100
  // const resultFuncTwo = funcTwo(resultFuncOne); // 20
  // const resultFuncThree = funcThree(resultFuncTwo); // 60
  // return resultFuncThree;

  // Segunda resolucao
  const finalResult = funcArray.reduce((accumulator, func) => {
    return func(accumulator);
  }, initialValue);

  return finalResult;
};


// console.log(combineOperations(0, [add100, divByFive, multiplyByThree]))
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))

/*
  04

  - O código abaixo não está funcionando. Descubra o que ele está tentando 
    fazer e refatore-o.
*/

const albums = [
  {
    id: 537,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 59.90,
    genre: 'Progressive Rock'
  },
  {
    id: 975,
    title: 'Houses of the Holy',
    artist: 'Led Zeppelin',
    price: 81.00,
    genre: 'Rock'
  },
  {
    id: 359,
    title: 'Heaven and Hell',
    artist: 'Black Sabbath',
    price: 49.90,
    genre: 'Heavy metal'
  }
]

const searchAlbum = {
  id: 975,
  title: 'Houses of the Holy',
  artist: 'Led Zeppelin',
  price: 81.00,
  genre: 'Rock'
}

const searchAlbumExistsInArray = albums.some((album) => album.id === searchAlbum.id)

if (searchAlbumExistsInArray) {
  console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)
}

/*
  05

  - Baseado no que foi mostrado na aula passada, faça uma cópia do `obj`.
*/

const obj = {
  prop1: 'a',
  prop2: 'b',
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: 'x', b: 'y' },
};

// const newObj = {...obj};

obj.prop1 = 'x';

// Ao fazer isto, vemos que tanto no obj quanto no newObj, temos a propriedade
// 'a' modificada. Isso significa, que o spread operator, faz uma cópia rasa.
// Se eu tentar modificar a propriedade de um objeto, eu não conseguirei (desta maneira)
// pois, ele apenas é apontado para o local modificado
// obj.prop8.a = 'x modificado';

// Para realmente modificar a prop8, apenas do obj, eu preciso fazer isso:
const newObj = {
  ...obj,
  prop6: [
    obj.prop6[0],
    { ...obj.prop6[1]}
  ],
  prop8: {
    ...obj.prop8,
  },
};

obj.prop8.a = 'x modificado';
obj.prop6[1].x = 'modifiquei';

console.log('obj:', obj);
console.log('newObj:', newObj);

/*
  06

  - Implemente uma função que cria e retorna um elemento HTML;
  - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os 
    atributos que o elemento deve conter;
  - A quantidade de atributos que o elemento irá conter pode variar.

  Dica: pesquise por Object.entries.
*/

const createHTMLElement = (element, properties) => {
  const convertedProperties = Object.entries(properties);
  const createdElement = document.createElement(element);
  // console.log('convertedProperties:', convertedProperties);
  // console.log('createdElement:', createdElement);

  convertedProperties.forEach((convertedProperty) => {
    convertedProperty.forEach((a, b, array) => {
      createdElement.setAttribute(array[0], array[1])
    })
  });

  return createdElement;
};

const properties = {
  alt: 'Carro',
  src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2047&q=80'
};

console.log(createHTMLElement('img', properties))

/*
  07

  - Na weather app, faça com que quando o usuário recarregar a página ou sair 
    da aplicação e voltar, as informações da última cidade pesquisada sejam 
    exibidas na interface.
*/
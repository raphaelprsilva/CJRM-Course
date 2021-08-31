/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log('request.responseText: ', request.responseText);
//     return;
//   }

//   if (request.readyState === 4) {
//     console.log('Não foi foissível obter os dados do pokemon');
//   }
// });

// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu');
// request.send();

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const me = {
  name: 'Raphael',
  lastName: 'Silva',
  sex: 'Male',
  age: 28,
  height: 1.71,
  weigth: 75,
  walking: false,
  walkedMetters: 0,
};

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

// ! Não consegui desestruturar o objeto no método;
me.increaseAge = () => {
  me.age += 1;
};

me.increaseAge();
me.increaseAge();
me.increaseAge();
me.increaseAge();
me.increaseAge();

console.log('me.age:', me.age); // Ainda está exibindo 28, na idade. Por que?

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

me.increaseWalkedMetters = (walkedDistance) => {
  me.walking = true;
  me.walkedMetters += walkedDistance;
};

me.increaseWalkedMetters(1)
me.increaseWalkedMetters(2)
me.increaseWalkedMetters(3)
me.increaseWalkedMetters(4)

console.log('me.walkedMetters:', me.walkedMetters);

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const singularOrPluralMessage = (property, comparison, singular, plural) =>
  property === comparison ? singular : plural;

me.personalInfos = () => {
  const singularOrPluralSex = singularOrPluralMessage(me.sex, 'Male', 'o', 'a');
  const singularOrPluralYears = singularOrPluralMessage(me.age, 1, 'ano', 'anos');
  const meters = singularOrPluralMessage(me.height, 1, 'metro', 'metros');
  const correctWalkedMetters = singularOrPluralMessage(me.walkedMetters, 1, 'metro', 'metros');
  return console.log(`Oi. Eu sou ${singularOrPluralSex} ${me.name} ${me.lastName}, tenho ${me.age} ${singularOrPluralYears}, ${me.height} ${meters} de altura, peso ${me.weigth} quilos e, só hoje, eu já caminhei ${me.walkedMetters} ${correctWalkedMetters}.`)
};

// me.personalInfos();

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const checkTruthyAndFalsy = (value) => {
  const falsyValues = [false, 0, -0, 0n, '', null, undefined, NaN];
  return falsyValues.includes(value) ? 'falsy value' : 'truthy value';
};

// console.log(checkTruthyAndFalsy(undefined));

// * Outra maneira de se fazer

const isTruthy = (value) => Boolean(value);

// console.log(isTruthy(null));

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const booksFunc = (bookName) => {
  const obj = {
    'book1': {
      pages: 10,
      author: '1asd',
      editora: '1asd',
    },
    'book2': {
      pages: 20,
      author: '2asd',
      editora: '2asd',
    },
    'book3': {
      pages: 30,
      author: '3asd',
      editora: '3asd',
    },
  };

  return bookName ? obj[bookName] : obj;
};

console.log(booksFunc('book2'));
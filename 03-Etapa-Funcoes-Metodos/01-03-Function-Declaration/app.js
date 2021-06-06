/*---------------------------------------------------
  Functions
---------------------------------------------------*/

// ----------Function declaration---------------------

function sayHi() {
  console.log('oi');
}

// Invocando uma função;
// sayHi();

// ---------------------------------------------------


// ---------------Function expression-----------------

const showFood = function () {
  console.log('pizza');
}

// showFood();

// ---------------------------------------------------

/* -------------------Hoisting------------------------
  - Hoisting -> Içamento, puxar para cima, elevar
  - Quando utilizo uma 'function declaration' e invoco
  a mesma, e, caso ela não esteja no topo do arquivo,
  por 'baixo dos panos', o JS 'puxa' ela para o topo
  - Já com a 'function expression', isso não acontece,
  ou seja, não é feito o 'hoisting'


  Ex. 1: Se eu chamar a função sayHi(), antes de
    declará-la, o hoisting será feito, e 'oi' será
    exibido no console.

    ------------------------------------------------
    sayHi();


    function sayHi() {
      console.log('oi');
    }

    Aqui, o JS fará o hoinsting!
    ------------------------------------------------

  Ex. 2: Se eu invocar a função showFood(), antes
    dela ser declarada, ocorrerá um ReferenceError,
    "Cannot access 'showFood' before initialization",
    pois, showFood() foi declarada como uma 'Function
    Expression".

    ------------------------------------------------
    showFood();

    const showFood = function () {
      console.log('pizza');
    }

    Neste caso, não ocorre o 'hoisting', ou seja,
    obteremos um erro!
    ------------------------------------------------

    * Mantenha sempre a previsibilidade, ou seja,
      prefira declarar as funções, sempre no topo
      do código.

----------------------------------------------------*/
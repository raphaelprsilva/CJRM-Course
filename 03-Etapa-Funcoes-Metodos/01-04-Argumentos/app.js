/*---------------------------------------------------
  Functions - Argumentos
---------------------------------------------------*/

const myFunc = function (name = 'Estroncio', lastName = 'Almeida') {
  console.log(`Oi, ${ name } ${ lastName }!`);
};

// name e lastName = parâmetros

// 'Raphael' e 'Silva' -> argumentos
// Estes argumentos ('Raphael' e 'Silva'), sobrescrevem os default parameters
myFunc('Raphael', 'Silva');

// Se eu chamar uma função sem argumentos, mas definir parâmetros default
// os default paramters, serão executados como o padrão estabelecido
myFunc();
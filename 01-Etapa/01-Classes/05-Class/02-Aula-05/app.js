// --------------------------------------------------------------------------
// Inteiros e Decimais
// --------------------------------------------------------------------------
const radius = 10;
const pi = 3.14;

// --------------------------------------------------------------------------
// Operadores Aritméticos
// --------------------------------------------------------------------------
const area = pi * radius ** 2;
console.log(area);


// --------------------------------------------------------------------------
// Ordem de Operações
// --------------------------------------------------------------------------
// Precedência de Operações
// 1º - Parênteses
// 2º - Expoentes ou raízes
// 3º - Multiplicação e divisão
// 4º - Adição e subtração

const crazyOperation = 5 / (4 - 2) ** 2;
console.log(crazyOperation);

// --------------------------------------------------------------------------
// Operadores de Incremento e Decremento
// --------------------------------------------------------------------------
let postLikes = 10;

// postLikes = postLikes + 1;
// postLikes += 1;
// postLikes++;

// postLikes = postLikes - 1;
// postLikes -= 1;
// postLikes--;

console.log(postLikes);

// --------------------------------------------------------------------------
// Operadores Addition, Subtraction, Multipplication e Division Assignment
// --------------------------------------------------------------------------
// postLikes = postLikes + 10;
// postLikes += 10;

// postLikes = postLikes - 10;
// postLikes -= 10;

// postLikes = postLikes * 10;
// postLikes *= 10;

// postLikes = postLikes / 10;
postLikes /= 10;
console.log(postLikes);

// --------------------------------------------------------------------------
// NaN - Not a Number
// --------------------------------------------------------------------------
// Este resultado é exibido, quando se tenta fazer uma operação
// que não faz sentido
console.log(7 / 'oi');

// --------------------------------------------------------------------------
// Concatenação de String com Number
// --------------------------------------------------------------------------
const likesMessage = 'O post tem ' + postLikes + ' likes.';
console.log(likesMessage);

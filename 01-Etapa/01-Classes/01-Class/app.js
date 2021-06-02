// Variáveis

// São utilizadas para armazenar 'valores'

// Utilizando o 'let'
let age = 31; // age recebe 31
let currentYear = 2021; // 'currentYear' recebe 2021

// Serão exibidos no console, os valores de age e currentYear
console.log('age:', age, ' ', 'currentYear:', currentYear);

// Na linha 13, o valor foi atualizado para '25'
age = 25;
console.log('"Nova" age atualizada:', age);


// Utilizando o 'const'
// O 'const' é uma constante, ou seja, ela não é alterada

const points = 100;

// Ao tentar reatribuir um valor para uma constante
// e tentar exibir essa mudança no console, o browser
// mostrará um erro, pois é uma 'CONSTANTE', e eu não
// posso alterá-la

// Linhas 28 e 29 comentadas para não exibir o erro
// points = 101;
// console.log(points);


// 'const' e 'let' são features recentes do JS
// Antes era possível, apenas fazer isso com 'var'

// CONVENÇÕES

// Comentar em estilo camelCase
// Dê nomes significativos às variáveis, para fácil compreensão
// Não utilize palavas reservadas do JS
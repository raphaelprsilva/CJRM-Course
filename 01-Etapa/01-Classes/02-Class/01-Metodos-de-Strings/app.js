// Strings
console.log('Hello my friends 🚀');

const email = 'raphael@gmail.com';
console.log(email);

// Concatenação de Strings
const firstName = 'Raphael';
const lastName = 'Silva';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

// Acessando caracteres
console.log(fullName[2]);

// Comprimento de uma string
console.log(fullName.length);

// --------------------------------------------------------------------------
// Métodos e funções
// --------------------------------------------------------------------------
// Método != Função
// Função: pedaço de um código que executa uma ação específica
// Método: É uma função que está associada a um objeto ou um método em particular

// --------------------------------------------------------------------------
// Métodos de string
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// Método toUpperCase() e toLowerCase()
// --------------------------------------------------------------------------

// Os dois métodos abaixo, não alteram o valor original
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// --------------------------------------------------------------------------
// Método indexOf()
// --------------------------------------------------------------------------

// Busca a posição do arroba na string email
const index = email.indexOf('@');
console.log(index);

// --------------------------------------------------------------------------
// Método lastIndexOf()
// --------------------------------------------------------------------------
// Obtém o index da última ocorrencia do argumento passado
const myEmail = 'raphaelpr@gmail.com';
const lasIndexOfMyEmail = myEmail.lastIndexOf('a');
console.log(lasIndexOfMyEmail);

// --------------------------------------------------------------------------
// Método slice()
// --------------------------------------------------------------------------
// Fatia, pega um pedaço da string
// Não altera a string original
// Primeiro Argumento: Aquele que eu desejo iniciar o slice
// Segundo Argumento: Até onde eu desejo fatiar a string
const myName = 'Raphael Silva';
const mySlicedName = myName.slice(8, 15);
console.log(mySlicedName);

// --------------------------------------------------------------------------
// Método replace()
// --------------------------------------------------------------------------
// Substitui um caractere por outro, em uma string
// Substitui só a PRIMEIRA OCORRÊNCIA, neste caso
// Não altera a string original
// Primeiro Argumento: String que eu quero substituir
// Segundo Argumento: O que eu desejo colocar no lugar do que será substituido
const myNewEmail = 'tomcruise@gmail.com';
const emailReplace = myNewEmail.replace('tomcruise', 'bradpity');
console.log(emailReplace);

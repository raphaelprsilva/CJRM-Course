// --------------------------------------------------------------------------
// Template Strings
// --------------------------------------------------------------------------
const postTitle = 'É bolacha ou biscoito?';
const postAuthor = 'Raphael Silva';
const postComments = 15;

// --------------------------------------------------------------------------
// Usando concatenação
// --------------------------------------------------------------------------
// const postMessage = 'O post \'' 
//   + postTitle 
//   + '\' do ' 
//   + postAuthor + ' tem ' + postComments + ' comentários.';

// console.log(postMessage);

// --------------------------------------------------------------------------
// Usando Template Strings
// --------------------------------------------------------------------------
// const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários`;

// console.log(postMessage);

// --------------------------------------------------------------------------
// Usando Templates HTML
// --------------------------------------------------------------------------
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`;

console.log(html);


const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
];

// Obter só os livros acima de 20
const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(({ name, price }) => 
    `O preço do livro "${name}" caiu para R$${price}`);


// Gerar uma string com os nomes e preços
// const nameAndPriceBooks = booksAbove20.reduce((accumulator, book) => {
//   return accumulator += `${book.name} - Preço: ${book.price}\n`;
// }, '');

console.log(booksOnSale);
console.log({books, booksOnSale});
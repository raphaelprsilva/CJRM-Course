const paragraph = document.querySelector('p');

// paragraph.innerText += ' Texto inserido';

const allParagraphs = document.querySelectorAll('p');

// allParagraphs.forEach((paragraph, index) => {
//   paragraph.innerText += ` Novo Texto ${index + 1}`;
// });

const div = document.querySelector('.content');

// div.innerHTML += `<h2>Novo h2</h2>`;

const people = ['Raphael', 'Rodrigo', 'Marcos'];

people.forEach(person => {
  div.innerHTML += `<p>${person}</p>`;
});

// getters setters
// get -> obtém um valor
// set -> estabelece 
// innerHTML -> é um getter e um setter, pois ela pega e seta valores
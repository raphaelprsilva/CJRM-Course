// const paragraph = document.querySelector('p');

// Obtém um DOMTokenlist com as classes do elemento 'p'
// console.log(paragraph.classList);

// paragraph.classList.add('error');
// paragraph.classList.remove('error');
// paragraph.classList.add('success');

// Vou receber um NodeList, por isso, posso iterar sobre ele
const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

// Poderia usar o 'textContent', no lugar de 'innerText'
// pois a 'innerText', captura apenas o texto visível

paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error');
  }
  if (paragraph.textContent.includes('success')){
    paragraph.classList.add('success');
  }
})


const title = document.querySelector('h1');

// o 'toggle', faz com que, quando o elemento não possui uma classe
// ele adiciona uma classe, no elemento. Se o elemento já possuir
// uma classe, outra é adicionada

// Adiciona classe
title.classList.toggle('test');

// Remove classe
title.classList.toggle('test');
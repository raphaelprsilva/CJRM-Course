const article = document.querySelector('article');

// Se eu fizer um 'article.children', vou receber um 'HTMLCollection'
// Com o 'HTMLCollection', eu não consigo iterar com um 'forEach'
// Para isso, eu preciso converter o 'HTMLCollection' em um 'NodeList'

// Como fazer isso?
// Da maneira abaixo:

// Array.from(article.children)


// Essa invocação não é destrutiva, ou seja, não altera o valor original

// Array.from(article.children).forEach(element => {
//   element.classList.add('article-element');
// })



// Descobrindo através do 'h2', quem é o pai dele

const title = document.querySelector('h2');

// console.log(title.parentElement);

// Descobrindo quem é o próximo irmão de 'h2'
console.log(title.nextElementSibling);

// Descobrindo quem é o irmão anterior de 'h2'
// Recebemos um 'null', pois não existe um elemento irmão anterior
console.log(title.previousElementSibling);


# Resumo - Etapa 05 - Aula 03-02

## 1. Parents and Siblings

- Se eu capturar um objeto, este pode ter ``(parents) pais`` e ``(siblings) filhos``;

**Exemplo 1**:

~~~HTML
<article>
    <h2>Título do post</h2>

    <p>Lorem ipsum dolor site amet consecteus adipsicing</p>
    <p>Lorem ipsum dolor site amet consecteus adipsicing</p>
    <p>Lorem ipsum dolor site amet consecteus adipsicing</p>

    <div>Escrito por Raphael</div>
  </article>
~~~

- Se eu fizer um ``console.log(article.children)``, vou receber um ``HTMLCollection``;
- Com o ``HTMLCollection``, eu não consigo iterar com um ``forEach``;
- Para isso, eu preciso converter o ``HTMLCollection`` em um ``NodeList``;

~~~javascript
const article = document.querySelector('article');
~~~

- Como fazer isso?

~~~javascript
// Convertendo o HTMLCollection em array
// Essa invocação não é destrutiva, ou seja, não altera o valor original
const articleChildren = Array.from(article.children);

// Agora, é possível iterar sobre os FILHOS de 'article'
articleChildren.forEach(element => {
  element.classList.add('article-element');
})
~~~

- Descobrindo o ``pai`` de um elemento ``parentElement``;

~~~javascript
// Descobrindo através do 'h2', quem é o pai dele
const title = document.querySelector('h2');

console.log(title.parentElement);
~~~

- Descobrindo o ``próximo irmão`` e o ``irmão anterio`` de um elemento;

~~~javascript
// Descobrindo quem é o próximo irmão de 'h2'
console.log(title.nextElementSibling);

// Descobrindo quem é o irmão anterior de 'h2'
// Recebemos um 'null', pois não existe um elemento irmão anterior
console.log(title.previousElementSibling);
~~~

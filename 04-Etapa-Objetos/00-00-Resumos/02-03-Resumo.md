# Resumo - Etapa 04 - Aula 02-03

## A palavra reservada 'this'

- 'this' é um **OBJETO DE CONTEXTO**;

- Ele representa o contexto no qual o código atual está sendo representado;

- **Exemplo 1**:

~~~javascript
let user = {
  name: 'Raphael',
  age: 31,
  email: 'raphael@gmail.com',
  city: 'Uberlandia',
  favoriteFoods: ['Empadão', 'Lasanha'],
  login () {
    console.log('Usuário logado');
  },
  logout () {
    console.log('Usuário deslogado');
  },
  logBlogPost () {
    // Dentro do método, estamos acessando 'this.name', isso significa que
    // desejamos acesar a propriedade 'name', do objeto 'user'
    console.log(`${this.name} escreveu este posts:`);
    this.blogPosts.forEach(post => console.log(post));
  },
};

user.logBlogPost();
~~~

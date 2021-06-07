/*---------------------------------------------------
  Palavra 'this'
---------------------------------------------------*/

// 'this' é um OBJETO DE CONTEXTO
// Ele representa o contexto no qual o código atual
// está sendo representado

let user = {
  name: 'Raphael',
  age: 31,
  email: 'raphael@gmail.com',
  city: 'Uberlandia',
  blogPosts: ['Empadão', 'Lasanha'],
  login () {
    console.log('Usuário logado');
  },
  logout () {
    console.log('Usuário deslogado');
  },
  logBlogPost () {
    console.log(`${this.name} escreveu este posts:`);
    this.blogPosts.forEach(post => console.log(post));
  },
};

user.logBlogPost();

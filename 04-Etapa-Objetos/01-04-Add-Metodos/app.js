/*---------------------------------------------------
  Adicionando métodos a objetos literais
---------------------------------------------------*/

let user = {
  name: 'Raphael',
  age: 31,
  email: 'raphael@gmail.com',
  city: 'Uberlandia',
  blogPosts: ['Empadão', 'Lasanha'],
  login: function () {
    console.log('Usuário logado');
  },
  logout: function () {
    console.log('Usuário deslogado');
  },
};

user.login();
user.logout();



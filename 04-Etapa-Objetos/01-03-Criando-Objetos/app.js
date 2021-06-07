/*---------------------------------------------------
  Criando Objetos Literais
---------------------------------------------------*/

let user = {
  name: 'Raphael',
  age: 31,
  email: 'raphael@gmail.com',
  city: 'Uberlandia',
  blogPosts: ['Empadão', 'Lasanha'],
};

console.log(user.name);

const key = 'city';

user[key] = 'Araguari';

console.log(user);

console.log(user['age']);

console.log(typeof user);
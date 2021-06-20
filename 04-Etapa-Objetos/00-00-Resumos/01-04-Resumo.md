# Resumo - Etapa 04 - Aula 01-04

## Adicionando métodos a objetos literais

- É possível adicionar métodos a objetos. Veja o exemplo abaixo:

- **Exemplo 1**:

~~~javascript
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

user.login(); // 'Usuário logado'
user.logout(); // 'Usuário deslogado'
~~~

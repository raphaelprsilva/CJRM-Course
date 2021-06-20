# Resumo - Etapa 04 - Aula 01-03

## Criando Objetos Literais

- **Exemplo 1**: Exemplo de um objeto:

~~~javascript
let user = {
  name: 'Raphael',
  age: 31,
  email: 'raphael@gmail.com',
  city: 'Uberlandia',
  favoriteFoods: ['Empadão', 'Lasanha'],
};
~~~

- **Exemplo 2**:

~~~javascript
// Mostra no console, a propriedade 'name', do objeto 'user'
console.log(user.name); // Raphael

// Define um novo valor para a propriedade 'key' para o objeto 'user'
const key = 'city';
user[key] = 'Araguari';

// Maneira alternativa de acessar uma propriedade de um objeto
console.log(user['age']); // 31

// Mostra o tipo da variável 'user'
console.log(typeof user); // 'object'
~~~


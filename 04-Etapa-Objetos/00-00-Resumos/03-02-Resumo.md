# Resumo - Etapa 04 - Aula 03-02

## Objetos em Arrays

- É muito comum encontrarmos ``arrays`` contendo objetos;

- Isso é frequente, quando fazemos requisições a APIs (veremos isso mais à frente);

- **Exemplo 1**:

~~~javascript
const posts = [
  {
    title: 'Empadão',
    likes: 30,
  },
  {
    title: 'Lasanha',
    likes: 50,
  }
];
~~~

- **Exemplo 2**:

~~~javascript
let user = {
  name: 'Raphael',
  age: 31,
  email: 'raphael@gmail.com',
  city: 'Uberlandia',
  blogPosts: [
    {
      title: 'Empadão',
      likes: 30,
    },
    {
      title: 'Lasanha',
      likes: 50,
    },
  ]
};
~~~

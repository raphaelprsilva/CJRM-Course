/*---------------------------------------------------
  Objetos em Arrays
---------------------------------------------------*/

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
  ],
  login () {
    console.log('Usuário logado');
  },
  logout () {
    console.log('Usuário deslogado');
  },
  logBlogPost () {
    console.log(`${this.name} escreveu este posts:`);
    this.blogPosts.forEach(post => console.log(post.title, post.likes));
  },
};

user.logBlogPost();

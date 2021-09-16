class User {
  // ATTENTION: o constructor serve para setar as propriedades do objeto
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.point = 0;
  }

  // ATTENTION: aqui, nós vamos criar os métodos da classe User
  login() {
    return `${this.name} logou na aplicação!`;
  }

  logout() {
    return `${this.name} deslogou na aplicação!`;
  }

  addPoint() {
    this.point += 1;
    return `${this.name} agora tem ${this.point} ${
      this.point > 1 ? 'pontos' : 'ponto'
    }`;
  }
}

const user = new User('Raphael', 'oi@gmail.com');
const user2 = new User('Rodrigo', 'ola@gmail.com');

user.login();
user.addPoint();
user.addPoint();

console.log('user:', user);

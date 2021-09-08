// Setando, Definindo itens na local storage
localStorage.setItem('userName', 'Raphael')
localStorage.setItem('age', '28')

// Getting, Obtendo itens da local storage
let userName = localStorage.getItem('userName');
let age = localStorage.getItem('age');

// Modificando itens na local storage
localStorage.setItem('userName', 'Rodrigo');
localStorage.setItem('age', '22');


// Removing, removendo um item em específico
localStorage.removeItem('userName');

// Cleaning, limpando toda a localStorage
localStorage.clear();

userName = localStorage.getItem('userName');
age = localStorage.getItem('age');

console.log('userName:', userName);
console.log('age:', age);
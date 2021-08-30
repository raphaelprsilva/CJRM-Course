console.log('Primeira Chamada');
console.log('Segunda Chamada');

setTimeout(() => {
  console.log('dentro do timeout');
}, 2000);

console.log('Terceira Chamada');
console.log('Quarta Chamada');